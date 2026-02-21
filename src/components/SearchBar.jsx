import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import API_BASE_URL from '../config/api'

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [allCenters, setAllCenters] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const searchRef = useRef(null)
  const searchTimeout = useRef(null)
  const navigate = useNavigate()

  const suggestions = [
    { icon: 'fa-map-marker-alt', text: 'Himachal Pradesh Centers', search: 'Himachal' },
    { icon: 'fa-map-marker-alt', text: 'Mumbai Recovery Centers', search: 'Mumbai' },
    { icon: 'fa-map-marker-alt', text: 'Punjab Treatment Centers', search: 'Punjab' },
    { icon: 'fa-map-marker-alt', text: 'Delhi NCR Centers', search: 'Delhi' }
  ]

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/centers`)
        const data = await response.json()

        if (data.success) {
          setAllCenters(data.data || [])
        }
      } catch (error) {
        console.error('Failed to load centers for search:', error)
      }
    }

    fetchCenters()
  }, [])

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

  useEffect(() => {
    if (searchTerm.length >= 2) {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current)
      }

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

  const normalizeText = (value = '') =>
    value
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9\s]/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim()

  const getCenterSearchText = (center) => {
    const locationText = [center.location, center.city, center.state, center.address]
      .filter(Boolean)
      .join(' ')

    const locationTokens = normalizeText(locationText)
      .split(' ')
      .filter(Boolean)

    const searchableFields = [
      center.name,
      center.city,
      center.state,
      center.location,
      center.description,
      center.address,
      center.category,
      ...locationTokens,
      ...(Array.isArray(center.treatmentTypes) ? center.treatmentTypes : []),
      ...(Array.isArray(center.treatments) ? center.treatments : []),
      ...(Array.isArray(center.services) ? center.services : []),
      ...(Array.isArray(center.specializations) ? center.specializations : []),
      ...(Array.isArray(center.tags) ? center.tags : [])
    ]

    return normalizeText(searchableFields.filter(Boolean).join(' '))
  }

  const buildTokenList = (query) => {
    const stopWords = new Set([
      'rehab', 'rehabilitation', 'center', 'centers', 'in', 'near', 'me', 'for', 'the', 'and', 'of', 'at',
      'drug', 'alcohol', 'addiction', 'treatment', 'facility', 'facilities', 'hospital', 'clinic'
    ])

    const rawTokens = normalizeText(query).split(' ').filter(Boolean)
    const filteredTokens = rawTokens.filter((token) => !stopWords.has(token))
    return filteredTokens.length > 0 ? filteredTokens : rawTokens
  }

  const getMatchScore = (query, centerText) => {
    const normalizedQuery = normalizeText(query)
    const tokens = buildTokenList(query)
    const centerWords = centerText.split(' ')
    const compactCenterText = centerText.replace(/\s+/g, '')

    let score = 0

    if (centerText.includes(normalizedQuery)) {
      score += 8
    }

    tokens.forEach((token) => {
      if (centerText.includes(token)) {
        score += 3
      } else if (compactCenterText.includes(token)) {
        score += 2
      } else if (centerWords.some((word) => word.startsWith(token) || token.startsWith(word))) {
        score += 1
      }
    })

    return score
  }

  const performSearch = async (query) => {
    const trimmedQuery = query.trim()

    if (!trimmedQuery) {
      setSearchResults([])
      onSearch?.({ searchTerm: '', results: [] })
      return
    }

    setIsSearching(true)
    setShowSuggestions(true)

    try {
      let centersToSearch = allCenters

      if (centersToSearch.length === 0) {
        const response = await fetch(`${API_BASE_URL}/api/centers`)
        const data = await response.json()
        centersToSearch = data.success ? (data.data || []) : []
        setAllCenters(centersToSearch)
      }

      const rankedResults = centersToSearch
        .map((center) => {
          const centerText = getCenterSearchText(center)
          const score = getMatchScore(trimmedQuery, centerText)
          return { center, score }
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((item) => item.center)

      setSearchResults(rankedResults)
      onSearch?.({ searchTerm: trimmedQuery, results: rankedResults })
    } catch (error) {
      console.error('Search error:', error)
      setSearchResults([])
      onSearch?.({ searchTerm: trimmedQuery, results: [] })
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
    const centerId = center.id || center._id
    if (!centerId) {
      return
    }

    setShowSuggestions(false)
    navigate(`/center/${centerId}`)
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
                    key={center.id || center._id}
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
