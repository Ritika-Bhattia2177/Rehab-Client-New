import React from 'react'
import { useNavigate } from 'react-router-dom'

function TreatmentDetails() {
  const navigate = useNavigate()

  const treatmentPrograms = [
    {
      id: 1,
      icon: 'fa-hospital',
      iconColor: '#10b981',
      title: 'Inpatient Program',
      features: [
        '24/7 Medical Supervision',
        'Structured Daily Therapy',
        'Safe & Supportive Environment'
      ],
      duration: '30–90 Days',
      buttonText: 'Learn More',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
      id: 2,
      icon: 'fa-calendar-alt',
      iconColor: '#3b82f6',
      title: 'Outpatient Program',
      features: [
        'Flexible Scheduling',
        'Weekly Counseling Sessions',
        'Family Support Included'
      ],
      duration: '8–12 Weeks',
      buttonText: 'Explore Program',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
    },
    {
      id: 3,
      icon: 'fa-heartbeat',
      iconColor: '#8b5cf6',
      title: 'Detox Program',
      features: [
        'Medically Monitored Detox',
        'Withdrawal Management',
        'Personalized Care Plans'
      ],
      duration: '7–14 Days',
      buttonText: 'Start Recovery',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    }
  ]

  return (
    <section className="treatment-details-section">
      <div className="container">
        <div className="treatment-header">
          <h2 className="treatment-heading">Key Treatment Details</h2>
          <p className="treatment-description">
            Professional rehabilitation programs designed to support your recovery journey with comprehensive care and evidence-based treatments.
          </p>
        </div>

        <div className="treatment-programs-grid">
          {treatmentPrograms.map((program) => (
            <div key={program.id} className="treatment-program-card">
              <div className="program-card-header" style={{ background: program.gradient }}>
                <div className="program-icon">
                  <i className={`fas ${program.icon}`}></i>
                </div>
                <h3>{program.title}</h3>
              </div>

              <div className="program-card-body">
                <ul className="program-features">
                  {program.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="program-duration">
                  <i className="fas fa-clock"></i>
                  <span>Duration: {program.duration}</span>
                </div>

                <button className="program-cta-btn" onClick={() => navigate('/programs')}>
                  {program.buttonText}
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TreatmentDetails
