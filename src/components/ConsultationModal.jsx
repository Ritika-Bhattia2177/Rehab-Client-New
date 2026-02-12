import React, { useState } from 'react'

function ConsultationModal({ isOpen, onClose, type }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    concern: 'other',
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
      const response = await fetch('http://localhost:3000/api/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type,
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
            concern: 'other',
            message: ''
          })
        }, 2500)
      } else {
        setError(data.error || 'Failed to submit request. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting consultation:', error)
      setError('Unable to connect to server. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const handleCallNow = () => {
    window.location.href = 'tel:1-800-RECOVERY'
  }

  if (!isOpen) return null

  const isCallRequest = type === 'call_request'

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className="modal-header">
          <div className="modal-icon">
            <i className={`fas ${isCallRequest ? 'fa-phone' : 'fa-calendar-check'}`}></i>
          </div>
          <h2>{isCallRequest ? 'Request a Call Back' : 'Schedule Consultation'}</h2>
          <p>{isCallRequest ? 'We\'ll call you back within 15 minutes' : 'Book your free consultation with our experts'}</p>
        </div>

        {success ? (
          <div className="modal-success">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3>Request Submitted Successfully!</h3>
            <p>
              {isCallRequest 
                ? 'Our team will call you back shortly.' 
                : 'We\'ll confirm your consultation via email within 24 hours.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            {isCallRequest && (
              <div className="call-now-banner">
                <i className="fas fa-exclamation-circle"></i>
                <span>Need immediate help? </span>
                <button type="button" onClick={handleCallNow} className="inline-call-btn">
                  Call Now: 1-800-RECOVERY
                </button>
              </div>
            )}

            {error && (
              <div className="form-error">
                <i className="fas fa-exclamation-triangle"></i>
                {error}
              </div>
            )}

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
                  placeholder="Enter your full name"
                  required
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
                  placeholder="Your contact number"
                  required
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
                placeholder="your.email@example.com"
                required
              />
            </div>

            {!isCallRequest && (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="preferredDate">
                      <i className="fas fa-calendar"></i>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="preferredTime">
                      <i className="fas fa-clock"></i>
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (9am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 3pm)</option>
                      <option value="evening">Evening (3pm - 6pm)</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            <div className="form-group">
              <label htmlFor="concern">
                <i className="fas fa-heart"></i>
                Primary Concern
              </label>
              <select
                id="concern"
                name="concern"
                value={formData.concern}
                onChange={handleChange}
              >
                <option value="substance_abuse">Substance Abuse</option>
                <option value="alcohol">Alcohol Addiction</option>
                <option value="mental_health">Mental Health</option>
                <option value="family_support">Family Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <i className="fas fa-comment"></i>
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your situation (optional)"
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="btn-submit-modal" disabled={loading}>
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Submitting...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  {isCallRequest ? 'Request Call Back' : 'Schedule Consultation'}
                </>
              )}
            </button>

            <p className="form-note">
              <i className="fas fa-lock"></i>
              Your information is 100% confidential and secure
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

export default ConsultationModal
