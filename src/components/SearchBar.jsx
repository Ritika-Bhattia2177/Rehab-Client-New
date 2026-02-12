import React, { useState, useRef, useEffect } from 'react'

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const searchRef = useRef(null)
  const searchTimeout = useRef(null)

  const suggestions = [
    { icon: 'fa-map-marker-alt', text: 'Himachal Pradesh Centers', search: 'Himachal' },
    { icon: 'fa-map-marker-alt', text: 'Mumbai Recovery Centers', search: 'Mumbai' },
    { icon: 'fa-map-marker-alt', text: 'Punjab Treatment Centers', search: 'Punjab' },
    { icon: 'fa-map-marker-alt', text: 'Delhi NCR Centers', search: 'Delhi' }
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false)
        setSearchResults([])
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Live search as user types
  useEffect(() => {
    if (searchTerm.length >= 2) {
      // Clear previous timeout
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current)
      }

      // Set new timeout for debounced search
      searchTimeout.current = setTimeout(() => {
        performSearch(searchTerm)
      }, 300)
    } else {
      setSearchResults([])
      setShowSuggestions(!searchTerm)
    }

    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current)
      }
    }
  }, [searchTerm])

  const performSearch = async (query) => {
    setIsSearching(true)
    setShowSuggestions(true)
    
    try {
      const params = new URLSearchParams()
      if (query) {
        params.append('location', query.trim())
      }

      const url = `http://localhost:3000/api/centers?${params.toString()}`
      
      const response = await fetch(url)
      const data = await response.json()

      if (data.success) {
        setSearchResults(data.data || [])
      } else {
        setSearchResults([])
      }
    } catch (error) {
      console.error('Search error:', error)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const handleSearch = () => {
    if (!searchTerm) {
      return
    }
    performSearch(searchTerm)
  }

  const handleSuggestionClick = (search) => {
    setSearchTerm(search)
    performSearch(search)
  }

  const handleResultClick = (center) => {
    alert(`Viewing details for ${center.name}\n\nLocation: ${center.city}, ${center.state}\nRating: ${center.rating}/5\nBeds: ${center.beds}`)
  }

  const handleInputFocus = () => {
    if (!searchTerm) {
      setShowSuggestions(true)
      setSearchResults([])
    } else if (searchTerm.length >= 2) {
      setShowSuggestions(true)
    }
  }

  const handleClear = () => {
    setSearchTerm('')
    setSearchResults([])
    setShowSuggestions(false)
  }

  return (
    <div className="hero-search" ref={searchRef}>
      <div className="search-container">
        <div className="search-input-wrapper">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            id="searchInput"
            placeholder="Search by location, treatment type, or center name..."
            className="search-input"
            autoComplete="off"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={handleInputFocus}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          {searchTerm && (
            <button className="clear-search" onClick={handleClear}>
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
        <button className="btn-search" onClick={handleSearch}>
          <span className="btn-text">Search</span>
          <i className="fas fa-arrow-right btn-icon"></i>
        </button>
      </div>

      {/* Search Suggestions/Results */}
      {showSuggestions && (
        <div className="search-suggestions">
          {isSearching && (
            <div className="suggestion-item searching">
              <i className="fas fa-spinner fa-spin"></i>
              <span>Searching...</span>
            </div>
          )}

          {!isSearching && searchResults.length === 0 && !searchTerm && (
            <>
              <div className="suggestions-header">Popular Searches</div>
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(suggestion.search)}
                >
                  <i className={`fas ${suggestion.icon}`}></i>
                  <span>{suggestion.text}</span>
                </div>
              ))}
            </>
          )}

          {!isSearching && searchResults.length > 0 && (
            <>
              <div className="suggestions-header">
                Found {searchResults.length} center{searchResults.length !== 1 ? 's' : ''}
              </div>
              <div className="results-container">
                {searchResults.map((center) => (
                  <div
                    key={center.id}
                    className="suggestion-item result-item"
                    onClick={() => handleResultClick(center)}
                  >
                    <div className="result-image">
                      {center.image ? (
                        <img src={center.image} alt={center.name} />
                      ) : (
                        <div className="result-icon">
                          <i className={`fas fa-${center.isPremium ? 'spa' : 'hospital'}`}></i>
                        </div>
                      )}
                    </div>
                    <div className="result-info">
                      <div className="result-name">{center.name}</div>
                      <div className="result-location">
                        <i className="fas fa-map-marker-alt"></i>
                        {center.city}, {center.state}
                      </div>
                      <div className="result-description">{center.description.substring(0, 100)}...</div>
                    </div>
                    {center.isPremium && (
                      <span className="result-badge">Premium</span>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {!isSearching && searchResults.length === 0 && searchTerm && searchTerm.length >= 2 && (
            <div className="suggestion-item no-results">
              <i className="fas fa-search"></i>
              <span>No rehabilitation centers found in "{searchTerm}"</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar
