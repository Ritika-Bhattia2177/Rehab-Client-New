import React from 'react'

function LocationSection() {
  const locations = [
    { name: 'Los Angeles', count: '120+' },
    { name: 'New York', count: '95+' },
    { name: 'Chicago', count: '78+' },
    { name: 'Houston', count: '68+' },
    { name: 'Phoenix', count: '56+' },
    { name: 'Miami', count: '52+' },
    { name: 'Seattle', count: '48+' },
    { name: 'Boston', count: '44+' }
  ]

  return (
    <section className="section location-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Find Centers Near You</h2>
          <p className="section-subtitle">Explore recovery facilities in major cities across the country.</p>
        </div>

        <div className="location-grid">
          {locations.map((location, index) => (
            <div key={index} className="location-card">
              <div className="location-image">
                <div className="placeholder-image location">
                  <i className="fas fa-city"></i>
                </div>
                <div className="location-overlay">
                  <h3 className="location-name">{location.name}</h3>
                  <p className="location-count">{location.count} Centers</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LocationSection
