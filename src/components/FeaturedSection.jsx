import React from 'react'
import { useNavigate } from 'react-router-dom'

function FeaturedSection() {
  const navigate = useNavigate()
  const stats = [
    { 
      icon: 'fa-shield-check', 
      title: 'MANUALLY REVIEWED AND VERIFIED',
      color: '#ffa500'
    },
    { 
      icon: 'fa-filter', 
      title: 'FLEXIBLE SEARCH FILTERS',
      color: '#ffa500'
    },
    { 
      icon: 'fa-calendar-check', 
      title: 'UPDATED DAILY',
      color: '#ffa500'
    },
    { 
      icon: 'fa-building', 
      title: '2,000+ CENTERS',
      color: '#ffa500'
    }
  ]

  const featuredCenters = [
    {
      id: 1,
      name: 'Serenity Springs Recovery Center',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      location: 'Los Angeles, California',
      isPremium: true,
      description: 'A premier recovery facility offering luxury accommodations, holistic therapies, and individualized treatment plans in a tranquil setting.'
    },
    {
      id: 2,
      name: 'Tranquil Pathways Wellness',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
      location: 'Miami, Florida',
      isPremium: true,
      description: 'Combining modern medical care with alternative healing methods, offering a comprehensive approach to lasting recovery.'
    },
    {
      id: 3,
      name: 'Healing Haven Treatment Center',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      location: 'Austin, Texas',
      isPremium: true,
      description: 'Family-focused recovery programs with specialized tracks for dual diagnosis and co-occurring disorders in a supportive environment.'
    }
  ]

  return (
    <section className="featured-section">
      <div className="container">
        {/* Stats Bar - News Ticker Style */}
        <div className="stats-bar">
          <div className="ticker-wrapper">
            <div className="ticker-content">
              {[...Array(3)].map((_, setIndex) => (
                <React.Fragment key={setIndex}>
                  {stats.map((stat, index) => (
                    <div key={`${setIndex}-${index}`} className="ticker-item">
                      <div className="stat-icon" style={{ color: stat.color }}>
                        <i className={`fas ${stat.icon}`}></i>
                      </div>
                      <h3 className="stat-title">{stat.title}</h3>
                      <span className="ticker-separator">•</span>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="featured-content">
          <div className="featured-text">
            <h2 className="featured-heading">Featured Recovery Centers</h2>
            <p className="featured-description">
              Discover leading rehabilitation facilities offering personalized care, evidence-based 
              treatments, and comprehensive support programs.
            </p>
            <button className="featured-cta" onClick={() => navigate('/premium-centers')}>
              Explore Premium Centers
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          <div className="featured-images">
            {featuredCenters.map((center, index) => (
              <div key={center._id || center.id} className={`featured-card featured-card-${index + 1}`}>
                <div className="featured-card-image">
                  {center.isPremium && (
                    <span className="premium-badge">
                      <i className="fas fa-star"></i> Premium
                    </span>
                  )}
                  <img src={center.image} alt={center.name} />
                  <div className="featured-card-overlay">
                    <div className="featured-card-info">
                      <h4>{center.name}</h4>
                      <p><i className="fas fa-map-marker-alt"></i> {center.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection
