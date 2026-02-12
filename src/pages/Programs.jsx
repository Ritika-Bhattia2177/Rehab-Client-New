import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import ConsultationModal from '../components/ConsultationModal'

function Programs() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('consultation')

  const handleCallRequest = () => {
    setModalType('call_request')
    setIsModalOpen(true)
  }

  const handleScheduleConsultation = () => {
    setModalType('consultation')
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const programs = [
    {
      id: 1,
      slug: 'substance-detox',
      category: 'substance-abuse',
      title: 'Substance Abuse Treatment',
      description: 'Comprehensive treatment programs for alcohol and drug addiction with medically supervised detox and therapy.',
      duration: '30-90 days',
      intensity: 'High',
      features: ['Medical Detox', '24/7 Support', 'Individual Therapy', 'Group Sessions', 'Family Counseling'],
      icon: 'fa-prescription-bottle-medical'
    },
    {
      id: 2,
      slug: 'mental-health-therapy',
      category: 'mental-health',
      title: 'Mental Health Recovery',
      description: 'Specialized programs for depression, anxiety, PTSD, and other mental health conditions.',
      duration: '6-12 weeks',
      intensity: 'Moderate',
      features: ['Psychiatric Care', 'CBT Therapy', 'Medication Management', 'Wellness Activities', 'Peer Support'],
      icon: 'fa-brain'
    },
    {
      id: 3,
      slug: 'dual-diagnosis',
      category: 'dual-diagnosis',
      title: 'Dual Diagnosis Treatment',
      description: 'Integrated treatment for co-occurring mental health and substance use disorders.',
      duration: '60-90 days',
      intensity: 'High',
      features: ['Comprehensive Assessment', 'Integrated Treatment', 'Psychiatric Support', 'Addiction Therapy', 'Relapse Prevention'],
      icon: 'fa-stethoscope'
    },
    {
      id: 4,
      slug: 'outpatient',
      category: 'outpatient',
      title: 'Outpatient Programs',
      description: 'Flexible treatment options that allow you to maintain daily responsibilities while receiving care.',
      duration: '8-16 weeks',
      intensity: 'Low to Moderate',
      features: ['Flexible Scheduling', 'Evening Sessions', 'Work-Friendly', 'Continued Support', 'Family Involvement'],
      icon: 'fa-calendar-check'
    },
    {
      id: 5,
      slug: 'inpatient-rehab',
      category: 'residential',
      title: 'Residential Treatment',
      description: 'Immersive 24/7 care in a structured, supportive environment focused on healing and recovery.',
      duration: '30-90 days',
      intensity: 'High',
      features: ['24/7 Supervision', 'Structured Schedule', 'Full Medical Support', 'Therapeutic Community', 'Holistic Approach'],
      icon: 'fa-house-medical'
    },
    {
      id: 6,
      slug: 'aftercare',
      category: 'aftercare',
      title: 'Aftercare & Relapse Prevention',
      description: 'Ongoing support and resources to maintain sobriety and prevent relapse after completing primary treatment.',
      duration: 'Ongoing',
      intensity: 'Low',
      features: ['Support Groups', 'Alumni Network', 'Life Skills Training', 'Job Assistance', 'Sober Living'],
      icon: 'fa-hands-holding-circle'
    },
    {
      id: 7,
      slug: 'holistic',
      category: 'holistic',
      title: 'Holistic Therapy Programs',
      description: 'Alternative and complementary treatments including yoga, meditation, art therapy, and nutrition.',
      duration: '4-12 weeks',
      intensity: 'Low to Moderate',
      features: ['Yoga & Meditation', 'Art Therapy', 'Nutrition Counseling', 'Fitness Programs', 'Mindfulness Training'],
      icon: 'fa-spa'
    },
    {
      id: 8,
      slug: 'adolescent',
      category: 'adolescent',
      title: 'Adolescent Programs',
      description: 'Age-appropriate treatment programs designed specifically for teenagers and young adults.',
      duration: '30-60 days',
      intensity: 'Moderate to High',
      features: ['Age-Specific Care', 'Educational Support', 'Family Therapy', 'Peer Groups', 'Life Skills'],
      icon: 'fa-child'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Programs', icon: 'fa-th' },
    { id: 'substance-abuse', name: 'Substance Abuse', icon: 'fa-prescription-bottle-medical' },
    { id: 'mental-health', name: 'Mental Health', icon: 'fa-brain' },
    { id: 'dual-diagnosis', name: 'Dual Diagnosis', icon: 'fa-stethoscope' },
    { id: 'outpatient', name: 'Outpatient', icon: 'fa-calendar-check' },
    { id: 'residential', name: 'Residential', icon: 'fa-house-medical' },
    { id: 'aftercare', name: 'Aftercare', icon: 'fa-hands-holding-circle' },
    { id: 'holistic', name: 'Holistic', icon: 'fa-spa' },
    { id: 'adolescent', name: 'Adolescent', icon: 'fa-child' }
  ]

  const filteredPrograms = activeCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeCategory)

  return (
    <>
      <Navbar />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Our Treatment Programs</h1>
            <p className="hero-subtitle">
              Personalized rehabilitation programs designed to support your journey to recovery and wellness
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <i className="fas fa-users"></i>
                <div>
                  <h3>10,000+</h3>
                  <p>Lives Transformed</p>
                </div>
              </div>
              <div className="stat-item">
                <i className="fas fa-award"></i>
                <div>
                  <h3>85%</h3>
                  <p>Success Rate</p>
                </div>
              </div>
              <div className="stat-item">
                <i className="fas fa-star"></i>
                <div>
                  <h3>4.8/5</h3>
                  <p>Patient Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="programs-categories">
        <div className="container">
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <i className={`fas ${category.icon}`}></i>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="programs-grid">
        <div className="container">
          <div className="programs-list">
            {filteredPrograms.map(program => (
              <div key={program.id} className="program-card">
                <div className="program-icon">
                  <i className={`fas ${program.icon}`}></i>
                </div>
                <div className="program-content">
                  <h3>{program.title}</h3>
                  <p className="program-description">{program.description}</p>
                  
                  <div className="program-meta">
                    <div className="meta-item">
                      <i className="fas fa-clock"></i>
                      <span>{program.duration}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-chart-line"></i>
                      <span className={`intensity intensity-${program.intensity.toLowerCase().replace(' ', '-')}`}>
                        {program.intensity}
                      </span>
                    </div>
                  </div>

                  <div className="program-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {program.features.map((feature, index) => (
                        <li key={index}>
                          <i className="fas fa-check-circle"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="program-actions">
                    <Link to={`/program/${program.slug}`} className="btn-primary">
                      Learn More
                    </Link>
                    <button className="btn-secondary">Get Started</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="programs-why-choose">
        <div className="container">
          <h2>Why Choose Our Programs?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-user-md"></i>
              <h3>Expert Care Team</h3>
              <p>Experienced professionals dedicated to your recovery journey</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Evidence-Based</h3>
              <p>Treatments backed by scientific research and proven results</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-heart"></i>
              <h3>Compassionate Support</h3>
              <p>A caring environment that promotes healing and growth</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-sync"></i>
              <h3>Personalized Plans</h3>
              <p>Customized treatment plans tailored to your unique needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rehabilitation in Emergencies Section */}
      <section className="programs-emergency-info">
        <div className="container">
          <div className="emergency-header">
            <h2>REHABILITATION IN EMERGENCIES</h2>
            <div className="emergency-divider"></div>
          </div>

          <div className="emergency-content">
            {/* Left Column */}
            <div className="emergency-col">
              <div className="emergency-intro">
                <h3>Emergencies can result in a massive surge in traumatic injuries, for which rehabilitation is an essential component of care.</h3>
              </div>

              <div className="emergency-challenges">
                <div className="challenge-icons">
                  <div className="challenge-icon water">
                    <i className="fas fa-water"></i>
                  </div>
                  <div className="challenge-icon earth">
                    <i className="fas fa-mountain"></i>
                  </div>
                  <div className="challenge-icon fire">
                    <i className="fas fa-fire"></i>
                  </div>
                </div>
                <p className="challenge-text">In emergencies it can be difficult for people to access rehabilitation services</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="emergency-col">
              <div className="emergency-benefits">
                <h3>Early access to rehabilitation in emergencies:</h3>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <div className="benefit-visual">
                      <div className="body-diagram injury">
                        <i className="fas fa-user-injured"></i>
                      </div>
                      <div className="body-diagram recovery">
                        <i className="fas fa-user-check"></i>
                      </div>
                    </div>
                    <p className="benefit-text">Helps speed up recovery and prevent complications that could prolong admission</p>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-visual-single">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <p className="benefit-text">Helps to achieve the best long-term outcomes for the patient</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EMT Section */}
          <div className="emergency-emt">
            <h3>Rehabilitation in the EMT:</h3>
            <div className="emt-grid">
              <div className="emt-item">
                <div className="emt-icon">
                  <i className="fas fa-wheelchair"></i>
                </div>
                <div className="emt-buildings">
                  <div className="building"><i className="fas fa-hospital"></i></div>
                  <div className="building"><i className="fas fa-clinic-medical"></i></div>
                </div>
                <p>Can assist in identifying a patient's needs beyond discharge and refer them to the appropriate services</p>
              </div>
              <div className="emt-item">
                <div className="emt-visual">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <p>Can support a patient to self manage and continue their recovery after they leave the hospital</p>
              </div>
            </div>
          </div>

          <div className="emergency-footer">
            <i className="fas fa-info-circle"></i>
            <p>For more information about rehabilitation standards for EMTs visit: <a href="https://extranet.who.int/emt/" target="_blank" rel="noopener noreferrer">https://extranet.who.int/emt/</a></p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="programs-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Recovery Journey?</h2>
            <p>Our compassionate team is here to help you every step of the way</p>
            <div className="cta-buttons">
              <button className="btn-primary btn-large" onClick={handleCallRequest}>
                <i className="fas fa-phone"></i>
                Call Us Now: 1-800-RECOVERY
              </button>
              <button className="btn-secondary btn-large" onClick={handleScheduleConsultation}>
                <i className="fas fa-calendar"></i>
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        type={modalType}
      />

      <Footer />
    </>
  )
}

export default Programs
