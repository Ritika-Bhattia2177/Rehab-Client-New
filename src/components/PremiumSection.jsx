import React from 'react'

function PremiumSection() {
  const premiumCenters = [
    {
      id: 1,
      name: 'Serenity Springs Recovery Center',
      location: 'Los Angeles, California',
      description: 'A premier recovery facility offering luxury accommodations, holistic therapies, and individualized treatment plans in a tranquil setting.'
    },
    {
      id: 2,
      name: 'Tranquil Pathways Wellness',
      location: 'Miami, Florida',
      description: 'Combining modern medical care with alternative healing methods, offering a comprehensive approach to lasting recovery.'
    },
    {
      id: 3,
      name: 'Healing Haven Treatment Center',
      location: 'Austin, Texas',
      description: 'Family-focused recovery programs with specialized tracks for dual diagnosis and co-occurring disorders in a supportive environment.'
    }
  ]

  return (
    <section className="section premium-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Recovery Centers</h2>
          <p className="section-subtitle">
            Discover leading rehabilitation facilities offering personalized care, evidence-based treatments, and comprehensive support programs.
          </p>
        </div>

        <div className="premium-grid">
          {premiumCenters.map((center) => (
            <div key={center.id || center._id} className="premium-card">
              <div className="premium-image">
                <div className="placeholder-image">
                  <i className="fas fa-hospital"></i>
                </div>
                <span className="premium-badge">Premium</span>
              </div>
              <div className="premium-content">
                <h3 className="premium-title">{center.name}</h3>
                <p className="premium-location">
                  <i className="fas fa-map-marker-alt"></i> {center.location}
                </p>
                <p className="premium-description">{center.description}</p>
                <a href="#" className="btn-link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PremiumSection
