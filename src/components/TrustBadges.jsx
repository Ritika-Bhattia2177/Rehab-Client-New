import React from 'react'

function TrustBadges() {
  const badges = [
    { icon: 'fa-shield-check', text: 'Verified Centers' },
    { icon: 'fa-certificate', text: 'Licensed Facilities' },
    { icon: 'fa-user-md', text: 'Expert Support' },
    { icon: 'fa-filter', text: 'Advanced Filters' }
  ]

  return (
    <div className="trust-indicators">
      {badges.map((badge, index) => (
        <React.Fragment key={index}>
          {index > 0 && <div className="trust-divider"></div>}
          <div className="trust-item">
            <div className="trust-icon">
              <i className={`fas ${badge.icon}`}></i>
            </div>
            <span className="trust-text">{badge.text}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default TrustBadges
