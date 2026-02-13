import React, { useState } from 'react'
import { API_ENDPOINTS } from '../config/api'

function BookingForm({ isOpen, onClose, appointmentType = 'consultation' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appointmentType: appointmentType,
    preferredDate: '',
    preferredTime: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmitStatus(null)

    try {
      const response = await fetch(API_ENDPOINTS.APPOINTMENTS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus({ type: 'success', message: data.message })
        // Reset form after 2 seconds and close modal
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            appointmentType: appointmentType,
            preferredDate: '',
            preferredTime: '',
            message: ''
          })
          setSubmitStatus(null)
          onClose()
        }, 2000)
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to book appointment' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({ type: 'error', message: 'Failed to book appointment. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div className="booking-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="booking-modal-header">
          <h2>
            {appointmentType === 'consultation' 
              ? '📅 Book a Consultation' 
              : '💬 Talk to a Counselor'}
          </h2>
          <button className="booking-modal-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="preferredDate">Preferred Date *</label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="preferredTime">Preferred Time *</label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
              >
                <option value="">Select time</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:00 PM">03:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="05:00 PM">05:00 PM</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Additional Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us more about your needs..."
            ></textarea>
          </div>

          {submitStatus && (
            <div className={`form-status ${submitStatus.type}`}>
              <i className={`fas fa-${submitStatus.type === 'success' ? 'check-circle' : 'exclamation-circle'}`}></i>
              {submitStatus.message}
            </div>
          )}

          <div className="form-actions">
            <button type="button" className="btn-secondary" onClick={onClose} disabled={loading}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Booking...' : 'Book Appointment'}
            </button>
          </div>
        </form>

        <div className="booking-info">
          <p>
            <i className="fas fa-shield-alt"></i>
            Your information is confidential and will only be used to contact you about your appointment.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BookingForm
