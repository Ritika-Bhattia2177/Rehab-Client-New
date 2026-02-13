import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import BookingForm from '../components/BookingForm'

function Programs() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('all')
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  useEffect(() => {
    fetchServices()
  }, [activeCategory])

  const fetchServices = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (activeCategory !== 'all') {
        params.append('category', activeCategory)
      }

      const response = await fetch(`' + API_BASE_URL + '/api/services?${params.toString()}`)
      const data = await response.json()

      if (data.success) {
        setServices(data.data)
      }
    } catch (error) {
      console.error('Error fetching services:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleEnrollNow = (service) => {
    setSelectedService(service)
    setIsBookingOpen(true)
  }

  const categories = [
    { id: 'all', name: 'All Programs' },
    { id: 'Addiction Recovery', name: 'Addiction Recovery' },
    { id: 'Mental Health', name: 'Mental Health' },
    { id: 'Therapy', name: 'Therapy' },
    { id: 'Wellness', name: 'Wellness' },
    { id: 'Counseling', name: 'Counseling' },
    { id: 'Rehabilitation', name: 'Rehabilitation' }
  ]

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="container">
          <div className="programs-hero-content">
            <h1 className="programs-hero-title">Our Treatment Programs</h1>
            <p className="programs-hero-subtitle">
              Comprehensive recovery programs designed to support your journey to wellness
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="programs-filter-section">
        <div className="container">
          <div className="programs-filter">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="programs-section">
        <div className="container">
          {loading ? (
            <div className="programs-loading">
              <i className="fas fa-spinner fa-spin"></i>
              <p>Loading programs...</p>
            </div>
          ) : services.length === 0 ? (
            <div className="programs-empty">
              <i className="fas fa-folder-open"></i>
              <p>No programs found in this category</p>
            </div>
          ) : (
            <div className="programs-grid">
              {services.map((service) => (
                <div key={service._id} className="program-card">
                  <div className="program-image">
                    <img src={service.image} alt={service.title} />
                    <div className="program-category-badge">{service.category}</div>
                  </div>

                  <div className="program-content">
                    <h3 className="program-title">{service.title}</h3>
                    <p className="program-description">{service.description}</p>

                    <div className="program-meta">
                      <div className="program-meta-item">
                        <i className="fas fa-clock"></i>
                        <span>{service.duration}</span>
                      </div>
                      <div className="program-meta-item">
                        <i className="fas fa-rupee-sign"></i>
                        <span>{formatPrice(service.price)}</span>
                      </div>
                    </div>

                    {service.features && service.features.length > 0 && (
                      <div className="program-features">
                        <h4>What's Included:</h4>
                        <ul>
                          {service.features.slice(0, 4).map((feature, index) => (
                            <li key={index}>
                              <i className="fas fa-check-circle"></i>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="program-footer">
                      <div className="program-capacity">
                        <span className="capacity-text">
                          {service.enrolled}/{service.capacity} enrolled
                        </span>
                        <div className="capacity-bar">
                          <div 
                            className="capacity-fill" 
                            style={{ width: `${(service.enrolled / service.capacity) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <button 
                        className="btn-enroll"
                        onClick={() => handleEnrollNow(service)}
                        disabled={service.enrolled >= service.capacity}
                      >
                        {service.enrolled >= service.capacity ? (
                          <>
                            <i className="fas fa-ban"></i>
                            Full
                          </>
                        ) : (
                          <>
                            <i className="fas fa-user-plus"></i>
                            Enroll Now
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="programs-info-section">
        <div className="container">
          <div className="programs-info-grid">
            <div className="info-card">
              <i className="fas fa-user-md"></i>
              <h3>Expert Care</h3>
              <p>Our programs are led by experienced professionals</p>
            </div>
            <div className="info-card">
              <i className="fas fa-certificate"></i>
              <h3>Accredited</h3>
              <p>All programs meet national healthcare standards</p>
            </div>
            <div className="info-card">
              <i className="fas fa-heart"></i>
              <h3>Personalized</h3>
              <p>Treatment plans tailored to your unique needs</p>
            </div>
            <div className="info-card">
              <i className="fas fa-hands-helping"></i>
              <h3>Support</h3>
              <p>Ongoing support throughout your recovery journey</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />

      {/* Booking Form Modal */}
      {isBookingOpen && (
        <BookingForm 
          isOpen={isBookingOpen}
          onClose={() => {
            setIsBookingOpen(false)
            setSelectedService(null)
          }}
          appointmentType="consultation"
          serviceTitle={selectedService?.title}
        />
      )}
    </>
  )
}

export default Programs
