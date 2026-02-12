import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  })

  const [formStatus, setFormStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setFormStatus(null)

    try {
      const response = await fetch('http://localhost:3000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        setFormStatus({ type: 'success', message: data.message })
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'General Inquiry',
          message: ''
        })
      } else {
        setFormStatus({ type: 'error', message: data.error || 'Failed to send message' })
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setFormStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: 'fa-phone',
      title: '24/7 Helpline',
      content: '1-800-RECOVERY',
      link: 'tel:1800762683'
    },
    {
      icon: 'fa-envelope',
      title: 'Email Us',
      content: 'info@hopepath.com',
      link: 'mailto:info@hopepath.com'
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'Visit Us',
      content: '123 Recovery Road, Los Angeles, CA 90001',
      link: null
    },
    {
      icon: 'fa-clock',
      title: 'Working Hours',
      content: 'Mon-Fri: 8AM - 8PM, Sat-Sun: 10AM - 6PM',
      link: null
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
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Get in Touch</h1>
            <p className="contact-hero-subtitle">
              We're here to help. Reach out 24/7 for support, questions, or to schedule a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-info-icon">
                  <i className={`fas ${info.icon}`}></i>
                </div>
                <h3>{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="contact-info-link">
                    {info.content}
                  </a>
                ) : (
                  <p>{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-wrapper">
            <div className="contact-form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
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
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Admission Question">Admission Question</option>
                    <option value="Insurance Verification">Insurance Verification</option>
                    <option value="Facility Tour">Facility Tour</option>
                    <option value="Support Request">Support Request</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
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

              {formStatus && (
                <div className={`form-status ${formStatus.type}`}>
                  <i className={`fas fa-${formStatus.type === 'success' ? 'check-circle' : 'exclamation-circle'}`}></i>
                  {formStatus.message}
                </div>
              )}

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? (
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
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq-section">
        <div className="container">
          <div className="contact-faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">
                  <i className="fas fa-question-circle"></i>
                  {faq.question}
                </h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="contact-emergency-section">
        <div className="container">
          <div className="emergency-card">
            <div className="emergency-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <div className="emergency-content">
              <h2>In Case of Emergency</h2>
              <p>If you or someone you know is in immediate danger or experiencing a medical emergency, please call:</p>
              <a href="tel:911" className="emergency-button">
                <i className="fas fa-phone-alt"></i>
                Call 911
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Contact
