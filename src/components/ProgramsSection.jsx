import React from 'react'

function ProgramsSection() {
  const programs = [
    { icon: 'fa-praying-hands', name: '12-Step Programs' },
    { icon: 'fa-mortar-pestle', name: 'Medication-Assisted' },
    { icon: 'fa-first-aid', name: 'Medical Detox' },
    { icon: 'fa-gem', name: 'Luxury Treatment' },
    { icon: 'fa-calendar-check', name: 'Outpatient Care' },
    { icon: 'fa-brain', name: 'Dual Diagnosis' },
    { icon: 'fa-smoking-ban', name: 'Smoking Cessation' },
    { icon: 'fa-female', name: "Women's Programs" },
    { icon: 'fa-users-medical', name: 'Family Therapy' },
    { icon: 'fa-spa', name: 'Holistic Wellness' },
    { icon: 'fa-child', name: 'Youth Programs' },
    { icon: 'fa-heartbeat', name: 'Aftercare Support' }
  ]

  return (
    <section className="section programs-section" id="programs">
      <div className="container">
        <div className="programs-wrapper">
          <div className="programs-image">
            <div className="placeholder-image large">
              <i className="fas fa-users"></i>
            </div>
          </div>

          <div className="programs-content">
            <h2 className="section-title">Treatment Programs & Services</h2>
            <p className="section-subtitle">
              We connect you with over 1,500 facilities offering specialized programs tailored to individual recovery needs.
            </p>

            <div className="program-tags">
              {programs.map((program, index) => (
                <a key={index} href="#" className="program-tag">
                  <i className={`fas ${program.icon}`}></i>
                  {program.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection
