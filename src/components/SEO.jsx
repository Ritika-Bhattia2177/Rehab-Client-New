import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogImage,
  ogType = 'website' 
}) => {
  const siteName = 'HopePath Recovery'
  const defaultDescription = 'Leading rehabilitation center in India offering comprehensive drug addiction treatment, alcohol addiction recovery, and mental health rehabilitation with trusted residential rehab programs.'
  const defaultKeywords = 'rehabilitation center in India, best rehab center in India, drug addiction treatment, alcohol addiction recovery, mental health rehabilitation, residential rehab program, trusted addiction recovery center in India'

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title ? `${title} | ${siteName}` : `${siteName} - Best Rehabilitation Center in India`}</title>
      <meta name="title" content={title || `${siteName} - Best Rehab Center in India`} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title || `${siteName} - Best Rehabilitation Center in India`} />
      <meta property="og:description" content={description || defaultDescription} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || `${siteName} - Best Rehabilitation Center in India`} />
      <meta name="twitter:description" content={description || defaultDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content={siteName} />
      
      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": siteName,
          "description": description || defaultDescription,
          "url": canonicalUrl || "https://www.hopepathrecovery.com",
          "medicalSpecialty": ["Addiction Recovery", "Mental Health", "Drug Rehabilitation", "Alcohol Treatment"],
          "availableService": [
            {
              "@type": "MedicalTherapy",
              "name": "Drug Addiction Treatment"
            },
            {
              "@type": "MedicalTherapy",
              "name": "Alcohol Addiction Recovery"
            },
            {
              "@type": "MedicalTherapy",
              "name": "Mental Health Rehabilitation"
            }
          ]
        })}
      </script>
    </Helmet>
  )
}

export default SEO
