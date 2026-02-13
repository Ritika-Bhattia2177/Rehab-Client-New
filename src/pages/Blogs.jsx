import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  
  // Newsletter subscription state
  const [email, setEmail] = useState('')
  const [subscriptionMessage, setSubscriptionMessage] = useState('')
  const [subscriptionStatus, setSubscriptionStatus] = useState('') // 'success' or 'error'
  const [isSubscribing, setIsSubscribing] = useState(false)

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding the Journey: What to Expect in Your First Month of Recovery',
      excerpt: 'Starting your recovery journey can be overwhelming. Learn about the common challenges and victories you may experience in your first 30 days.',
      category: 'Recovery Journey',
      author: 'Dr. Sarah Mitchell',
      authorAvatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop',
      date: 'Feb 1, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&h=500&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'The Science Behind Addiction: Brain Chemistry Explained',
      excerpt: 'Discover how addiction affects the brain and why understanding the neuroscience can help in recovery.',
      category: 'Education',
      author: 'Dr. James Rodriguez',
      authorAvatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop',
      date: 'Jan 28, 2026',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop',
      featured: true
    },
    {
      id: 3,
      title: 'Supporting a Loved One Through Recovery: A Family Guide',
      excerpt: 'Learn effective ways to support family members in recovery while maintaining healthy boundaries.',
      category: 'Family Support',
      author: 'Lisa Thompson, LMFT',
      authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
      date: 'Jan 25, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=500&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'Mindfulness and Meditation in Addiction Recovery',
      excerpt: 'Explore how mindfulness practices can strengthen your recovery and provide lasting tools for wellness.',
      category: 'Wellness',
      author: 'Michael Chen, RYT',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      date: 'Jan 22, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Breaking the Stigma: Real Stories of Recovery Success',
      excerpt: 'Inspiring personal accounts from individuals who have overcome addiction and rebuilt their lives.',
      category: 'Success Stories',
      author: 'Hope Path Editorial',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      date: 'Jan 20, 2026',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=500&fit=crop',
      featured: true
    },
    {
      id: 6,
      title: 'Nutrition and Recovery: Healing Your Body from the Inside Out',
      excerpt: 'The role of proper nutrition in supporting physical and mental health during recovery.',
      category: 'Wellness',
      author: 'Dr. Amanda Foster, RD',
      authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
      date: 'Jan 18, 2026',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop',
      featured: false
    },
    {
      id: 7,
      title: 'Dual Diagnosis: Treating Mental Health and Addiction Together',
      excerpt: 'Understanding co-occurring disorders and the importance of integrated treatment approaches.',
      category: 'Mental Health',
      author: 'Dr. Robert Chang',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      date: 'Jan 15, 2026',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
      featured: false
    },
    {
      id: 8,
      title: 'Building a Strong Support Network in Recovery',
      excerpt: 'Why community matters and how to cultivate meaningful connections that support long-term sobriety.',
      category: 'Community',
      author: 'Karen Williams, LCPC',
      authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
      date: 'Jan 12, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop',
      featured: false
    },
    {
      id: 9,
      title: 'Relapse Prevention: Recognizing Triggers and Warning Signs',
      excerpt: 'Learn to identify your personal triggers and develop effective strategies to prevent relapse.',
      category: 'Prevention',
      author: 'Dr. Marcus Johnson',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      date: 'Jan 10, 2026',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=500&fit=crop',
      featured: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Posts', icon: 'fa-th' },
    { id: 'Recovery Journey', name: 'Recovery Journey', icon: 'fa-route' },
    { id: 'Education', name: 'Education', icon: 'fa-graduation-cap' },
    { id: 'Family Support', name: 'Family Support', icon: 'fa-users' },
    { id: 'Wellness', name: 'Wellness', icon: 'fa-heart' },
    { id: 'Success Stories', name: 'Success Stories', icon: 'fa-star' },
    { id: 'Mental Health', name: 'Mental Health', icon: 'fa-brain' },
    { id: 'Community', name: 'Community', icon: 'fa-hands-helping' },
    { id: 'Prevention', name: 'Prevention', icon: 'fa-shield-alt' }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    
    // If search query is empty, show all posts in category
    if (!searchQuery || searchQuery.trim() === '') {
      return matchesCategory
    }
    
    // Search in title, excerpt, category, and author
    const searchLower = searchQuery.toLowerCase()
    const matchesSearch = post.title.toLowerCase().includes(searchLower) ||
                         post.excerpt.toLowerCase().includes(searchLower) ||
                         post.category.toLowerCase().includes(searchLower) ||
                         post.author.toLowerCase().includes(searchLower)
    
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => {
    if (!post.featured) return false
    
    // If search query is empty, show all featured posts
    if (!searchQuery || searchQuery.trim() === '') {
      return true
    }
    
    // Search in title, excerpt, category, and author
    const searchLower = searchQuery.toLowerCase()
    const matchesSearch = post.title.toLowerCase().includes(searchLower) ||
                         post.excerpt.toLowerCase().includes(searchLower) ||
                         post.category.toLowerCase().includes(searchLower) ||
                         post.author.toLowerCase().includes(searchLower)
    
    return matchesSearch
  })

  // Newsletter subscription handler
  const handleNewsletterSubscription = async (e) => {
    e.preventDefault()
    
    // Reset messages
    setSubscriptionMessage('')
    setSubscriptionStatus('')
    
    // Validate email
    if (!email || !email.includes('@')) {
      setSubscriptionMessage('Please enter a valid email address')
      setSubscriptionStatus('error')
      return
    }
    
    setIsSubscribing(true)
    
    try {
      const response = await fetch('' + API_BASE_URL + '/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      
      const data = await response.json()
      
      if (response.ok && data.success) {
        setSubscriptionMessage(data.message)
        setSubscriptionStatus('success')
        setEmail('') // Clear the input field
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubscriptionMessage('')
          setSubscriptionStatus('')
        }, 5000)
      } else {
        setSubscriptionMessage(data.message || 'Failed to subscribe. Please try again.')
        setSubscriptionStatus('error')
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setSubscriptionMessage('An error occurred. Please check your connection and try again.')
      setSubscriptionStatus('error')
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <>
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Recovery Insights & Stories</h1>
            <p className="hero-subtitle">
              Expert advice, inspiring stories, and valuable resources for your recovery journey
            </p>
            
            {/* Search Bar */}
            <div className="blog-search">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                }}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '15px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    color: '#666'
                  }}
                >
                  ×
                </button>
              )}
            </div>
            {searchQuery && (
              <p style={{ color: 'white', marginTop: '10px', fontSize: '0.9rem' }}>
                Searching for: "{searchQuery}" - Found {filteredPosts.length} articles
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Guides & Resources Section */}
      <section className="guides-resources-section">
        <div className="container">
          <div className="guides-header">
            <h2 className="guides-title">📚 Guides & Resources</h2>
            <p className="guides-subtitle">Step-by-step knowledge to understand recovery and healing.</p>
          </div>
          
          <div className="guides-grid">
            <div className="guide-card">
              <div className="guide-icon">🧠</div>
              <h3 className="guide-title">Understanding Addiction</h3>
              <p className="guide-description">Learn the basics of how addiction affects the brain and behavior.</p>
              <ul className="guide-features">
                <li><i className="fas fa-check-circle"></i> How addiction changes brain chemistry</li>
                <li><i className="fas fa-check-circle"></i> Recognizing signs and symptoms</li>
                <li><i className="fas fa-check-circle"></i> Understanding triggers and cravings</li>
                <li><i className="fas fa-check-circle"></i> The science behind dependency</li>
                <li><i className="fas fa-check-circle"></i> Breaking the cycle of addiction</li>
              </ul>
            </div>

            <div className="guide-card">
              <div className="guide-icon">🌱</div>
              <h3 className="guide-title">Starting Your Recovery Journey</h3>
              <p className="guide-description">Know what to expect in the early stages of recovery and healing.</p>
              <ul className="guide-features">
                <li><i className="fas fa-check-circle"></i> First steps to take when seeking help</li>
                <li><i className="fas fa-check-circle"></i> What happens during detoxification</li>
                <li><i className="fas fa-check-circle"></i> Choosing the right treatment program</li>
                <li><i className="fas fa-check-circle"></i> Building a support network</li>
                <li><i className="fas fa-check-circle"></i> Setting realistic recovery goals</li>
              </ul>
            </div>

            <div className="guide-card">
              <div className="guide-icon">💙</div>
              <h3 className="guide-title">Supporting a Loved One</h3>
              <p className="guide-description">Practical ways families can help while maintaining healthy boundaries.</p>
              <ul className="guide-features">
                <li><i className="fas fa-check-circle"></i> How to start difficult conversations</li>
                <li><i className="fas fa-check-circle"></i> Avoiding enabling behaviors</li>
                <li><i className="fas fa-check-circle"></i> Self-care for family members</li>
                <li><i className="fas fa-check-circle"></i> Understanding co-dependency</li>
                <li><i className="fas fa-check-circle"></i> Supporting without controlling</li>
              </ul>
            </div>

            <div className="guide-card">
              <div className="guide-icon">🌿</div>
              <h3 className="guide-title">Wellness & Mental Health</h3>
              <p className="guide-description">Tips for building emotional strength and long-term well-being.</p>
              <ul className="guide-features">
                <li><i className="fas fa-check-circle"></i> Mindfulness and meditation practices</li>
                <li><i className="fas fa-check-circle"></i> Managing stress and anxiety</li>
                <li><i className="fas fa-check-circle"></i> Nutrition for recovery</li>
                <li><i className="fas fa-check-circle"></i> Exercise and physical wellness</li>
                <li><i className="fas fa-check-circle"></i> Building healthy daily routines</li>
              </ul>
            </div>

            <div className="guide-card">
              <div className="guide-icon">🛡️</div>
              <h3 className="guide-title">Relapse Prevention</h3>
              <p className="guide-description">Strategies to maintain sobriety and handle challenging situations.</p>
              <ul className="guide-features">
                <li><i className="fas fa-check-circle"></i> Identifying personal triggers</li>
                <li><i className="fas fa-check-circle"></i> Developing coping mechanisms</li>
                <li><i className="fas fa-check-circle"></i> Creating an emergency action plan</li>
                <li><i className="fas fa-check-circle"></i> Building a sober support network</li>
                <li><i className="fas fa-check-circle"></i> Recognizing warning signs early</li>
              </ul>
            </div>

            <div className="guide-card">
              <div className="guide-icon">🌟</div>
              <h3 className="guide-title">Life After Treatment</h3>
              <p className="guide-description">Transitioning back to daily life while maintaining your recovery.</p>
              <ul className="guide-features">
                <li><i className="fas fa-check-circle"></i> Continuing care and aftercare programs</li>
                <li><i className="fas fa-check-circle"></i> Rebuilding relationships and trust</li>
                <li><i className="fas fa-check-circle"></i> Finding employment and purpose</li>
                <li><i className="fas fa-check-circle"></i> Managing everyday stress sober</li>
                <li><i className="fas fa-check-circle"></i> Celebrating milestones in recovery</li>
              </ul>
            </div>
          </div>

          <div className="browse-all-wrapper">
            <button className="btn-browse-all" onClick={() => window.scrollTo({ top: document.querySelector('.blog-posts').offsetTop - 100, behavior: 'smooth' })}>
              Browse All Articles <i className="fas fa-arrow-down"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="blog-categories">
        <div className="container">
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <i className={`fas ${category.icon}`}></i>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts">
        <div className="container">
          <div className="posts-grid">
            {filteredPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-img" />
                  <div className="blog-overlay"></div>
                  <span className="post-category-badge">{post.category}</span>
                </div>
                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-footer">
                    <div className="author-info">
                      <img src={post.authorAvatar} alt={post.author} className="author-avatar-small" />
                      <div className="author-text">
                        <span className="author-name-small">{post.author}</span>
                        <div className="post-meta-small">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`} className="btn-link">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <h3>No articles found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="blog-newsletter">
        <div className="container">
          <div className="newsletter-box">
            <div className="newsletter-icon">
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <div className="newsletter-content">
              <h2>Stay Updated with Our Latest Articles</h2>
              <p>Get weekly recovery tips, inspiring stories, and expert insights delivered to your inbox</p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubscription}>
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubscribing}
                />
                <button 
                  type="submit" 
                  className="btn-primary"
                  disabled={isSubscribing}
                >
                  <i className="fas fa-paper-plane"></i>
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              {subscriptionMessage && (
                <div className={`subscription-message ${subscriptionStatus}`}>
                  <i className={`fas ${subscriptionStatus === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                  {subscriptionMessage}
                </div>
              )}
              <p className="newsletter-note">
                <i className="fas fa-lock"></i>
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="popular-topics">
        <div className="container">
          <h2>Popular Topics</h2>
          <div className="topics-grid">
            <button className="topic-tag">
              <i className="fas fa-tag"></i>
              Addiction Recovery
            </button>
            <button className="topic-tag">
              <i className="fas fa-tag"></i>
              Mental Health
            </button>
            <button className="topic-tag">
              <i className="fas fa-tag"></i>
              Family Support
            </button>
            <button className="topic-tag">
              <i className="fas fa-tag"></i>
              Sobriety Tips
            </button>
            <button className="topic-tag">
              <i className="fas fa-tag"></i>
              Relapse Prevention
            </button>
            <button className="topic-tag">
              <i className="fas fa-tag"></i>
              Wellness
            </button>
            <button className="topic-tag">
              <i className="fas fa-tag"></i>
              Success Stories
            </button>
            <button className="topic-tag">
              <i className="fas fa-tag"></i>
              Treatment Options
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Blogs
