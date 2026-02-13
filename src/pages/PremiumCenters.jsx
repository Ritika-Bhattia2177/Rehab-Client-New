import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import CenterCard from '../components/CenterCard'
import { API_ENDPOINTS } from '../config/api'

function PremiumCenters() {
  const [centers, setCenters] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchPremiumCenters()
  }, [])

  const fetchPremiumCenters = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.CENTERS)
      const data = await response.json()
      
      if (data.success) {
        // Filter only premium centers
        const premiumCenters = data.data.filter(c => c.isPremium === true)
        setCenters(premiumCenters)
      }
    } catch (error) {
      console.error('Error fetching centers:', error)
    } finally {
      setLoading(false)
    }
  }

  const filterCenters = (centers) => {
    if (filter === 'all') return centers
    return centers.filter(center => {
      const state = center.state || center.location || ''
      return state.toLowerCase().includes(filter.toLowerCase())
    })
  }

  const filteredCenters = filterCenters(centers)

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="premium-hero">
        <div className="container">
          <div className="premium-hero-content">
            <h1 className="premium-title">Premium Rehabilitation Centers</h1>
            <p className="premium-subtitle">
              Discover India's finest luxury rehabilitation centers offering world-class facilities, 
              expert care, and holistic treatment programs for lasting recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-wrapper">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Centers
            </button>
            <button 
              className={`filter-btn ${filter === 'himachal' ? 'active' : ''}`}
              onClick={() => setFilter('himachal')}
            >
              Himachal Pradesh
            </button>
            <button 
              className={`filter-btn ${filter === 'punjab' ? 'active' : ''}`}
              onClick={() => setFilter('punjab')}
            >
              Punjab
            </button>
            <button 
              className={`filter-btn ${filter === 'maharashtra' ? 'active' : ''}`}
              onClick={() => setFilter('maharashtra')}
            >
              Maharashtra
            </button>
            <button 
              className={`filter-btn ${filter === 'delhi' ? 'active' : ''}`}
              onClick={() => setFilter('delhi')}
            >
              Delhi NCR
            </button>
            <button 
              className={`filter-btn ${filter === 'karnataka' ? 'active' : ''}`}
              onClick={() => setFilter('karnataka')}
            >
              Karnataka
            </button>
          </div>
        </div>
      </section>

      {/* Centers Grid */}
      <section className="premium-centers-section">
        <div className="container">
          {loading ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Loading premium centers...</p>
            </div>
          ) : (
            <>
              <div className="centers-count">
                <h2>Showing {filteredCenters.length} Premium Centers</h2>
              </div>
              <div className="results-grid">
                {filteredCenters.map(center => (
                  <CenterCard key={center.id} center={center} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  )
}

export default PremiumCenters
