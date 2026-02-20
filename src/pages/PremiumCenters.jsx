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

  const getStateValue = (center) => (center.state || center.location || '').trim()

  const normalizeState = (state) => state.toLowerCase().replace(/[^a-z]/g, '')

  const formatStateLabel = (state) => {
    if (!state) return 'Unknown'

    const normalized = normalizeState(state)
    if (normalized === 'delhi' || normalized === 'newdelhi' || normalized === 'delhincr') {
      return 'Delhi NCR'
    }

    return state
  }

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

  const stateFilters = centers.reduce((acc, center) => {
    const state = getStateValue(center)
    const normalizedState = normalizeState(state)

    if (!normalizedState) return acc

    const existingState = acc.find(item => item.value === normalizedState)
    if (existingState) {
      existingState.count += 1
    } else {
      acc.push({
        value: normalizedState,
        label: formatStateLabel(state),
        count: 1
      })
    }

    return acc
  }, []).sort((a, b) => a.label.localeCompare(b.label))

  const filterCenters = (allCenters) => {
    if (filter === 'all') return allCenters
    return allCenters.filter(center => normalizeState(getStateValue(center)) === filter)
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
              All Centers ({centers.length})
            </button>
            {stateFilters.map((stateFilter) => (
              <button
                key={stateFilter.value}
                className={`filter-btn ${filter === stateFilter.value ? 'active' : ''}`}
                onClick={() => setFilter(stateFilter.value)}
              >
                {stateFilter.label} ({stateFilter.count})
              </button>
            ))}
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
                  <CenterCard key={center.id || center._id} center={center} />
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
