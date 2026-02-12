import React from 'react'
import { useNavigate } from 'react-router-dom'

function ResourcesSection() {
  const navigate = useNavigate()

  const programs = [
    {
      id: 1,
      icon: 'fa-syringe',
      title: 'Medical Detox',
      description: 'Safe and supervised detoxification to manage withdrawal symptoms.',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
    },
    {
      id: 2,
      icon: 'fa-bed',
      title: 'Inpatient Rehabilitation',
      description: '24/7 structured care in a supportive, healing environment.',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
    },
    {
      id: 3,
      icon: 'fa-calendar-days',
      title: 'Outpatient Program',
      description: 'Flexible treatment while continuing daily responsibilities.',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
      id: 4,
      icon: 'fa-comments',
      title: 'Therapy & Counseling',
      description: 'Individual, group, and family therapy for emotional healing.',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    }
  ]

  return (
    <section className="comprehensive-treatment-section" id="resources">
      <div className="container">
        <div className="treatment-programs-header">
          <h2 className="treatment-programs-title">Comprehensive Treatment Programs</h2>
          <p className="treatment-programs-subtitle">
            Personalized care designed to support every step of your recovery journey.
          </p>
        </div>

        <div className="treatment-programs-grid-main">
          {programs.map((program) => (
            <div key={program.id} className="treatment-program-card-main">
              <div className="program-icon-wrapper" style={{ background: program.gradient }}>
                <i className={`fas ${program.icon}`}></i>
              </div>
              <h3 className="program-title-main">{program.title}</h3>
              <p className="program-description-main">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="treatment-programs-cta">
          <button className="btn-view-programs" onClick={() => navigate('/programs')}>
            View All Programs
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ResourcesSection
