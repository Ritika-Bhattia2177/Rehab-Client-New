// EXAMPLE: How to add SEO to Home.jsx
// =====================================

import React, { useState } from 'react'

// ✅ ADD THESE IMPORTS
import HomePageSEO from '../components/HomePageSEO'
import SEOContent from '../components/SEOContent'

// Existing imports
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
    // Your existing search logic
  }

  return (
    <>
      {/* ✅ ADD THIS - SEO Meta Tags */}
      <HomePageSEO />
      
      <Navbar />
      <ScrollToTop />
      <Hero onSearch={handleSearch} />
      
      {/* ✅ ADD THIS AFTER HERO - SEO Content Section */}
      {!searchResults && <SEOContent />}
      
      {/* Show search results or default sections */}
      {searchResults ? (
        <SearchResults 
          results={searchResults}
          searchTerm={searchTerm}
          onClearSearch={() => setSearchResults(null)}
        />
      ) : (
        <>
          <FeaturedSection />
          <TreatmentDetails />
          <PremiumSection />
          <BrowseCenters />
          <IndiaDrugGuide />
          <DeaddictionCommunity />
          <ProgramsSection />
          <Testimonials />
          <ResourcesSection />
          <BlogSection />
          <EventsSection />
          <CTASection />
        </>
      )}
      
      <Footer />
    </>
  )
}

export default Home


// =====================================
// EXAMPLE: Add SEO to Resources Page
// =====================================

import React from 'react'
import SEO from '../components/SEO'  // ✅ Import SEO component
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// ... other imports

const Resources = () => {
  return (
    <>
      {/* ✅ ADD THIS - SEO for Resources page */}
      <SEO 
        title="Recovery Resources & Tools"
        description="Access comprehensive recovery resources, treatment guides, educational videos, and support tools. Best rehabilitation center in India offering expert guidance for addiction recovery."
        keywords="recovery resources, addiction treatment guides, rehab tools, drug addiction resources, alcohol recovery help, mental health resources"
        canonicalUrl="https://www.hopepathrecovery.com/resources"
      />
      
      <Navbar />
      {/* Your resources content */}
      <Footer />
    </>
  )
}


// =====================================
// EXAMPLE: Add SEO to Centers Page
// =====================================

import React from 'react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Centers = () => {
  return (
    <>
      {/* ✅ ADD THIS - SEO for Centers page */}
      <SEO 
        title="Find Best Rehab Centers in India"
        description="Browse trusted rehabilitation centers across India. Compare facilities, treatment programs, and success rates. Find the best drug and alcohol addiction treatment center near you."
        keywords="rehab centers India, find rehab near me, best addiction treatment centers, drug rehab facilities, alcohol treatment centers, mental health clinics India"
        canonicalUrl="https://www.hopepathrecovery.com/centers"
      />
      
      <Navbar />
      {/* Your centers listing */}
      <Footer />
    </>
  )
}


// =====================================
// EXAMPLE: Add SEO to About Page
// =====================================

const About = () => {
  return (
    <>
      <SEO 
        title="About Our Rehabilitation Center"
        description="Learn about India's premier rehabilitation center with expert team, proven treatment methods, and comprehensive care for drug addiction, alcohol recovery, and mental health rehabilitation."
        keywords="about rehabilitation center, addiction treatment experts, rehab center India, professional addiction recovery, experienced rehab staff"
        canonicalUrl="https://www.hopepathrecovery.com/about"
      />
      
      <Navbar />
      {/* Your about content */}
      <Footer />
    </>
  )
}


// =====================================
// EXAMPLE: Add SEO to Blog Posts
// =====================================

const BlogDetail = ({ blog }) => {
  return (
    <>
      <SEO 
        title={blog.title}
        description={blog.excerpt || blog.description}
        keywords={`${blog.category}, addiction recovery blog, rehab advice, treatment information`}
        canonicalUrl={`https://www.hopepathrecovery.com/blogs/${blog.id}`}
        ogImage={blog.image}
        ogType="article"
      />
      
      <Navbar />
      {/* Your blog content */}
      <Footer />
    </>
  )
}


// =====================================
// EXAMPLE: Add SEO to Programs Page
// =====================================

const Programs = () => {
  return (
    <>
      <SEO 
        title="Treatment Programs & Services"
        description="Explore comprehensive addiction treatment programs including residential rehab, outpatient care, detox services, and mental health rehabilitation at India's best rehab center."
        keywords="treatment programs, rehab services, residential treatment, outpatient care, detox services, addiction programs India"
        canonicalUrl="https://www.hopepathrecovery.com/programs"
      />
      
      <Navbar />
      {/* Your programs content */}
      <Footer />
    </>
  )
}


// =====================================
// QUICK IMPLEMENTATION CHECKLIST
// =====================================

/*
□ 1. Install react-helmet-async
   npm install react-helmet-async

□ 2. HelmetProvider added to main.jsx (Already done ✓)

□ 3. Import HomePageSEO in Home.jsx

□ 4. Import SEOContent in Home.jsx

□ 5. Add <HomePageSEO /> at top of Home component

□ 6. Add <SEOContent /> after Hero section

□ 7. Import SEO component in other pages

□ 8. Add <SEO /> with custom props to each page

□ 9. Update contact info in HomePageSEO.jsx

□ 10. Update phone numbers in SEOContent.jsx

□ 11. Submit sitemap to Google Search Console

□ 12. Add Google Analytics tracking code
*/
