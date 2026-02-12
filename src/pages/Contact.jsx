import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: 'email',
    urgency: 'normal'
  })

  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showTourModal, setShowTourModal] = useState(false)
  const [showAssessmentModal, setShowAssessmentModal] = useState(false)
  const [showConsultationModal, setShowConsultationModal] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')
    setIsSubmitting(true)
    
    try {
      const response = await fetch('http://localhost:3000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setFormStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          contactMethod: 'email',
          urgency: 'normal'
        })
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus('')
        }, 5000)
      } else {
        setFormStatus('error')
        console.error('Form submission error:', data.error)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const offices = [
    {
      id: 1,
      name: 'Main Office',
      address: '123 Recovery Road, Suite 100',
      city: 'Los Angeles, CA 90001',
      phone: '1-800-RECOVERY',
      email: 'info@hopepath.com',
      hours: 'Mon-Fri: 8AM - 8PM, Sat-Sun: 10AM - 6PM',
      icon: 'fa-building'
    },
    {
      id: 2,
      name: 'East Coast Office',
      address: '456 Wellness Avenue',
      city: 'New York, NY 10001',
      phone: '1-800-HELP-NOW',
      email: 'east@hopepath.com',
      hours: 'Mon-Fri: 9AM - 7PM, Sat: 10AM - 4PM',
      icon: 'fa-building'
    },
    {
      id: 3,
      name: 'Southern Office',
      address: '789 Hope Street',
      city: 'Miami, FL 33101',
      phone: '1-800-SUPPORT',
      email: 'south@hopepath.com',
      hours: 'Mon-Fri: 8AM - 8PM, Sat-Sun: 10AM - 6PM',
      icon: 'fa-building'
    }
  ]

  const faqs = [
    {
      question: 'How quickly can I get help?',
      answer: 'We offer same-day assessments and can often arrange admission within 24-48 hours.'
    },
    {
      question: 'Do you accept insurance?',
      answer: 'Yes, we work with most major insurance providers. Contact us to verify your coverage.'
    },
    {
      question: 'Are visits confidential?',
      answer: 'Absolutely. All communications and visits are completely confidential and protected by HIPAA.'
    },
    {
      question: 'Can I visit a facility before admission?',
      answer: 'Yes, we encourage facility tours. Schedule a visit by calling or using the form above.'
    }
  ]

  return (
    <>
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Get in Touch</h1>
            <p className="hero-subtitle">
              We're here to answer your questions and guide you toward recovery
            </p>
            <div className="hero-contact-buttons">
              <a href="tel:1-800-RECOVERY" className="btn-emergency btn-large">
                <i className="fas fa-phone"></i>
                Call Now: 1-800-RECOVERY
              </a>
              <a href="sms:988" className="btn-secondary btn-large">
                <i className="fas fa-comment-medical"></i>
                Text Crisis Line: 988
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="emergency-notice">
        <div className="container">
          <div className="notice-content">
            <i className="fas fa-exclamation-circle"></i>
            <div>
              <h3>Experiencing a Crisis?</h3>
              <p>If this is a medical emergency, please call 911 or go to your nearest emergency room.</p>
              <p>For mental health crisis support, call or text 988 (Suicide & Crisis Lifeline)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <p className="form-subtitle">Fill out the form below and we'll get back to you within 24 hours</p>
              
              <form onSubmit={handleSubmit} className="contact-form">
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
                      placeholder="John Doe"
                    />
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
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      <i className="fas fa-phone"></i>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      <i className="fas fa-tag"></i>
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="insurance">Insurance Questions</option>
                      <option value="programs">Program Information</option>
                      <option value="tour">Schedule a Tour</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contactMethod">
                      <i className="fas fa-comment-dots"></i>
                      Preferred Contact Method
                    </label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="either">Either</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="urgency">
                      <i className="fas fa-exclamation-triangle"></i>
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                    >
                      <option value="normal">Normal (24-48 hrs)</option>
                      <option value="urgent">Urgent (Same Day)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <i className="fas fa-message"></i>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <div className="form-privacy">
                  <i className="fas fa-lock"></i>
                  <span>Your information is confidential and protected by HIPAA</span>
                </div>

                <button type="submit" className="btn-primary btn-large" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="form-success">
                    <i className="fas fa-check-circle"></i>
                    <p>Thank you! We'll be in touch soon.</p>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="form-error">
                    <i className="fas fa-exclamation-circle"></i>
                    <p>Something went wrong. Please try again or call us directly.</p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                
                <div className="info-item">
                  <i className="fas fa-phone-volume"></i>
                  <div>
                    <h4>24/7 Helpline</h4>
                    <a href="tel:1-800-RECOVERY">1-800-RECOVERY</a>
                    <p>Available anytime, day or night</p>
                  </div>
                </div>

                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email Us</h4>
                    <a href="mailto:info@hopepath.com">info@hopepath.com</a>
                    <p>We respond within 24 hours</p>
                  </div>
                </div>

                <div className="info-item">
                  <i className="fas fa-comment-medical"></i>
                  <div>
                    <h4>Live Chat</h4>
                    <button className="btn-link" onClick={() => setIsChatOpen(true)}>Start Chat</button>
                    <p>Available Mon-Fri 8AM-8PM</p>
                  </div>
                </div>

                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Main Office</h4>
                    <p>123 Recovery Road, Suite 100</p>
                    <p>Los Angeles, CA 90001</p>
                  </div>
                </div>

                <div className="social-links">
                  <h4>Follow Us</h4>
                  <div className="social-icons">
                    <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div className="verification-badges">
                <h4>Accredited & Verified</h4>
                <div className="badges">
                  <div className="badge">
                    <i className="fas fa-certificate"></i>
                    <span>CARF Accredited</span>
                  </div>
                  <div className="badge">
                    <i className="fas fa-shield-alt"></i>
                    <span>HIPAA Compliant</span>
                  </div>
                  <div className="badge">
                    <i className="fas fa-check-circle"></i>
                    <span>Licensed Facility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="office-locations">
        <div className="container">
          <h2>Our Locations</h2>
          <p className="section-subtitle">Find a HopePath Recovery office near you</p>
          
          <div className="offices-grid">
            {offices.map(office => (
              <div key={office.id} className="office-card">
                <i className={`fas ${office.icon}`}></i>
                <h3>{office.name}</h3>
                <div className="office-details">
                  <p><i className="fas fa-map-marker-alt"></i> {office.address}</p>
                  <p className="city">{office.city}</p>
                  <p><i className="fas fa-phone"></i> {office.phone}</p>
                  <p><i className="fas fa-envelope"></i> {office.email}</p>
                  <p><i className="fas fa-clock"></i> {office.hours}</p>
                </div>
                <button className="btn-secondary">Get Directions</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="contact-faqs">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faqs-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <h3><i className="fas fa-question-circle"></i> {faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="faq-cta">
            <p>Don't see your question answered?</p>
            <button className="btn-primary">View All FAQs</button>
          </div>
        </div>
      </section>

      {/* Real-Time Availability & Statistics */}
      <section className="contact-stats">
        <div className="container">
          <div className="stats-header">
            <h2>Real-Time Information</h2>
            <p>Live updates on our services and availability</p>
          </div>
          
          <div className="stats-grid">
            {/* Live Availability */}
            <div className="stat-card availability-card">
              <div className="stat-icon pulse">
                <i className="fas fa-heartbeat"></i>
              </div>
              <div className="stat-content">
                <h3>Beds Available Now</h3>
                <div className="stat-number">12</div>
                <p className="stat-label">Across all facilities</p>
                <div className="availability-status">
                  <span className="status-dot active"></span>
                  <span>Accepting admissions 24/7</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="stat-content">
                <h3>Average Response Time</h3>
                <div className="stat-number">15 min</div>
                <p className="stat-label">During business hours</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>

            {/* Success Rate */}
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="stat-content">
                <h3>Recovery Success Rate</h3>
                <div className="stat-number">87%</div>
                <p className="stat-label">Patients completing program</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '87%' }}></div>
                </div>
              </div>
            </div>

            {/* Insurance Coverage */}
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="stat-content">
                <h3>Insurance Accepted</h3>
                <div className="stat-number">95%</div>
                <p className="stat-label">Of major providers covered</p>
                <button className="btn-link">Verify Coverage <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>

            {/* Active Counselors */}
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-user-md"></i>
              </div>
              <div className="stat-content">
                <h3>Counselors Online</h3>
                <div className="stat-number">8</div>
                <p className="stat-label">Available for consultation</p>
                <button className="btn-link">Chat Now <i className="fas fa-comments"></i></button>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="stat-card highlight">
              <div className="stat-icon">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="stat-content">
                <h3>24/7 Support Available</h3>
                <div className="stat-cta">
                  <a href="tel:1-800-RECOVERY" className="btn-emergency">
                    <i className="fas fa-phone"></i>
                    Call 1-800-RECOVERY
                  </a>
                  <p>Average wait time: Under 1 minute</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <div className="action-card">
              <i className="fas fa-calendar-check"></i>
              <h4>Schedule a Tour</h4>
              <p>Visit our facilities in person</p>
              <button className="btn-secondary" onClick={() => setShowTourModal(true)}>Book Now</button>
            </div>
            <div className="action-card">
              <i className="fas fa-file-medical"></i>
              <h4>Free Assessment</h4>
              <p>Get personalized treatment plan</p>
              <button className="btn-secondary" onClick={() => setShowAssessmentModal(true)}>Start Assessment</button>
            </div>
            <div className="action-card">
              <i className="fas fa-video"></i>
              <h4>Virtual Consultation</h4>
              <p>Speak with a counselor online</p>
              <button className="btn-secondary" onClick={() => setShowConsultationModal(true)}>Join Meeting</button>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Booking Modal */}
      {showTourModal && (
        <div className="modal-overlay" onClick={() => setShowTourModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowTourModal(false)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-header">
              <i className="fas fa-calendar-check"></i>
              <h2>Schedule a Facility Tour</h2>
              <p>Choose a date and time to visit our facility</p>
            </div>
            <form className="modal-form" onSubmit={(e) => { e.preventDefault(); alert('Tour booking submitted! We will contact you shortly.'); setShowTourModal(false); }}>
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" placeholder="(555) 123-4567" required />
              </div>
              <div className="form-group">
                <label>Preferred Location *</label>
                <select required>
                  <option value="">Select a location</option>
                  <option value="main">Main Office - Los Angeles</option>
                  <option value="east">East Coast Office - New York</option>
                  <option value="south">Southern Office - Miami</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Preferred Date *</label>
                  <input type="date" required />
                </div>
                <div className="form-group">
                  <label>Preferred Time *</label>
                  <input type="time" required />
                </div>
              </div>
              <div className="form-group">
                <label>Additional Notes</label>
                <textarea rows="3" placeholder="Any specific questions or requirements?"></textarea>
              </div>
              <button type="submit" className="btn-primary btn-full">
                <i className="fas fa-check"></i>
                Confirm Tour Booking
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Assessment Modal */}
      {showAssessmentModal && (
        <div className="modal-overlay" onClick={() => setShowAssessmentModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowAssessmentModal(false)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-header">
              <i className="fas fa-file-medical"></i>
              <h2>Free Assessment</h2>
              <p>Get a personalized treatment recommendation</p>
            </div>
            <form className="modal-form" onSubmit={(e) => { e.preventDefault(); alert('Assessment submitted! A counselor will review and contact you within 24 hours.'); setShowAssessmentModal(false); }}>
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" placeholder="(555) 123-4567" required />
              </div>
              <div className="form-group">
                <label>Type of Substance *</label>
                <select required>
                  <option value="">Select substance type</option>
                  <option value="alcohol">Alcohol</option>
                  <option value="opioids">Opioids/Pain Medication</option>
                  <option value="cocaine">Cocaine</option>
                  <option value="meth">Methamphetamine</option>
                  <option value="marijuana">Marijuana</option>
                  <option value="prescription">Prescription Drugs</option>
                  <option value="multiple">Multiple Substances</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>How long have you been using? *</label>
                <select required>
                  <option value="">Select duration</option>
                  <option value="less-6">Less than 6 months</option>
                  <option value="6-12">6-12 months</option>
                  <option value="1-2">1-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5plus">5+ years</option>
                </select>
              </div>
              <div className="form-group">
                <label>Do you have insurance?</label>
                <select>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="unsure">Not Sure</option>
                </select>
              </div>
              <div className="form-group">
                <label>Additional Information</label>
                <textarea rows="3" placeholder="Tell us more about your situation..."></textarea>
              </div>
              <button type="submit" className="btn-primary btn-full">
                <i className="fas fa-check"></i>
                Submit Assessment
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Virtual Consultation Modal */}
      {showConsultationModal && (
        <div className="modal-overlay" onClick={() => setShowConsultationModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowConsultationModal(false)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-header">
              <i className="fas fa-video"></i>
              <h2>Virtual Consultation</h2>
              <p>Schedule a video call with our counselors</p>
            </div>
            <form className="modal-form" onSubmit={(e) => { e.preventDefault(); alert('Consultation scheduled! You will receive a video meeting link via email.'); setShowConsultationModal(false); }}>
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" placeholder="(555) 123-4567" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Preferred Date *</label>
                  <input type="date" required />
                </div>
                <div className="form-group">
                  <label>Preferred Time *</label>
                  <select required>
                    <option value="">Select time</option>
                    <option value="9am">9:00 AM</option>
                    <option value="10am">10:00 AM</option>
                    <option value="11am">11:00 AM</option>
                    <option value="12pm">12:00 PM</option>
                    <option value="1pm">1:00 PM</option>
                    <option value="2pm">2:00 PM</option>
                    <option value="3pm">3:00 PM</option>
                    <option value="4pm">4:00 PM</option>
                    <option value="5pm">5:00 PM</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>What would you like to discuss? *</label>
                <select required>
                  <option value="">Select topic</option>
                  <option value="treatment">Treatment Options</option>
                  <option value="admission">Admission Process</option>
                  <option value="insurance">Insurance & Payment</option>
                  <option value="family">Family Support</option>
                  <option value="general">General Consultation</option>
                </select>
              </div>
              <div className="form-group">
                <label>Additional Notes</label>
                <textarea rows="3" placeholder="Any specific questions or concerns?"></textarea>
              </div>
              <button type="submit" className="btn-primary btn-full">
                <i className="fas fa-check"></i>
                Schedule Consultation
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}

export default Contact
