import React, { useState, useEffect } from 'react'
import CenterCard from './CenterCard'

function SearchResults({ results, isLoading, searchTerm }) {
  const [sortBy, setSortBy] = useState('relevance')

  useEffect(() => {
    // Scroll to results when they appear
    const resultsSection = document.getElementById('searchResults')
    if (resultsSection && results && results.length > 0) {
      setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [results])

  const handleFilterClick = () => {
    alert('Filter panel coming soon! You can filter by:\n\n• Treatment Type\n• Insurance Accepted\n• Amenities\n• Price Range\n• Distance')
  }

  if (!results && !isLoading) return null

  return (
    <section className="search-results-section" id="searchResults">
      <div className="container">
        <div className="results-header">
          <div className="results-info">
            <h2 className="results-title" id="resultsTitle">
              {searchTerm ? `Results for "${searchTerm}"` : 'Browse Centers'}
            </h2>
            <p className="results-count" id="resultsCount">
              Found {results?.length || 0} center{results?.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="results-actions">
            <button className="filter-toggle-btn" onClick={handleFilterClick}>
              <i className="fas fa-sliders-h"></i>
              Filters
            </button>
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="relevance">Sort by: Relevance</option>
              <option value="distance">Distance</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="results-loading">
            <div className="loading-spinner"></div>
            <p>Finding the best centers for you...</p>
          </div>
        )}

        {/* Results Grid */}
        {!isLoading && results && results.length > 0 && (
          <div className="results-grid">
            {results.map((center, index) => (
              <CenterCard key={center.id} center={center} index={index} />
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && results && results.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>No rehabilitation centers found in this location</h3>
            <p>Try searching for a different city or state, or browse all available centers</p>
            <button className="btn-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Refine Search
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default SearchResults
