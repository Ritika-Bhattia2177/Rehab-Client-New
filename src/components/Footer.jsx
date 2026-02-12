import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="footer-grid">
            <div className="footer-column">
              <h4 className="footer-title">About HopePath Recovery</h4>
              <p className="footer-text">
                HopePath Recovery is dedicated to connecting individuals and families with trusted rehabilitation centers and comprehensive support resources across the nation. We believe in the power of recovery and are committed to helping you find the right path forward.
              </p>
              <div className="footer-links">
                <Link to="/" onClick={scrollToTop} className="footer-link">About Us</Link>
                <Link to="/" onClick={scrollToTop} className="footer-link">Our Mission</Link>
                <Link to="/" onClick={scrollToTop} className="footer-link">How It Works</Link>
                <Link to="/contact" onClick={scrollToTop} className="footer-link">Contact</Link>
              </div>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Quick Links</h4>
              <div className="footer-links">
                <Link to="/premium-centers" onClick={scrollToTop} className="footer-link">Find a Center</Link>
                <Link to="/programs" onClick={scrollToTop} className="footer-link">Treatment Programs</Link>
                <Link to="/drug-guide" onClick={scrollToTop} className="footer-link">Drug Guide</Link>
                <Link to="/resources" onClick={scrollToTop} className="footer-link">Resources</Link>
                <Link to="/blogs" onClick={scrollToTop} className="footer-link">Blog</Link>
                <Link to="/communities" onClick={scrollToTop} className="footer-link">Communities</Link>
                <Link to="/contact" onClick={scrollToTop} className="footer-link">Get Help</Link>
                <Link to="/contact" onClick={scrollToTop} className="footer-link">Crisis Helpline</Link>
              </div>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Top Locations</h4>
              <div className="footer-links">
                <Link to="/premium-centers" onClick={scrollToTop} className="footer-link">Los Angeles Centers</Link>
                <Link to="/premium-centers" onClick={scrollToTop} className="footer-link">New York Centers</Link>
                <Link to="/premium-centers" onClick={scrollToTop} className="footer-link">Chicago Centers</Link>
                <Link to="/premium-centers" onClick={scrollToTop} className="footer-link">Houston Centers</Link>
                <Link to="/premium-centers" onClick={scrollToTop} className="footer-link">Phoenix Centers</Link>
                <Link to="/premium-centers" onClick={scrollToTop} className="footer-link">Miami Centers</Link>
                <Link to="/premium-centers" onClick={scrollToTop} className="footer-link">Seattle Centers</Link>
                <Link to="/premium-centers" onClick={scrollToTop} className="footer-link">View All Locations</Link>
              </div>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">For Providers</h4>
              <div className="footer-links">
                <Link to="/contact" onClick={scrollToTop} className="footer-link">List Your Center</Link>
                <Link to="/login" onClick={scrollToTop} className="footer-link">Verify Your Listing</Link>
                <Link to="/contact" onClick={scrollToTop} className="footer-link">Advertising Options</Link>
                <Link to="/contact" onClick={scrollToTop} className="footer-link">Partner With Us</Link>
              </div>

              <h4 className="footer-title" style={{ marginTop: '2rem' }}>Connect With Us</h4>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-instagram"></i></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">&copy; 2026 HopePath Recovery. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/contact" onClick={scrollToTop} className="footer-legal-link">Privacy Policy</Link>
              <Link to="/contact" onClick={scrollToTop} className="footer-legal-link">Terms of Service</Link>
              <Link to="/contact" onClick={scrollToTop} className="footer-legal-link">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
