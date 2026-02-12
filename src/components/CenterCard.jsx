import React from 'react'
import { useNavigate } from 'react-router-dom'

function CenterCard({ center, index }) {
  const navigate = useNavigate()

  const handleViewDetails = () => {
    navigate(`/center/${center.id}`)
  }

  return (
    <div className="result-card" style={{ animationDelay: `${0.1 * (index % 3)}s` }}>
      <div className="result-card-image">
        <img src={center.image} alt={center.name} />
        {center.isPremium && <span className="card-badge">Premium</span>}
        <div className="card-rating">
          <i className="fas fa-star"></i>
          {center.rating}
        </div>
      </div>
      <div className="result-card-content">
        <div className="card-header">
          <h3 className="card-name">{center.name}</h3>
          <div className="card-location">
            <i className="fas fa-map-marker-alt"></i>
            <span>{center.city}, {center.state}</span>
          </div>
        </div>

        <div className="card-specialties">
          {center.treatmentTypes && center.treatmentTypes.slice(0, 3).map((type, idx) => (
            <span key={idx} className="specialty-tag">{type}</span>
          ))}
        </div>

        <p className="card-description">{center.description}</p>

        <div className="card-footer">
          <div className="card-features">
            <div className="card-feature">
              <i className="fas fa-bed"></i>
              <span>{center.beds} beds</span>
            </div>
            {center.isVerified && (
              <div className="card-feature">
                <i className="fas fa-shield-check"></i>
                <span>Verified</span>
              </div>
            )}
          </div>
          <button className="view-details-btn" onClick={handleViewDetails}>
            View Details
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CenterCard
