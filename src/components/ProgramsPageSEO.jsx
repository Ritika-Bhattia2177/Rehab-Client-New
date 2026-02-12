import React from 'react'
import { Helmet } from 'react-helmet-async'
import SEO from './SEO'

const ProgramsPageSEO = () => {
  return (
    <>
      <SEO 
        title="Addiction Treatment Programs & Services in India"
        description="Comprehensive inpatient rehabilitation program, outpatient rehab services, medical detox center, and holistic recovery treatment. Expert therapy for addiction and relapse prevention."
        keywords="inpatient rehabilitation program, outpatient rehab services, detox program for addiction, relapse prevention program, substance abuse treatment, therapy for addiction, holistic recovery treatment, medical detox center in India"
        canonicalUrl="https://www.hopepathrecovery.com/programs"
        ogImage="https://www.hopepathrecovery.com/programs-og.jpg"
      />
      
      <Helmet>
        {/* Additional structured data for programs page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "HopePath Recovery Treatment Programs",
            "@id": "https://www.hopepathrecovery.com/programs",
            "url": "https://www.hopepathrecovery.com/programs",
            "description": "Comprehensive addiction treatment programs including inpatient rehabilitation, outpatient services, medical detox, and holistic recovery treatment",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Addiction Treatment Programs",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalTherapy",
                    "name": "Inpatient Rehabilitation Program",
                    "description": "Residential addiction treatment with 24/7 medical supervision"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalTherapy",
                    "name": "Outpatient Rehab Services",
                    "description": "Flexible outpatient treatment programs for addiction recovery"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "Medical Detox Program",
                    "description": "Medically supervised detoxification for safe withdrawal management"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalTherapy",
                    "name": "Relapse Prevention Program",
                    "description": "Comprehensive relapse prevention strategies and ongoing support"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalTherapy",
                    "name": "Holistic Recovery Treatment",
                    "description": "Integrated holistic therapies for mind, body, and spirit healing"
                  }
                }
              ]
            },
            "medicalSpecialty": [
              "Substance Abuse Treatment",
              "Addiction Therapy",
              "Medical Detoxification",
              "Mental Health Treatment"
            ],
            "availableService": [
              {
                "@type": "MedicalTherapy",
                "name": "Inpatient Rehabilitation",
                "serviceType": "Residential Treatment"
              },
              {
                "@type": "MedicalTherapy",
                "name": "Outpatient Services",
                "serviceType": "Ambulatory Care"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Medical Detoxification",
                "procedureType": "Detox Program"
              }
            ]
          })}
        </script>
      </Helmet>
    </>
  )
}

export default ProgramsPageSEO
