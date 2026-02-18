import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import API_BASE_URL, { API_ENDPOINTS } from '../config/api'

function Resources() {
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeType, setActiveType] = useState('all')
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    fetchResources()
  }, [activeType, activeCategory])

  const fetchResources = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (activeType !== 'all') params.append('type', activeType)
      if (activeCategory !== 'all') params.append('category', activeCategory)

      const response = await fetch(`${API_ENDPOINTS.RESOURCES}?${params.toString()}`)
      const data = await response.json()

      if (data.success) {
        setResources(data.data)
      }
    } catch (error) {
      console.error('Error fetching resources:', error)
    } finally {
      setLoading(false)
    }
  }

  const types = ['all', 'Article', 'PDF', 'Video', 'Guide', 'Infographic']
  const categories = ['all', 'Recovery', 'Mental Health', 'Family Support', 'Prevention', 'Wellness']

  const getTypeIcon = (type) => {
    const icons = {
      'Article': 'fa-file-alt',
      'PDF': 'fa-file-pdf',
      'Video': 'fa-video',
      'Guide': 'fa-book',
      'Infographic': 'fa-chart-bar'
    }
    return icons[type] || 'fa-file'
  }

  const handleResourceClick = async (resource) => {
    if (resource.link) {
      window.open(resource.link, '_blank')
    }
    
    // Track view
    try {
      await fetch(`${API_BASE_URL}/api/resources/${resource._id}`)
    } catch (error) {
      console.error('Error tracking view:', error)
    }
  }

  return (
    <>
      <Navbar />
      
      <section className="resources-hero">
        <div className="container">
          <h1>Recovery Resources</h1>
          <p>Access helpful guides, articles, and educational materials for your recovery journey</p>
        </div>
      </section>

      <section className="resources-filters">
        <div className="container">
          <div className="filter-group">
            <h3>Type:</h3>
            <div className="filter-buttons">
              {types.map(type => (
                <button
                  key={type}
                  className={`filter-btn ${activeType === type ? 'active' : ''}`}
                  onClick={() => setActiveType(type)}
                >
                  {type === 'all' ? 'All Types' : type}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>Category:</h3>
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="resources-section">
        <div className="container">
          {loading ? (
            <div className="resources-loading">
              <i className="fas fa-spinner fa-spin"></i>
              <p>Loading resources...</p>
            </div>
          ) : resources.length === 0 ? (
            <div className="resources-empty">
              <i className="fas fa-folder-open"></i>
              <p>No resources found</p>
            </div>
          ) : (
            <div className="resources-grid">
              {resources.map(resource => (
                <div 
                  key={resource._id} 
                  className="resource-card"
                  onClick={() => handleResourceClick(resource)}
                >
                  <div className="resource-image">
                    <img src={resource.thumbnail} alt={resource.title} />
                    <div className="resource-type-badge">
                      <i className={`fas ${getTypeIcon(resource.type)}`}></i>
                      {resource.type}
                    </div>
                  </div>

                  <div className="resource-content">
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>

                    <div className="resource-meta">
                      <span className="resource-category">
                        <i className="fas fa-tag"></i>
                        {resource.category}
                      </span>
                      {resource.author && (
                        <span className="resource-author">
                          <i className="fas fa-user"></i>
                          {resource.author}
                        </span>
                      )}
                      <span className="resource-views">
                        <i className="fas fa-eye"></i>
                        {resource.views} views
                      </span>
                    </div>

                    <button className="resource-btn">
                      <i className="fas fa-external-link-alt"></i>
                      {resource.type === 'PDF' ? 'Download' : resource.type === 'Video' ? 'Watch' : 'Read'}
                    </button>
                  </div>
                </div>
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

export default Resources
