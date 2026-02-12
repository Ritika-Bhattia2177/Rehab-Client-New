import React from 'react'
import { Link } from 'react-router-dom'

function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      category: 'Recovery Journey',
      title: 'The First 30 Days: What to Expect in Early Recovery',
      excerpt: 'Understanding the challenges and milestones of the crucial first month can help you stay committed to your recovery goals and build a strong foundation...',
      author: 'Sarah Mitchell',
      authorAvatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop',
      date: 'January 28, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&h=500&fit=crop',
      categoryIcon: 'fa-route'
    },
    {
      id: 7,
      category: 'Mental Health',
      title: 'Understanding Co-Occurring Disorders in Addiction Treatment',
      excerpt: 'Many individuals struggling with addiction also face mental health challenges. Learn how integrated treatment approaches address both conditions simultaneously...',
      author: 'Dr. Michael Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      date: 'January 22, 2026',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
      categoryIcon: 'fa-brain'
    },
    {
      id: 3,
      category: 'Family Support',
      title: 'How Families Can Support a Loved One in Recovery',
      excerpt: 'Recovery is a family journey. Discover practical ways to provide support, set healthy boundaries, and foster an environment that promotes lasting change...',
      author: 'Jennifer Rodriguez',
      authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
      date: 'January 15, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=500&fit=crop',
      categoryIcon: 'fa-users'
    }
  ]

  return (
    <section className="section blog-section" id="blog">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Recovery Stories & Insights</h2>
          <p className="section-subtitle">
            Read inspiring stories, expert advice, and the latest research on addiction recovery and mental wellness.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card-home">
              <div className="blog-image-wrapper-home">
                <img src={post.image} alt={post.title} className="blog-img-home" />
                <div className="blog-overlay-home"></div>
                <span className="blog-category-badge-home">
                  <i className={`fas ${post.categoryIcon}`}></i> {post.category}
                </span>
              </div>
              <div className="blog-content-home">
                <h3 className="blog-title-home">{post.title}</h3>
                <p className="blog-excerpt-home">{post.excerpt}</p>
                <div className="blog-meta-home">
                  <div className="author-info-home">
                    <img src={post.authorAvatar} alt={post.author} className="author-avatar-home" />
                    <span className="blog-author-home">{post.author}</span>
                  </div>
                  <div className="blog-stats-home">
                    <span className="blog-date-home">
                      <i className="fas fa-calendar-alt"></i> {post.date}
                    </span>
                  </div>
                </div>
                <Link to={`/blog/${post.id}`} className="btn-read-home">
                  Read Article <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="section-footer">
          <Link to="/blogs" className="btn-primary-home">
            View All Articles <i className="fas fa-book-open"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
