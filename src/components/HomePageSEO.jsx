import React from 'react'
import { Helmet } from 'react-helmet-async'
import SEO from './SEO'

const HomePageSEO = () => {
  return (
    <>
      <SEO 
        title="Best Rehabilitation Center in India"
        description="Premier drug addiction treatment and alcohol addiction recovery center. Trusted residential rehab program with expert mental health rehabilitation services across India."
        keywords="rehabilitation center in India, best rehab center in India, drug addiction treatment, alcohol addiction recovery, mental health rehabilitation, residential rehab program, trusted addiction recovery center in India"
        canonicalUrl="https://www.hopepathrecovery.com"
        ogImage="https://www.hopepathrecovery.com/og-image.jpg"
      />
      
      <Helmet>
        {/* Additional structured data for homepage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "HopePath Recovery - Best Rehabilitation Center in India",
            "image": "https://www.hopepathrecovery.com/logo.png",
            "@id": "https://www.hopepathrecovery.com",
            "url": "https://www.hopepathrecovery.com",
            "telephone": "+91-1800-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street Address",
              "addressLocality": "Your City",
              "postalCode": "XXXXXX",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 0.0,
              "longitude": 0.0
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://www.facebook.com/hopepathrecovery",
              "https://www.twitter.com/hopepathrecovery",
              "https://www.instagram.com/hopepathrecovery"
            ],
            "priceRange": "₹₹₹",
            "medicalSpecialty": [
              "Drug Addiction Treatment",
              "Alcohol Addiction Recovery",
              "Mental Health Rehabilitation",
              "Residential Rehab Program"
            ]
          })}
        </script>
      </Helmet>
    </>
  )
}

export default HomePageSEO
