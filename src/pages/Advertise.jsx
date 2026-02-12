import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function Advertise() {
  const [expandedPlan, setExpandedPlan] = useState('starter')

  const togglePlan = (planId) => {
    setExpandedPlan(expandedPlan === planId ? null : planId)
  }

  const plans = [
    {
      id: 'starter',
      name: 'Starter Plan',
      icon: 'fas fa-rocket',
      color: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      description: 'Usually low on budget or just want to start some form of high value advertising. Not sure where & how to start. We have launched a new product for this segment.',
      features: [
        'Basic profile listing',
        'Contact information display',
        'Search visibility',
        'Monthly analytics report'
      ],
      price: 'Contact for pricing'
    },
    {
      id: 'medium',
      name: 'Medium Size',
      icon: 'fas fa-chart-line',
      color: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      description: 'Enhanced visibility for growing centers looking to expand their reach and attract more patients.',
      features: [
        'Enhanced profile with photos',
        'Priority in search results',
        'Featured in category listings',
        'Weekly analytics dashboard',
        'Social media promotion',
        'Email campaign inclusion'
      ],
      price: 'Contact for pricing'
    },
    {
      id: 'established',
      name: 'Established',
      icon: 'fas fa-crown',
      color: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
      description: 'Premium placement for established centers seeking maximum exposure and targeted advertising.',
      features: [
        'Premium profile with video',
        'Top position in search results',
        'Homepage featured placement',
        'Daily analytics & insights',
        'Dedicated account manager',
        'Multi-channel advertising',
        'Custom landing page',
        'Blog feature opportunities'
      ],
      price: 'Contact for pricing'
    }
  ]

  const offerings = [
    {
      title: 'Enhanced Profile',
      icon: 'fas fa-user-circle',
      color: '#10b981',
      description: 'This is an upgrade over your current free profile, where we give you an option to customize your page to attract more leads, share more photographs, videos and information about your center. This also offers you an additional advantage of promoting your center in different sections & placements on our platform.'
    },
    {
      title: 'Primary Targeting',
      icon: 'fas fa-bullseye',
      color: '#3b82f6',
      description: 'Primary targeting option is used to reach out to a large group of audience from a particular geography either at a state level or one or more of the major metro cities. This is an exclusive opportunity which is only offered to one center for each state and major metros.'
    },
    {
      title: 'Secondary Targeting',
      icon: 'fas fa-location-arrow',
      color: '#f59e0b',
      description: 'Secondary targeting is shown at the top of search results and is our best seller. This is available for all the states & cities and unlike Primary targeting, this is not exclusive. So, you will be sharing the same spot with other centers which are also advertising in your geography.'
    },
    {
      title: 'Homepage Placement',
      icon: 'fas fa-home',
      color: '#a855f7',
      description: 'This option puts your center directly to our home page thereby giving you a direct benefit to showcase yourself to millions of our highly targeted visitors each year. Being the landing page, this also gives you a wide variety of audience.'
    },
    {
      title: 'Footer Placement',
      icon: 'fas fa-th-large',
      color: '#06b6d4',
      description: 'Footer placements are sitewide and gives you an opportunity to show your center on every page of Rehabs.in in the footer section. This ensures consistent visibility across the entire platform and helps build brand recognition.'
    },
    {
      title: 'Luxury & International Placements',
      icon: 'fas fa-globe',
      color: '#8b5cf6',
      description: 'If you are looking for more international exposure and if you run a center which can be considered as a luxury center, we have various options from our other international assets which can help you achieve your results. One of the option that we have recently opened for our India centers is on the India page of Rehabs in India.'
    },
    {
      title: 'Blog Feature',
      icon: 'fas fa-newspaper',
      color: '#ef4444',
      description: 'Get featured in our recovery blog section where thousands of patients and families come to learn about addiction recovery. Share your success stories, treatment methodologies, and expert insights to establish your center as a thought leader in the rehabilitation space.'
    },
    {
      title: 'Email Marketing Campaign',
      icon: 'fas fa-envelope',
      color: '#f59e0b',
      description: 'Reach out directly to our extensive database of individuals seeking rehabilitation services through targeted email campaigns. We help you connect with potential patients who have shown interest in specific treatment programs or recovery services.'
    },
    {
      title: 'Social Media Promotion',
      icon: 'fas fa-share-alt',
      color: '#10b981',
      description: 'Amplify your reach through our social media channels with combined followers of over 500,000 across platforms. Your center will be featured in posts, stories, and campaigns targeted at audiences actively seeking rehabilitation services.'
    },
    {
      title: 'Video Showcase',
      icon: 'fas fa-video',
      color: '#3b82f6',
      description: 'Stand out with professional video content showcasing your facilities, staff, and patient testimonials. Video placements receive 3x more engagement than standard listings and help potential patients get a real feel of your center before visiting.'
    },
    {
      title: 'Priority Support',
      icon: 'fas fa-headset',
      color: '#ec4899',
      description: 'Get dedicated account management with priority support for all your advertising needs. Our team will work closely with you to optimize your campaigns, provide detailed analytics, and ensure maximum ROI from your advertising investment.'
    },
    {
      title: 'Event Sponsorship',
      icon: 'fas fa-calendar-check',
      color: '#14b8a6',
      description: 'Sponsor our wellness events, webinars, and community outreach programs. Gain visibility among highly engaged audiences and position your center as a community partner committed to addiction recovery and mental health awareness.'
    }
  ]

  return (
    <>
      <ScrollToTop />
      <Navbar />
      
      {/* Hero Section */}
      <section className="advertise-hero">
        <div className="container">
          <div className="advertise-hero-content">
            <h1>Advertise With Us</h1>
            <p className="hero-subtitle">
              Rehabs.in which lists more than 1700 rehab centers from India and receives over a million/year highly targeted hits from patients looking for a rehab center, offers very focused advertising options for rehab and deaddiction centers of different sizes and types.
            </p>
            <p className="hero-description">
              However, we are always <strong>free for listing</strong> your center in our directory and would love to have you as a part of our various campaigns to promote de-addiction and mental health in India.
            </p>
          </div>
        </div>
      </section>

      {/* Advertising Plans Section */}
      <section className="advertising-plans">
        <div className="container">
          <div className="plans-layout">
            {/* Left Side - Text Content */}
            <div className="plans-text">
              <h2>Advertise with us</h2>
              <p className="text-bold">
                Rehabs.in which lists more than 1700 rehab centers from India and receives over a million/year highly targeted hits from patients looking for a rehab center, offers very focused advertising options for rehab and deaddiction centers of different sizes and types.
              </p>
              <p className="text-regular">
                However, we are always <span className="text-link">free for listing your center</span> in our directory and would love to have you as a part of our various campaigns to promote de-addiction and mental health in India.
              </p>
            </div>

            {/* Right Side - Collapsible Plan Cards */}
            <div className="plans-cards">
              {plans.map((plan) => (
                <div key={plan.id} className="accordion-card">
                  <div 
                    className="accordion-header"
                    onClick={() => togglePlan(plan.id)}
                  >
                    <h3>{plan.name}</h3>
                    <button className="accordion-toggle">
                      <i className={`fas fa-chevron-${expandedPlan === plan.id ? 'up' : 'down'}`}></i>
                    </button>
                  </div>
                  {expandedPlan === plan.id && (
                    <div className="accordion-content">
                      <p className="plan-desc">{plan.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="what-we-offer">
        <div className="container">
          <h2 className="section-title">What we offer</h2>
          <p className="section-subtitle">
            Each center that we promote on our platform have an option to choose from a combination of different placements and geographies. To help you understand, here is a brief explanation for each of them:
          </p>

          <div className="offerings-grid">
            {offerings.map((offering, index) => (
              <div key={index} className="offering-card">
                <div className="offering-icon" style={{ background: offering.color }}>
                  <i className={offering.icon}></i>
                </div>
                <h3>{offering.title}</h3>
                <p>{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="advertise-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Reach More Patients?</h2>
            <p>Join over 1700+ rehab centers already advertising with us</p>
            <div className="cta-buttons">
              <button className="btn-primary btn-large">
                <i className="fas fa-phone"></i>
                Contact Sales Team
              </button>
              <button className="btn-secondary btn-large">
                <i className="fas fa-envelope"></i>
                Request Information
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Advertise
