import React, { useState } from 'react'

function InquiryModal({ isOpen, onClose, type, programName }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('http://localhost:3000/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type,
          programName,
          ...formData
        })
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSuccess(true)
        setTimeout(() => {
          onClose()
          setSuccess(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            preferredDate: '',
            preferredTime: '',
            message: ''
          })
        }, 2000)
      } else {
        setError(data.error || 'Failed to submit inquiry. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error)
      setError('Unable to connect to server. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  const isVisitSchedule = type === 'visit_schedule'

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className="modal-header">
          <div className="modal-icon">
            <i className={`fas ${isVisitSchedule ? 'fa-calendar-check' : 'fa-phone-alt'}`}></i>
          </div>
          <h2>{isVisitSchedule ? 'Schedule a Visit' : 'Inquire About This Program'}</h2>
          <p>{programName}</p>
        </div>

        {success ? (
          <div className="modal-success">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3>Request Submitted Successfully!</h3>
            <p>Our team will contact you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="fas fa-user"></i>
                  Full Name *
                </label>
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
                <label htmlFor="phone">
                  <i className="fas fa-phone"></i>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <i className="fas fa-envelope"></i>
                Email Address *
              </label>
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

            {isVisitSchedule && (
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="preferredDate">
                    <i className="fas fa-calendar"></i>
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required={isVisitSchedule}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="preferredTime">
                    <i className="fas fa-clock"></i>
                    Preferred Time *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required={isVisitSchedule}
                  >
                    <option value="">Select time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="message">
                <i className="fas fa-comment"></i>
                Additional Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us more about your needs or any questions you have..."
              ></textarea>
            </div>

            {error && (
              <div className="form-error">
                <i className="fas fa-exclamation-circle"></i>
                {error}
              </div>
            )}

            <button type="submit" className="btn-submit-modal" disabled={loading}>
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Submitting...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  Submit Request
                </>
              )}
            </button>

            <p className="form-note">
              <i className="fas fa-lock"></i>
              Your information is secure and confidential
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

export default InquiryModal
