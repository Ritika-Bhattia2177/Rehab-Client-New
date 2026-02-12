import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import CenterCard from '../components/CenterCard'

function PremiumCenters() {
  const [centers, setCenters] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchPremiumCenters()
  }, [])

  const fetchPremiumCenters = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/centers')
      const data = await response.json()
      
      if (data.success) {
        // Filter premium centers (you can add a premium field to your data)
        setCenters(data.data)
      }
    } catch (error) {
      console.error('Error fetching centers:', error)
    } finally {
      setLoading(false)
    }
  }

  const filterCenters = (centers) => {
    if (filter === 'all') return centers
    return centers.filter(center => center.state.toLowerCase().includes(filter.toLowerCase()))
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
