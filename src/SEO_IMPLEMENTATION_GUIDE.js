// SEO Implementation Guide for HopePath Recovery Website
// ========================================================

// 1. INSTALLATION
// Run this command in your client directory:
// npm install react-helmet-async

// 2. MAIN.JSX SETUP (Already Done)
// The HelmetProvider wrapper has been added to main.jsx

// 3. HOME PAGE IMPLEMENTATION
// Add to your Home.jsx or main landing page:

import React from 'react'
import HomePageSEO from '../components/HomePageSEO'
import SEOContent from '../components/SEOContent'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// ... other imports

const Home = () => {
  return (
    <>
      {/* Add SEO meta tags */}
      <HomePageSEO />
      
      {/* Your existing components */}
      <Navbar />
      
      {/* Add SEO-optimized content section (after Hero) */}
      <SEOContent />
      
      {/* Your other sections */}
      {/* Hero, Features, Programs, Testimonials, etc. */}
      
      <Footer />
    </>
  )
}

export default Home


// 4. OTHER PAGES IMPLEMENTATION
// For Resources page, Centers page, etc., use the generic SEO component:

import SEO from '../components/SEO'

const Resources = () => {
  return (
    <>
      <SEO 
        title="Recovery Resources & Tools"
        description="Access comprehensive recovery resources, treatment guides, educational videos, and support tools. Best rehabilitation center in India offering expert guidance."
        keywords="recovery resources, addiction treatment guides, rehab tools, drug addiction resources, alcohol recovery help"
        canonicalUrl="https://www.hopepathrecovery.com/resources"
      />
      
      {/* Your page content */}
    </>
  )
}


// 5. CENTERS/BROWSE PAGE
const BrowseCenters = () => {
  return (
    <>
      <SEO 
        title="Find Rehab Centers Near You"
        description="Browse trusted rehabilitation centers across India. Compare facilities, treatment programs, and success rates. Find the best drug and alcohol addiction treatment center."
        keywords="rehab centers India, find rehab near me, best addiction treatment centers, drug rehab facilities, alcohol treatment centers"
        canonicalUrl="https://www.hopepathrecovery.com/centers"
      />
      
      {/* Your page content */}
    </>
  )
}


// 6. ABOUT PAGE
const About = () => {
  return (
    <>
      <SEO 
        title="About Our Rehabilitation Center"
        description="Learn about India's premier rehabilitation center. Expert team, proven treatment methods, and comprehensive care for drug addiction, alcohol recovery, and mental health."
        keywords="about rehabilitation center, addiction treatment experts, rehab center India, professional addiction recovery"
        canonicalUrl="https://www.hopepathrecovery.com/about"
      />
      
      {/* Your page content */}
    </>
  )
}


// 7. CONTACT PAGE
const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us - 24/7 Helpline"
        description="Contact HopePath Recovery for immediate help. 24/7 helpline, free consultation, and confidential support for addiction treatment and mental health services."
        keywords="contact rehab center, addiction helpline India, rehab consultation, treatment inquiry, addiction help"
        canonicalUrl="https://www.hopepathrecovery.com/contact"
      />
      
      {/* Your page content */}
    </>
  )
}


// 8. SEO BEST PRACTICES
// =====================

// Meta Title: Keep under 60 characters
// ✓ Good: "Best Rehab Center in India | HopePath Recovery"
// ✗ Bad: "The Best and Most Trusted Rehabilitation Center for Drug and Alcohol Addiction Treatment in India"

// Meta Description: 150-160 characters, include CTA
// ✓ Good: "Leading rehab center providing drug addiction treatment & alcohol recovery. 24/7 support, expert care. Call now for free consultation."

// Keywords: 5-10 relevant keywords
// Focus on: long-tail keywords, location-based, service-specific

// H1: One per page, include primary keyword
// ✓ Good: "Trusted Rehabilitation Center in India for Lasting Recovery"

// H2: 3-4 per page, include secondary keywords
// ✓ Good: "Comprehensive Drug Addiction Treatment Programs"

// Content: 150+ words, natural keyword integration
// Use keywords naturally, don't stuff
// Include synonyms and related terms
// Focus on user intent and value


// 9. SCHEMA MARKUP
// The SEO components include structured data for:
// - MedicalClinic
// - MedicalBusiness
// - Medical services
// - Contact information
// - Opening hours
// This helps Google show rich snippets and improves local SEO


// 10. ANALYTICS TRACKING
// Add Google Analytics to public/index.html:
/*
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
*/


// 11. SITEMAP.XML
// Create public/sitemap.xml:
/*
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.hopepathrecovery.com/</loc>
    <lastmod>2026-02-12</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.hopepathrecovery.com/centers</loc>
    <lastmod>2026-02-12</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.hopepathrecovery.com/resources</loc>
    <lastmod>2026-02-12</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
*/


// 12. ROBOTS.TXT
// Create public/robots.txt:
/*
User-agent: *
Allow: /
Sitemap: https://www.hopepathrecovery.com/sitemap.xml
*/


// 13. UPDATE index.html
// Add to public/index.html <head>:
/*
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="theme-color" content="#667eea" />
<link rel="icon" type="image/svg+xml" href="/favicon.ico" />
*/
