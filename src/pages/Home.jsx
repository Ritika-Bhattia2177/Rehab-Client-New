import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import TreatmentDetails from '../components/TreatmentDetails'
import SearchResults from '../components/SearchResults'
import PremiumSection from '../components/PremiumSection'
import BrowseCenters from '../components/BrowseCenters'
import IndiaDrugGuide from '../components/IndiaDrugGuide'
import DeaddictionCommunity from '../components/DeaddictionCommunity'
import CTASection from '../components/CTASection'
import Testimonials from '../components/Testimonials'
import ProgramsSection from '../components/ProgramsSection'
import ResourcesSection from '../components/ResourcesSection'
import BlogSection from '../components/BlogSection'
import EventsSection from '../components/EventsSection'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function Home() {
  const [searchResults, setSearchResults] = useState(null)
  const [isSearching, setIsSearching] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = async (searchData) => {
    setIsSearching(true)
    setSearchTerm(searchData.searchTerm || '')
    
    try {
      // Build query parameters
      const params = new URLSearchParams()
      
      if (searchData.searchTerm) {
        params.append('location', searchData.searchTerm)
      }
      
      if (searchData.category && searchData.category !== 'all') {
        params.append('category', searchData.category)
      }

      // Call the backend API
      const response = await fetch(`http://localhost:3000/api/centers?${params.toString()}`)
      const data = await response.json()

      if (data.success) {
        setSearchResults(data.data)
      } else {
        setSearchResults([])
        console.error('Search failed:', data.error)
      }
    } catch (error) {
      console.error('Error fetching centers:', error)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <>
      <Navbar />
      <Hero onSearch={handleSearch} />
      <FeaturedSection />
      <TreatmentDetails />
      {searchResults !== null && (
        <SearchResults 
          results={searchResults} 
          isLoading={isSearching}
          searchTerm={searchTerm}
        />
      )}
      <BrowseCenters />
      <IndiaDrugGuide />
      <DeaddictionCommunity />
      <CTASection />
      <Testimonials />
      <ProgramsSection />
      <ResourcesSection />
      <BlogSection />
      <EventsSection />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Home
