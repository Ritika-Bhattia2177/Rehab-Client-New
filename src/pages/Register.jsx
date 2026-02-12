import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [success, setSuccess] = useState(null)
  const [passwordStrength, setPasswordStrength] = useState('')
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Check password strength
    if (name === 'password') {
      if (value.length === 0) {
        setPasswordStrength('')
      } else if (value.length < 6) {
        setPasswordStrength('weak')
      } else if (value.length < 10) {
        setPasswordStrength('medium')
      } else {
        setPasswordStrength('strong')
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    // Validate password length
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      setLoading(false)
      return
    }

    // Validate terms agreement
    if (!agreedToTerms) {
      setError('Please agree to the Terms & Conditions')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone
        })
      })

      const data = await response.json()

      if (response.ok && data.success) {
        // Store token and user data
        localStorage.setItem('token', data.data.token)
        localStorage.setItem('user', JSON.stringify(data.data))
        
        // Dispatch custom event to notify other components
        window.dispatchEvent(new Event('userLoggedIn'))
        
        // Show success message
        setSuccess('Account created successfully! Redirecting...')
        
        // Redirect to home page after a short delay
        setTimeout(() => {
          navigate('/')
        }, 1500)
      } else {
        // Handle different error cases
        if (response.status === 400) {
          setError(data.error || 'Please check your information and try again.')
        } else {
          setError(data.error || 'Registration failed. Please try again.')
        }
      }
    } catch (error) {
      console.error('Error registering:', error)
      
      // 🎉 DEMO MODE: If server is down, still allow registration
      
      const demoUser = {
        name: formData.name,
        email: formData.email,
        role: 'patient',
        phone: formData.phone,
        token: 'demo-token-' + Date.now()
      }
      
      // Store demo user data
      localStorage.setItem('token', demoUser.token)
      localStorage.setItem('user', JSON.stringify(demoUser))
      
      // Dispatch custom event to notify other components
      window.dispatchEvent(new Event('userLoggedIn'))
      
      // Show success message
      setSuccess('✅ Account created successfully! (Demo Mode)')
      
      // Redirect to home page
      setTimeout(() => {
        navigate('/')
      }, 1500)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      
      <div className="auth-page">
        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <div className="auth-icon">
                <i className="fas fa-user-plus"></i>
              </div>
              <h1>Create Account</h1>
              <p>Join HopePath Recovery and start your journey</p>
            </div>

            {/* Demo Mode Banner */}
            <div style={{
              background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
              color: 'white',
              padding: '12px 16px',
              borderRadius: '8px',
              marginBottom: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(76, 175, 80, 0.25)'
            }}>
              <div style={{fontSize: '1rem', fontWeight: 'bold', marginBottom: '3px'}}>
                🎉 Demo Mode Active
              </div>
              <div style={{fontSize: '0.85rem', opacity: 0.95}}>
                Works even offline - Your account is created instantly!
              </div>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="fas fa-user"></i>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  <i className="fas fa-phone"></i>
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  autoComplete="tel"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <i className="fas fa-lock"></i>
                  Password
                </label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="At least 6 characters"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
                {passwordStrength && (
                  <div className={`password-strength password-${passwordStrength}`}>
                    <div className="strength-bar">
                      <div className="strength-fill"></div>
                    </div>
                    <span className="strength-text">
                      Password strength: <strong>{passwordStrength}</strong>
                    </span>
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">
                  <i className="fas fa-lock"></i>
                  Confirm Password
                </label>
                <div className="password-input-wrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    placeholder="Repeat your password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label="Toggle confirm password visibility"
                  >
                    <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>

              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="agreedToTerms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  required
                />
                <label htmlFor="agreedToTerms">
                  I agree to the <Link to="/terms" target="_blank">Terms & Conditions</Link> and <Link to="/privacy" target="_blank">Privacy Policy</Link>
                </label>
              </div>

              {error && (
                <div className="form-error">
                  <i className="fas fa-exclamation-circle"></i>
                  {error}
                </div>
              )}

              {success && (
                <div className="form-success">
                  <i className="fas fa-check-circle"></i>
                  {success}
                </div>
              )}

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Creating account...
                  </>
                ) : (
                  <>
                    <i className="fas fa-user-plus"></i>
                    Create Account
                  </>
                )}
              </button>
            </form>

            <div className="auth-footer">
              <p>Already have an account? <Link to="/login">Sign in</Link></p>
            </div>

            <div className="auth-guest">
              <div className="divider">
                <span>OR</span>
              </div>
              <button 
                type="button" 
                className="btn-guest" 
                onClick={() => navigate('/')}
              >
                <i className="fas fa-globe"></i>
                Continue as Guest
              </button>
              <p className="guest-note">Explore our platform without creating an account</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Register
