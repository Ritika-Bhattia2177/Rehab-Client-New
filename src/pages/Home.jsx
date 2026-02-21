import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import TreatmentDetails from '../components/TreatmentDetails'
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
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedSection />
      <TreatmentDetails />
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
