import React, { useState, useEffect } from 'react'
import { API_ENDPOINTS } from '../config/api'

function Testimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      setLoading(true)
      const response = await fetch(API_ENDPOINTS.TESTIMONIALS)
      const data = await response.json()

      if (data.success) {
        setTestimonials(data.data)
      } else {
        setError('Failed to load testimonials')
      }
    } catch (err) {
      console.error('Error fetching testimonials:', err)
      setError('Failed to load testimonials')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <h2 className="testimonials-heading">Stories of Hope & Recovery</h2>
            <p className="testimonials-subtitle">Loading testimonials...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <h2 className="testimonials-heading">Stories of Hope & Recovery</h2>
            <p className="testimonials-subtitle">{error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-heading">Stories of Hope & Recovery</h2>
          <p className="testimonials-subtitle">
            Real experiences from people who found a new beginning with our support.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial._id} className="testimonial-card">
              <div className="testimonial-avatar">
                <span className="avatar-emoji">{testimonial.avatar}</span>
              </div>

              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <i key={index} className="fas fa-star"></i>
                ))}
              </div>

              <p className="testimonial-review">"{testimonial.review}"</p>

              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                {testimonial.verified && (
                  <span className="verified-badge">
                    <i className="fas fa-check-circle"></i> Verified Patient
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-footer">
          <p className="privacy-note">
            <i className="fas fa-lock"></i> All testimonials are shared with patient consent and privacy protection
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
