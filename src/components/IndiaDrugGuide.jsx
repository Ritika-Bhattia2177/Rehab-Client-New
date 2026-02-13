import React from 'react'
import { Link } from 'react-router-dom'

function IndiaDrugGuide() {
  return (
    <section className="section india-drug-guide-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Recovery Resources through Community, Engagement and Literature</h2>
          <p className="section-subtitle">
            Access trusted guides, research, and community stories to support recovery and spread awareness about addiction and healing.
          </p>
        </div>

        <div className="drug-guide-content">
          <div className="drug-guide-image">
            <div className="illustration-box">
              <svg viewBox="0 0 800 600" className="drug-illustration">
                {/* Background */}
                <rect x="0" y="0" width="800" height="600" fill="#2d7f5e" rx="20"/>
                
                {/* Decorative circles */}
                <circle cx="650" cy="450" r="120" fill="#236b4f" opacity="0.3"/>
                <circle cx="200" cy="150" r="100" fill="#236b4f" opacity="0.3"/>
                
                {/* Syringe */}
                <g transform="translate(150, 100)">
                  <rect x="0" y="50" width="10" height="150" fill="#4a90e2" rx="2"/>
                  <rect x="-5" y="190" width="20" height="40" fill="#4a90e2" rx="3"/>
                  <polygon points="5,50 5,30 3,30 7,10 11,30 9,30 9,50" fill="#a0a0a0"/>
                </g>

                {/* Pills Blister Pack */}
                <g transform="translate(350, 150)">
                  <rect x="0" y="0" width="160" height="200" fill="#e8f4f8" rx="15"/>
                  <rect x="10" y="10" width="140" height="180" fill="white" rx="10"/>
                  {/* Pills */}
                  <circle cx="45" cy="60" r="18" fill="#4ecdc4"/>
                  <circle cx="115" cy="60" r="18" fill="#4ecdc4"/>
                  <circle cx="45" cy="120" r="18" fill="#4ecdc4"/>
                  <circle cx="115" cy="120" r="18" fill="#4ecdc4"/>
                  <circle cx="45" cy="180" r="18" fill="#ff9f43"/>
                  <circle cx="115" cy="180" r="18" fill="#ff9f43"/>
                  <ellipse cx="80" cy="250" rx="20" ry="10" fill="#ff9f43"/>
                  <ellipse cx="130" cy="260" rx="20" ry="10" fill="#ff9f43"/>
                  <ellipse cx="180" cy="255" rx="20" ry="10" fill="#ff9f43"/>
                </g>

                {/* Medicine Bottles */}
                <g transform="translate(250, 300)">
                  {/* Orange Bottle */}
                  <rect x="0" y="40" width="60" height="100" fill="#ff6b35" rx="5"/>
                  <rect x="0" y="35" width="60" height="15" fill="#ff8c5a" rx="3"/>
                  <rect x="10" y="55" width="40" height="60" fill="white" opacity="0.7" rx="2"/>
                  
                  {/* Blue Bottle */}
                  <rect x="80" y="20" width="70" height="120" fill="#4a90e2" rx="5"/>
                  <rect x="80" y="15" width="70" height="15" fill="#5fa3ef" rx="3"/>
                  <circle cx="115" cy="30" r="8" fill="#1e3a8a"/>
                </g>

                {/* Medicine Box */}
                <g transform="translate(380, 320)">
                  <rect x="0" y="0" width="100" height="120" fill="#26deb0" rx="5"/>
                  <rect x="10" y="10" width="80" height="100" fill="#4ee8c4" rx="3"/>
                  <rect x="15" y="20" width="70" height="30" fill="white" opacity="0.9" rx="2"/>
                  <rect x="15" y="60" width="70" height="40" fill="white" opacity="0.9" rx="2"/>
                </g>

                {/* Red Box */}
                <g transform="translate(500, 340)">
                  <rect x="0" y="0" width="80" height="80" fill="#ff4757" rx="5"/>
                  <rect x="10" y="10" width="60" height="60" fill="#ff6b7a" rx="3"/>
                  <circle cx="40" cy="40" r="15" fill="white" opacity="0.9"/>
                </g>

                {/* Spray Bottle */}
                <g transform="translate(600, 280)">
                  <rect x="0" y="40" width="60" height="100" fill="#5fa3ef" rx="5"/>
                  <rect x="15" y="30" width="30" height="20" fill="#4a90e2" rx="3"/>
                  <rect x="22" y="10" width="16" height="25" fill="#1e3a8a" rx="2"/>
                  <rect x="10" y="60" width="40" height="60" fill="white" opacity="0.5" rx="2"/>
                </g>

                {/* Capsules scattered */}
                <ellipse cx="200" cy="450" rx="25" ry="12" fill="#ff9f43"/>
                <ellipse cx="250" cy="460" rx="25" ry="12" fill="#ff6b35"/>
                
                {/* Crown decoration */}
                <g transform="translate(680, 520)">
                  <path d="M 0,30 L 10,0 L 20,30 L 30,5 L 40,30 L 50,0 L 60,30 Z" fill="#ffd700"/>
                  <rect x="0" y="30" width="60" height="15" fill="#ffd700" rx="3"/>
                </g>
              </svg>
            </div>
          </div>

          <div className="drug-guide-text">
            <h3 className="guide-title">India Drug Guide</h3>
            <p className="guide-description">
              More Indians abuse addictive substances than ever before; the problem has gone from a personal to a national issue. And as addictive substances become more available in India, more and more of our people suffer addiction and dependence on drugs and alcohol.
            </p>
            <Link to="/drug-guide" className="btn btn-outline">
              Learn More <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndiaDrugGuide
