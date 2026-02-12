import React from 'react'
import './SEOContent.css'

const SEOContent = () => {
  return (
    <section className="seo-content-section">
      <div className="container">
        {/* H1 - Main Heading */}
        <h1 className="seo-h1">
          Trusted Rehabilitation Center in India for Lasting Recovery
        </h1>

        {/* Professional Paragraph with Keywords */}
        <div className="seo-intro-text">
          <p>
            Welcome to HopePath Recovery, recognized as the <strong>best rehab center in India</strong>, 
            providing comprehensive <strong>drug addiction treatment</strong> and <strong>alcohol addiction 
            recovery</strong> programs. Our state-of-the-art <strong>rehabilitation center in India</strong> combines 
            evidence-based medical care with compassionate support through our <strong>residential rehab 
            program</strong>. As a <strong>trusted addiction recovery center in India</strong>, we specialize in 
            <strong>mental health rehabilitation</strong>, offering personalized treatment plans designed by 
            experienced medical professionals. Our holistic approach addresses physical, psychological, and 
            emotional aspects of recovery, ensuring sustainable healing. With 24/7 medical supervision, 
            modern facilities, and proven treatment methodologies, we help individuals reclaim their lives 
            and build a foundation for long-term sobriety and wellness.
          </p>
        </div>

        {/* H2 Headings with Content */}
        <div className="seo-sections">
          <div className="seo-section">
            <h2 className="seo-h2">
              <i className="fas fa-hospital-alt"></i>
              Comprehensive Drug Addiction Treatment Programs
            </h2>
            <p>
              Our evidence-based drug addiction treatment programs utilize the latest medical 
              protocols and therapeutic interventions. From medically supervised detoxification 
              to intensive counseling and aftercare planning, we provide complete support throughout 
              your recovery journey. Our multidisciplinary team ensures personalized care that 
              addresses the root causes of addiction.
            </p>
          </div>

          <div className="seo-section">
            <h2 className="seo-h2">
              <i className="fas fa-brain"></i>
              Expert Mental Health Rehabilitation Services
            </h2>
            <p>
              Understanding that mental health and addiction often coexist, our integrated 
              mental health rehabilitation services treat co-occurring disorders simultaneously. 
              Our licensed psychiatrists and therapists provide specialized care for depression, 
              anxiety, PTSD, and other conditions, ensuring comprehensive healing and sustainable 
              recovery outcomes.
            </p>
          </div>

          <div className="seo-section">
            <h2 className="seo-h2">
              <i className="fas fa-home"></i>
              Premium Residential Rehab Program Facilities
            </h2>
            <p>
              Experience recovery in a safe, comfortable environment designed for healing. 
              Our residential rehab program offers private accommodations, nutritious meals, 
              fitness facilities, and serene surroundings that promote physical and mental 
              wellness. With 24/7 medical supervision and round-the-clock support, residents 
              receive the attention and care necessary for successful rehabilitation.
            </p>
          </div>

          <div className="seo-section">
            <h2 className="seo-h2">
              <i className="fas fa-award"></i>
              Why Choose India's Best Rehabilitation Center
            </h2>
            <p>
              As the best rehab center in India, we maintain the highest standards of care 
              with internationally trained staff, evidence-based treatment protocols, and 
              proven success rates. Our accredited facility offers individualized treatment 
              plans, family counseling, holistic therapies, and comprehensive aftercare support. 
              We accept all major insurance plans and offer flexible payment options to ensure 
              everyone has access to quality treatment.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="seo-cta">
          <p className="cta-text">
            Take the first step toward recovery today. Our admissions team is available 24/7 
            to answer your questions and guide you through the process.
          </p>
          <div className="cta-buttons">
            <a href="tel:+911800XXXXXX" className="seo-cta-btn primary">
              <i className="fas fa-phone"></i> Call Now: 1800-XXX-XXXX
            </a>
            <a href="#contact" className="seo-cta-btn secondary">
              <i className="fas fa-calendar-check"></i> Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SEOContent
