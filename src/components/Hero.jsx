import React from 'react'
import SearchBar from './SearchBar'
import TrustBadges from './TrustBadges'

function Hero() {
  // Using actual rehab center images
  const decorativeImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', alt: 'Mountain Serenity Recovery Center', position: 'top-left' },
    { id: 2, url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', alt: 'New Dawn Recovery Center', position: 'top-right' },
    { id: 3, url: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400', alt: 'Himalayan Hope Wellness Center', position: 'middle-left' },
    { id: 4, url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400', alt: 'Mumbai Wellness Institute', position: 'middle-right' },
    { id: 5, url: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400', alt: 'Serene Heights Rehabilitation', position: 'bottom-left' },
    { id: 6, url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400', alt: 'Coastal Serenity Center', position: 'bottom-right' },
  ]

  return (
    <section className="hero-section" id="home">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      {/* Decorative Images */}
      <div className="hero-decorative-images">
        {decorativeImages.map((img) => (
          <div key={img.id} className={`decorative-image ${img.position}`}>
            <img src={img.url} alt={img.alt} />
          </div>
        ))}
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Find Hope. Start Your Recovery Journey Today.</h1>
          <p className="hero-subtitle">
            Connect with trusted rehabilitation centers, expert care, and compassionate support across the nation.
          </p>

          <SearchBar />
          <TrustBadges />
        </div>
      </div>
    </section>
  )
}

export default Hero
