import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { API_ENDPOINTS } from '../config/api'

function CenterDetails() {
  const { id } = useParams()
  const [center, setCenter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    fetchCenterDetails()
  }, [id])

  const fetchCenterDetails = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.CENTERS)
      const data = await response.json()
      
      if (data.success) {
        // Find by sequential id or MongoDB _id
        // Convert both to strings for comparison
        const foundCenter = data.data.find(c => {
          // Try matching by sequential id first (more reliable)
          if (c.id && String(c.id) === String(id)) return true;
          if (c.id === parseInt(id)) return true;
          // Fallback to MongoDB _id
          if (c._id && String(c._id) === String(id)) return true;
          return false;
        })
        
        if (foundCenter) {
          setCenter(foundCenter)
        } else {
          console.log('Center not found.')
          console.log('Looking for ID:', id)
          console.log('Available IDs:', data.data.map(c => ({ id: c.id, _id: c._id })))
        }
      }
    } catch (error) {
      console.error('Error fetching center:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleGetDirections = () => {
    const addressParts = [
      center?.address,
      center?.city,
      center?.state,
      center?.zip,
      center?.country
    ].filter(Boolean)

    const locationQuery = addressParts.length > 0
      ? addressParts.join(', ')
      : `${center?.name || ''}, ${center?.city || ''}, ${center?.state || ''}`

    const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationQuery.trim())}`
    window.open(directionsUrl, '_blank', 'noopener,noreferrer')
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading center details...</p>
        </div>
        <Footer />
      </>
    )
  }

  if (!center) {
    return (
      <>
        <Navbar />
        <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
          <h2>Center not found</h2>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Center Image */}
      <section className="center-detail-hero">
        <div className="center-hero-image">
          <img src={center.image} alt={center.name} />
          <div className="center-hero-overlay">
            <div className="container">
              <div className="center-hero-content">
                <span className="verified-badge">
                  <i className="fas fa-check-circle"></i> Verified Center
                </span>
                <h1>{center.name}</h1>
                <p className="center-location">
                  <i className="fas fa-map-marker-alt"></i>
                  {center.city}, {center.state}
                </p>
                <div className="center-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star ${i < center.rating ? 'filled' : ''}`}></i>
                    ))}
                  </div>
                  <span>{center.rating} Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Bar */}
      <section className="quick-actions-bar">
        <div className="container">
          <div className="actions-wrapper">
            <button className="action-btn primary">
              <i className="fas fa-phone"></i>
              Call Now
            </button>
            <button className="action-btn">
              <i className="fab fa-whatsapp"></i>
              WhatsApp
            </button>
            <button className="action-btn">
              <i className="fas fa-envelope"></i>
              Send Enquiry
            </button>
            <button className="action-btn">
              <i className="fas fa-calendar"></i>
              Book Visit
            </button>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="center-tabs">
        <div className="container">
          <div className="tabs-nav">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab-btn ${activeTab === 'facilities' ? 'active' : ''}`}
              onClick={() => setActiveTab('facilities')}
            >
              Facilities
            </button>
            <button 
              className={`tab-btn ${activeTab === 'programs' ? 'active' : ''}`}
              onClick={() => setActiveTab('programs')}
            >
              Programs
            </button>
            <button 
              className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="center-content">
        <div className="container">
          <div className="content-layout">
            {/* Main Content */}
            <div className="main-content">
              {activeTab === 'overview' && (
                <>
                  <div className="content-section">
                    <h2>About {center.name}</h2>
                    <p>{center.description}</p>
                    <p>
                      Our center specializes in providing comprehensive rehabilitation services 
                      with a holistic approach to recovery. We combine modern medical practices 
                      with traditional therapies to ensure the best outcomes for our patients.
                    </p>
                  </div>

                  <div className="content-section">
                    <h2>Programme Highlights</h2>
                    <div className="highlights-grid">
                      <div className="highlight-card">
                        <div className="highlight-icon">
                          <i className="fas fa-user-md"></i>
                        </div>
                        <h3>Expert Medical Team</h3>
                        <p>Highly qualified doctors and therapists with years of experience</p>
                      </div>
                      <div className="highlight-card">
                        <div className="highlight-icon">
                          <i className="fas fa-spa"></i>
                        </div>
                        <h3>Holistic Approach</h3>
                        <p>Combining medical treatment with yoga, meditation, and wellness</p>
                      </div>
                      <div className="highlight-card">
                        <div className="highlight-icon">
                          <i className="fas fa-utensils"></i>
                        </div>
                        <h3>Nutritious Meals</h3>
                        <p>Specially designed diet plans for optimal recovery</p>
                      </div>
                      <div className="highlight-card">
                        <div className="highlight-icon">
                          <i className="fas fa-clock"></i>
                        </div>
                        <h3>24/7 Support</h3>
                        <p>Round-the-clock care and monitoring for patient safety</p>
                      </div>
                    </div>
                  </div>

                  <div className="content-section">
                    <h2>Treatment Specialties</h2>
                    <div className="specialties-list">
                      {center.specialties.map((specialty, index) => (
                        <span key={index} className="specialty-tag">{specialty}</span>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'facilities' && (
                <div className="content-section">
                  <h2>World-Class Facilities</h2>
                  <div className="facilities-grid">
                    <div className="facility-item">
                      <i className="fas fa-bed"></i>
                      <h4>Comfortable Accommodations</h4>
                      <p>{center.beds} well-appointed beds with modern amenities</p>
                    </div>
                    <div className="facility-item">
                      <i className="fas fa-dumbbell"></i>
                      <h4>Fitness Center</h4>
                      <p>Fully equipped gym and yoga studio</p>
                    </div>
                    <div className="facility-item">
                      <i className="fas fa-leaf"></i>
                      <h4>Green Spaces</h4>
                      <p>Beautiful gardens for meditation and relaxation</p>
                    </div>
                    <div className="facility-item">
                      <i className="fas fa-wifi"></i>
                      <h4>Modern Amenities</h4>
                      <p>High-speed internet, TV, and recreational facilities</p>
                    </div>
                    <div className="facility-item">
                      <i className="fas fa-shield-alt"></i>
                      <h4>Safe Environment</h4>
                      <p>24/7 security and monitored premises</p>
                    </div>
                    <div className="facility-item">
                      <i className="fas fa-heartbeat"></i>
                      <h4>Medical Equipment</h4>
                      <p>State-of-the-art medical and diagnostic facilities</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'programs' && (
                <div className="content-section">
                  <h2>Treatment Programs</h2>
                  <div className="programs-list">
                    {center.treatmentTypes.map((program, index) => (
                      <div key={index} className="program-card">
                        <h3>{program}</h3>
                        <p>
                          Comprehensive treatment program designed to address {program.toLowerCase()} 
                          with evidence-based therapies and personalized care plans.
                        </p>
                        <button className="learn-more-btn">Learn More</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="content-section">
                  <h2>Patient Reviews</h2>
                  <div className="reviews-summary">
                    <div className="rating-overview">
                      <div className="rating-number">{center.rating}</div>
                      <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`fas fa-star ${i < center.rating ? 'filled' : ''}`}></i>
                        ))}
                      </div>
                      <p>Based on 50+ reviews</p>
                    </div>
                  </div>
                  
                  <div className="reviews-list">
                    <div className="review-card">
                      <div className="review-header">
                        <div className="reviewer-info">
                          <div className="reviewer-avatar">
                            <i className="fas fa-user"></i>
                          </div>
                          <div>
                            <h4>Rajesh Kumar</h4>
                            <p className="review-date">2 weeks ago</p>
                          </div>
                        </div>
                        <div className="review-rating">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fas fa-star filled"></i>
                          ))}
                        </div>
                      </div>
                      <p className="review-text">
                        Excellent facility with caring staff. The treatment program was very effective 
                        and helped me get back on track. Highly recommended for anyone seeking quality care.
                      </p>
                    </div>

                    <div className="review-card">
                      <div className="review-header">
                        <div className="reviewer-info">
                          <div className="reviewer-avatar">
                            <i className="fas fa-user"></i>
                          </div>
                          <div>
                            <h4>Priya Sharma</h4>
                            <p className="review-date">1 month ago</p>
                          </div>
                        </div>
                        <div className="review-rating">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fas fa-star filled"></i>
                          ))}
                        </div>
                      </div>
                      <p className="review-text">
                        My brother was treated here and the transformation has been incredible. 
                        The doctors are professional and the environment is very peaceful.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="sidebar">
              <div className="sidebar-card">
                <h3>Request Information</h3>
                <form className="enquiry-form">
                  <input type="text" placeholder="Your Name" required />
                  <input type="tel" placeholder="Phone Number" required />
                  <input type="email" placeholder="Email Address" required />
                  <textarea placeholder="Your Message" rows="4"></textarea>
                  <button type="submit" className="submit-btn">Send Enquiry</button>
                </form>
              </div>

              <div className="sidebar-card">
                <h3>Quick Facts</h3>
                <div className="quick-facts">
                  <div className="fact-item">
                    <i className="fas fa-bed"></i>
                    <div>
                      <strong>{center.beds}</strong>
                      <span>Beds Available</span>
                    </div>
                  </div>
                  <div className="fact-item">
                    <i className="fas fa-star"></i>
                    <div>
                      <strong>{center.rating}/5</strong>
                      <span>Patient Rating</span>
                    </div>
                  </div>
                  <div className="fact-item">
                    <i className="fas fa-check-circle"></i>
                    <div>
                      <strong>Verified</strong>
                      <span>Licensed Center</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Location</h3>
                <div className="location-info">
                  <p><i className="fas fa-map-marker-alt"></i> {center.city}, {center.state}</p>
                  <button
                    className="direction-btn"
                    type="button"
                    onClick={handleGetDirections}
                  >
                    <i className="fas fa-directions"></i>
                    Get Directions
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  )
}

export default CenterDetails
