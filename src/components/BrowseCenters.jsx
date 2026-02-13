import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_ENDPOINTS } from '../config/api'

function BrowseCenters() {
  const [activeTab, setActiveTab] = useState('rehab-centre')
  const [centers, setCenters] = useState([])
  const [filteredCenters, setFilteredCenters] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchCenters()
  }, [])

  useEffect(() => {
    filterCentersByTab()
  }, [activeTab, centers])

  const fetchCenters = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.CENTERS)
      const data = await response.json()
      if (data.success) {
        setCenters(data.data)
      }
    } catch (error) {
      console.error('Error fetching centers:', error)
    } finally {
      setLoading(false)
    }
  }

  const filterCentersByTab = () => {
    let filtered = []
    
    switch(activeTab) {
      case 'rehab-centre':
        // Show centers that are primarily rehab focused - indices 0, 1, 2, 4, 5, 17
        filtered = [
          centers[0],  // Mountain Serenity
          centers[1],  // Himalayan Hope
          centers[5],  // New Dawn
          centers[6],  // Hope Springs
          centers[16], // Chennai Recovery
          centers[17]  // Desert Rose
        ].filter(Boolean)
        break
      case 'hospitals':
        // Show different centers for hospitals - indices 8, 9, 11, 14, 7, 10
        filtered = [
          centers[8],  // Mumbai Wellness Institute
          centers[9],  // Pune Mind & Body
          centers[11], // Capital Recovery Center
          centers[14], // Bangalore Mind Care
          centers[7],  // Healing Hearts
          centers[10]  // Nashik Valley
        ].filter(Boolean)
        break
      case 'clinics':
        // Show different centers for clinics - indices 2, 3, 12, 13, 15, 4
        filtered = [
          centers[2],  // Peaceful Valley
          centers[3],  // Pine Valley
          centers[12], // Gurgaon Wellness
          centers[13], // Noida Hope
          centers[15], // Coastal Serenity
          centers[4]   // Serene Heights
        ].filter(Boolean)
        break
      default:
        filtered = centers.slice(0, 6)
    }
    
    setFilteredCenters(filtered)
  }

  const handleCenterClick = (centerId) => {
    navigate(`/center/${centerId}`)
  }

  const getButtonText = () => {
    switch(activeTab) {
      case 'hospitals':
        return 'View all hospitals'
      case 'clinics':
        return 'View all clinics'
      default:
        return 'View All Centers'
    }
  }

  return (
    <section className="section browse-section" id="centers">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Trusted Rehab Centres, Hospitals & Clinics in India</h2>
          <p className="section-subtitle">
            Find the right support for addiction recovery, mental health, and wellness through our curated list of rehab centres, hospitals, and clinics across India. Whether you're looking for inpatient care, outpatient programs, holistic therapies, or luxury rehabilitation, explore trusted facilities that provide expert treatment and compassionate care tailored to your needs.
          </p>
        </div>

        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'rehab-centre' ? 'active' : ''}`}
            onClick={() => setActiveTab('rehab-centre')}
          >
            Rehab Centre
          </button>
          <button 
            className={`tab-btn ${activeTab === 'hospitals' ? 'active' : ''}`}
            onClick={() => setActiveTab('hospitals')}
          >
            Hospitals
          </button>
          <button 
            className={`tab-btn ${activeTab === 'clinics' ? 'active' : ''}`}
            onClick={() => setActiveTab('clinics')}
          >
            Clinics
          </button>
        </div>

        <div className="tab-content active">
          {loading ? (
            <div className="loading-container">
              <div className="spinner"></div>
            </div>
          ) : (
            <>
              <div className="centers-grid">
                {filteredCenters.map((center) => (
                  <div 
                    key={center.id} 
                    className="center-card"
                    onClick={() => handleCenterClick(center.id)}
                  >
                    <div className="center-image">
                      <img src={center.image} alt={center.name} />
                    </div>
                    <div className="center-content">
                      <h3 className="center-name">{center.name}</h3>
                      <p className="center-description">
                        {activeTab === 'hospitals' 
                          ? `The hospital deals with addiction of any form such as alcohol, substance and drug abuse. It provides counseling sessions to patients and their families for complete recovery support.`
                          : activeTab === 'clinics'
                          ? `The clinic offers specialized outpatient treatment programs with flexible scheduling, individual counseling, group therapy sessions, and comprehensive aftercare support services.`
                          : center.description
                        }
                      </p>
                      <p className="center-location">
                        <i className="fas fa-map-marker-alt"></i> 
                        <span>
                          <span className="location-address">{center.city}</span>
                          <strong>{center.city}, {center.state}</strong>
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="section-footer">
                <button className="btn-view-all" onClick={() => navigate('/premium-centers')}>
                  {getButtonText()}
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default BrowseCenters
