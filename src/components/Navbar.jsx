import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Check if user is logged in on component mount and location change
    const checkUser = () => {
      const userData = localStorage.getItem('user')
      if (userData) {
        try {
          setUser(JSON.parse(userData))
        } catch (error) {
          console.error('Error parsing user data:', error)
          localStorage.removeItem('user')
          setUser(null)
        }
      } else {
        setUser(null)
      }
    }

    checkUser()

    // Listen for custom login event
    window.addEventListener('userLoggedIn', checkUser)
    
    // Listen for storage changes (for multi-tab sync)
    window.addEventListener('storage', checkUser)

    return () => {
      window.removeEventListener('userLoggedIn', checkUser)
      window.removeEventListener('storage', checkUser)
    }
  }, [location])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    closeMobileMenu()
    
    // Dispatch custom event for logout
    window.dispatchEvent(new Event('userLoggedOut'))
    
    // Redirect to home page
    window.location.href = '/'
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="nav-brand" onClick={closeMobileMenu}>
            <i className="fas fa-heart-pulse brand-icon"></i>
            <span className="brand-name">HopePath Recovery</span>
          </Link>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
            <li>
              <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              {location.pathname === '/' ? (
                <a href="#centers" className="nav-link" onClick={() => scrollToSection('centers')}>
                  Find Centers
                </a>
              ) : (
                <Link to="/#centers" className="nav-link" onClick={closeMobileMenu}>
                  Find Centers
                </Link>
              )}
            </li>
            <li>
              <Link to="/programs" className={`nav-link ${isActive('/programs')}`} onClick={closeMobileMenu}>
                Programs
              </Link>
            </li>
            <li>
              <Link to="/resources" className={`nav-link ${isActive('/resources')}`} onClick={closeMobileMenu}>
                Resources
              </Link>
            </li>
            <li>
              <Link to="/blogs" className={`nav-link ${isActive('/blogs')}`} onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/advertise" className={`nav-link ${isActive('/advertise')}`} onClick={closeMobileMenu}>
                Advertise
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            
            {/* Mobile-only auth buttons */}
            <li className="mobile-auth-section">
              {user ? (
                <>
                  <div className="mobile-user-info">
                    <i className="fas fa-user-circle"></i>
                    <span>Welcome, {user.name}</span>
                  </div>
                  <button onClick={handleLogout} className="nav-link logout-link">
                    <i className="fas fa-sign-out-alt"></i>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="nav-link" onClick={closeMobileMenu}>
                    <i className="fas fa-sign-in-alt"></i>
                    Login
                  </Link>
                  <Link to="/register" className="nav-link" onClick={closeMobileMenu}>
                    <i className="fas fa-user-plus"></i>
                    Sign Up
                  </Link>
                </>
              )}
            </li>
          </ul>

          <div className="nav-actions">
            {user ? (
              <>
                <span className="user-welcome">Welcome, {user.name}</span>
                <button onClick={handleLogout} className="btn-secondary btn-small logout-btn">
                  <i className="fas fa-sign-out-alt"></i>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-secondary btn-small" onClick={closeMobileMenu}>
                  <i className="fas fa-sign-in-alt"></i>
                  Login
                </Link>
                <Link to="/register" className="btn-primary btn-small" onClick={closeMobileMenu}>
                  <i className="fas fa-user-plus"></i>
                  Sign Up
                </Link>
              </>
            )}
            <button 
              className="mobile-menu-toggle" 
              id="mobileMenuToggle"
              onClick={toggleMobileMenu}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
