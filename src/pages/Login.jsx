import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [success, setSuccess] = useState(null)
  const [rememberMe, setRememberMe] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleDemoLogin = (role) => {
    if (role === 'admin') {
      setFormData({
        email: 'admin@hopepath.com',
        password: 'admin123'
      })
    } else if (role === 'patient') {
      setFormData({
        email: 'patient@test.com',
        password: 'patient123'
      })
    } else if (role === 'ritika') {
      setFormData({
        email: 'ritika24111@navgurukul.org',
        password: 'ritika123'
      })
    } else if (role === 'navgurukul') {
      setFormData({
        email: 'ritika2984@navgurukul.org',
        password: 'navguru123'
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok && data.success) {
        // Store token and user data
        localStorage.setItem('token', data.data.token)
        localStorage.setItem('user', JSON.stringify(data.data))
        
        // Dispatch custom event to notify other components
        window.dispatchEvent(new Event('userLoggedIn'))
        
        // Show success message
        setSuccess('Login successful! Redirecting...')
        
        // Redirect to home page after a short delay
        setTimeout(() => {
          navigate('/')
        }, 1000)
      } else if (response.status === 401) {
        // 🎉 DEMO MODE: Allow any email to login
        
        // Extract name from email (before @)
        const userName = formData.email.split('@')[0]
        const capitalizedName = userName.charAt(0).toUpperCase() + userName.slice(1)
        
        // Create a demo user object
        const demoUser = {
          name: capitalizedName,
          email: formData.email,
          role: 'patient',
          token: 'demo-token-' + Date.now()
        }
        
        // Store demo user data
        localStorage.setItem('token', demoUser.token)
        localStorage.setItem('user', JSON.stringify(demoUser))
        
        // Dispatch custom event to notify other components
        window.dispatchEvent(new Event('userLoggedIn'))
        
        // Show success message
        setSuccess('✅ Welcome! Logged in as Guest User')
        
        // Redirect to home page
        setTimeout(() => {
          navigate('/')
        }, 1000)
      } else if (response.status === 400) {
        setError(data.error || '⚠️ Please provide valid email and password.')
      } else if (response.status === 404) {
        setError('⚠️ Server not found. Please make sure the backend server is running on port 3000.')
      } else {
        setError(data.error || '⚠️ Login failed. Please try again.')
      }
    } catch (error) {
      console.error('❌ Connection Error:', error)
      
      // 🎉 DEMO MODE: If server is down, still allow login
      const userName = formData.email.split('@')[0]
      const capitalizedName = userName.charAt(0).toUpperCase() + userName.slice(1)
      
      const demoUser = {
        name: capitalizedName,
        email: formData.email,
        role: 'patient',
        token: 'demo-token-' + Date.now()
      }
      
      localStorage.setItem('token', demoUser.token)
      localStorage.setItem('user', JSON.stringify(demoUser))
      window.dispatchEvent(new Event('userLoggedIn'))
      
      setSuccess('✅ Welcome! Logged in as Guest User (Offline Mode)')
      
      setTimeout(() => {
        navigate('/')
      }, 1000)
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
                <i className="fas fa-user-circle"></i>
              </div>
              <h1>Welcome Back</h1>
              <p>Log in to your account to continue</p>
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
                Login with <strong>ANY email and password</strong> - No registration needed!
              </div>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
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
                  placeholder="Type any email (e.g., yourname@example.com)"
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <div className="label-row">
                  <label htmlFor="password">
                    <i className="fas fa-lock"></i>
                    Password
                  </label>
                  <Link to="/forgot-password" className="forgot-password-link">
                    Forgot Password?
                  </Link>
                </div>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Type any password (e.g., 123456)"
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
              </div>

              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="rememberMe">Remember me for 30 days</label>
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
                    Loging in...
                  </>
                ) : (
                  <>
                    <i className="fas fa-sign-in-alt"></i>
                    Log In
                  </>
                )}
              </button>
            </form>

            <div className="auth-footer">
              <p>Don't have an account? <Link to="/register">Sign up</Link></p>
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
              <p className="guest-note">Browse centers, programs, and resources without an account</p>
            </div>

            <div className="auth-demo">
              <h3>🚀 Quick Demo Login:</h3>
              <div className="demo-buttons">
                <button 
                  type="button" 
                  className="btn-demo" 
                  onClick={() => handleDemoLogin('admin')}
                >
                  <i className="fas fa-user-shield"></i>
                  Admin Demo
                </button>
                <button 
                  type="button" 
                  className="btn-demo" 
                  onClick={() => handleDemoLogin('patient')}
                >
                  <i className="fas fa-user"></i>
                  Patient Demo
                </button>
                <button 
                  type="button" 
                  className="btn-demo" 
                  onClick={() => handleDemoLogin('ritika')}
                >
                  <i className="fas fa-user-circle"></i>
                  Ritika Account
                </button>
                <button 
                  type="button" 
                  className="btn-demo" 
                  onClick={() => handleDemoLogin('navgurukul')}
                >
                  <i className="fas fa-graduation-cap"></i>
                  NavGurukul User
                </button>
              </div>
              <p className="demo-note">
                <i className="fas fa-info-circle"></i>
                <strong>💡 Easy Login:</strong> Type <strong>ANY email and password</strong> to login instantly!<br/>
                <strong>Or:</strong> Click any demo button above for quick access<br/>
                <small style={{color: '#27ae60', fontWeight: 600}}>✅ No registration needed - All emails work automatically!</small>
              </p>
              
              <div className="troubleshooting-section" style={{
                marginTop: '14px',
                padding: '12px',
                background: '#e8f5e9',
                borderRadius: '8px',
                border: '2px solid #4caf50'
              }}>
                <h4 style={{color: '#2e7d32', marginBottom: '8px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px'}}>
                  <span>🎉</span> Demo Mode Active - Login with ANY Email!
                </h4>
                <p style={{fontSize: '0.8rem', lineHeight: '1.6', color: '#1b5e20', marginBottom: '8px'}}>
                  <strong>Examples:</strong>
                </p>
                <ul style={{fontSize: '0.8rem', lineHeight: '1.6', color: '#2e7d32', marginLeft: '18px', listStyle: 'none'}}>
                  <li>✅ <strong>yourname@gmail.com</strong> / any password</li>
                  <li>✅ <strong>test@test.com</strong> / 123456</li>
                  <li>✅ <strong>ritika2664@navgurukul.org</strong> / anything</li>
                  <li>✅ <strong>demo@example.com</strong> / password</li>
                </ul>
                <p style={{fontSize: '0.75rem', color: '#2e7d32', marginTop: '8px', fontStyle: 'italic', background: 'white', padding: '6px', borderRadius: '4px'}}>
                  💡 <strong>Tip:</strong> Just type your email, any password, and click "Log In" - it works instantly!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Login
