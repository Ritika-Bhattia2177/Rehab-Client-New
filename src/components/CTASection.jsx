import React, { useState } from 'react'
import BookingForm from './BookingForm'

function CTASection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [appointmentType, setAppointmentType] = useState('consultation')

  const handleOpenBooking = (type) => {
    setAppointmentType(type)
    setIsBookingOpen(true)
  }

  return (
    <>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-heading">Take the First Step Towards Recovery</h2>
            <p className="cta-subtitle">
              Our compassionate team is here to guide you on your journey to healing.
              Book a consultation or speak with a counselor today.
            </p>

            <div className="cta-buttons">
              <button 
                className="cta-btn primary"
                onClick={() => handleOpenBooking('consultation')}
              >
                <i className="fas fa-calendar-check"></i>
                Book Consultation
              </button>
              
              <button 
                className="cta-btn secondary"
                onClick={() => handleOpenBooking('counselor')}
              >
                <i className="fas fa-comments"></i>
                Talk to Counselor
              </button>
            </div>

            <div className="cta-features">
              <div className="cta-feature">
                <i className="fas fa-phone-alt"></i>
                <span>24/7 Support</span>
              </div>
              <div className="cta-feature">
                <i className="fas fa-user-shield"></i>
                <span>Confidential</span>
              </div>
              <div className="cta-feature">
                <i className="fas fa-heart"></i>
                <span>Compassionate Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingForm 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        appointmentType={appointmentType}
      />
    </>
  )
}

export default CTASection
