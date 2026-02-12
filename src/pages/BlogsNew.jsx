import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function Blogs() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    fetchBlogs()
  }, [activeCategory])

  const fetchBlogs = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (activeCategory !== 'all') params.append('category', activeCategory)

      const response = await fetch(`http://localhost:3000/api/blogs?${params.toString()}`)
      const data = await response.json()

      if (data.success) {
        setBlogs(data.data)
      }
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  const categories = ['all', 'Recovery Stories', 'Health Tips', 'News', 'Research', 'Community']

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <>
      <Navbar />
      
      <section className="blogs-hero">
        <div className="container">
          <h1>Our Blog</h1>
          <p>Stories, insights, and updates from the recovery community</p>
        </div>
      </section>

      <section className="blogs-filter">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="blogs-section">
        <div className="container">
          {loading ? (
            <div className="blogs-loading">
              <i className="fas fa-spinner fa-spin"></i>
              <p>Loading blogs...</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="blogs-empty">
              <i className="fas fa-folder-open"></i>
              <p>No blog posts found</p>
            </div>
          ) : (
            <div className="blogs-grid">
              {blogs.map(blog => (
                <Link 
                  to={`/blog/${blog._id}`} 
                  key={blog._id} 
                  className="blog-card"
                >
                  <div className="blog-image">
                    <img src={blog.image} alt={blog.title} />
                    <div className="blog-category-badge">{blog.category}</div>
                  </div>

                  <div className="blog-content">
                    <h3>{blog.title}</h3>
                    <p className="blog-excerpt">{blog.excerpt}</p>

                    <div className="blog-meta">
                      <span className="blog-author">
                        <i className="fas fa-user"></i>
                        {blog.author}
                      </span>
                      <span className="blog-date">
                        <i className="fas fa-calendar"></i>
                        {formatDate(blog.createdAt)}
                      </span>
                      <span className="blog-views">
                        <i className="fas fa-eye"></i>
                        {blog.views} views
                      </span>
                    </div>

                    {blog.tags && blog.tags.length > 0 && (
                      <div className="blog-tags">
                        {blog.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="blog-tag">#{tag}</span>
                        ))}
                      </div>
                    )}

                    <div className="blog-read-more">
                      Read More <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Blogs
