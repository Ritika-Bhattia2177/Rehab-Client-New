import React, { useState, useEffect } from 'react'

function EventsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(3)

  const events = [
    {
      id: 1,
      title: 'Balancing Our Life Post Covid-19',
      subtitle: 'Adapting to New Normal & Mental Wellness',
      date: 'February 15, 2024',
      time: '6:00 PM IST',
      type: 'WEBINAR',
      speakers: [
        { name: 'Dr M Rajkumar MD, DPM', role: 'Alpha Healing Center' },
        { name: 'Dr Parth Sant', role: 'CIH DNB Psychiatry PGDCH' },
        { name: 'Mr Vijay Patel, CEO', role: 'Alpha Healing Center' }
      ],
      gradient: 'linear-gradient(135deg, #0f6f52 0%, #1a9870 100%)',
      illustration: '🧘‍♀️'
    },
    {
      id: 2,
      title: 'Prescription Drug Abuse & Mental Health',
      subtitle: 'Understanding Risks and Prevention',
      date: 'February 20, 2024',
      time: '5:30 PM IST',
      type: 'WEBINAR',
      speakers: [
        { name: 'Dr Anant Shinde', role: 'Consultant Psychiatrist & Founder' },
        { name: 'Agnos Rehabilitation Centre, Pune', role: 'Guest Speaker' }
      ],
      gradient: 'linear-gradient(135deg, #7c3aed 0%, #c026d3 100%)',
      illustration: '💊'
    },
    {
      id: 3,
      title: 'How Is Life in a Rehab Centre?',
      subtitle: 'Inside Look at Recovery Journey',
      date: 'February 25, 2024',
      time: '7:00 PM IST',
      type: 'LIVE SESSION',
      speakers: [
        { name: 'Recovery Experts', role: 'Alpha Healing Center' },
        { name: 'Former Patients', role: 'Success Stories' }
      ],
      gradient: 'linear-gradient(135deg, #0c4a6e 0%, #0e7490 100%)',
      illustration: '🏥'
    },
    {
      id: 4,
      title: 'Holistic Healing Approaches',
      subtitle: 'Integrative Methods for Complete Recovery',
      date: 'March 1, 2024',
      time: '6:30 PM IST',
      type: 'WORKSHOP',
      speakers: [
        { name: 'Dr Sarah Johnson', role: 'Holistic Medicine Specialist' },
        { name: 'Raj Sharma', role: 'Yoga & Meditation Expert' }
      ],
      gradient: 'linear-gradient(135deg, #be123c 0%, #e11d48 100%)',
      illustration: '🌿'
    },
    {
      id: 5,
      title: 'Family Support in Recovery',
      subtitle: 'Building Strong Support Systems',
      date: 'March 5, 2024',
      time: '5:00 PM IST',
      type: 'WEBINAR',
      speakers: [
        { name: 'Dr Meera Krishnan', role: 'Family Therapist' },
        { name: 'Support Groups Panel', role: 'Community Leaders' }
      ],
      gradient: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
      illustration: '👨‍👩‍👧‍👦'
    },
    {
      id: 6,
      title: 'Mindfulness & Meditation in Recovery',
      subtitle: 'Techniques for Mental Peace',
      date: 'March 10, 2024',
      time: '6:00 PM IST',
      type: 'LIVE SESSION',
      speakers: [
        { name: 'Swami Anand', role: 'Meditation Master' },
        { name: 'Dr Priya Desai', role: 'Clinical Psychologist' }
      ],
      gradient: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
      illustration: '🧘'
    },
    {
      id: 7,
      title: 'Understanding Alcohol Addiction',
      subtitle: 'Signs, Symptoms & Treatment Options',
      date: 'March 15, 2024',
      time: '6:00 PM IST',
      type: 'WEBINAR',
      speakers: [
        { name: 'Dr Vikram Singh', role: 'Addiction Specialist' },
        { name: 'Counselor Ritu Kapoor', role: 'Recovery Coach' }
      ],
      gradient: 'linear-gradient(135deg, #b45309 0%, #ea580c 100%)',
      illustration: '🍺'
    },
    {
      id: 8,
      title: 'Dual Diagnosis Treatment',
      subtitle: 'Managing Mental Health & Addiction',
      date: 'March 20, 2024',
      time: '5:30 PM IST',
      type: 'WORKSHOP',
      speakers: [
        { name: 'Dr Nisha Malhotra', role: 'Psychiatrist' },
        { name: 'Clinical Team', role: 'Treatment Experts' }
      ],
      gradient: 'linear-gradient(135deg, #047857 0%, #10b981 100%)',
      illustration: '🧠'
    },
    {
      id: 9,
      title: 'Nutrition & Recovery',
      subtitle: 'Healing Through Proper Diet',
      date: 'March 25, 2024',
      time: '7:00 PM IST',
      type: 'LIVE SESSION',
      speakers: [
        { name: 'Nutritionist Anjali Mehta', role: 'Clinical Dietitian' },
        { name: 'Chef Suresh Kumar', role: 'Wellness Food Expert' }
      ],
      gradient: 'linear-gradient(135deg, #15803d 0%, #22c55e 100%)',
      illustration: '🥗'
    },
    {
      id: 10,
      title: 'Adolescent Addiction Recovery',
      subtitle: 'Helping Teens & Young Adults',
      date: 'March 30, 2024',
      time: '6:30 PM IST',
      type: 'WEBINAR',
      speakers: [
        { name: 'Dr Arjun Reddy', role: 'Adolescent Psychiatrist' },
        { name: 'Parents Panel', role: 'Experience Sharing' }
      ],
      gradient: 'linear-gradient(135deg, #c026d3 0%, #e879f9 100%)',
      illustration: '👦'
    },
    {
      id: 11,
      title: 'Relapse Prevention Strategies',
      subtitle: 'Building Long-term Sobriety',
      date: 'April 5, 2024',
      time: '5:00 PM IST',
      type: 'WORKSHOP',
      speakers: [
        { name: 'Dr Ramesh Kumar', role: 'Recovery Specialist' },
        { name: 'Alumni Group', role: 'Success Stories' }
      ],
      gradient: 'linear-gradient(135deg, #dc2626 0%, #f87171 100%)',
      illustration: '🛡️'
    },
    {
      id: 12,
      title: 'Art & Music Therapy',
      subtitle: 'Creative Healing Approaches',
      date: 'April 10, 2024',
      time: '6:00 PM IST',
      type: 'LIVE SESSION',
      speakers: [
        { name: 'Therapist Kavita Sharma', role: 'Art Therapy Expert' },
        { name: 'Musician Rahul Joshi', role: 'Music Therapy Specialist' }
      ],
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
      illustration: '🎨'
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2)
      } else {
        setItemsPerSlide(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(events.length / itemsPerSlide))
    }, 5000)

    return () => clearInterval(timer)
  }, [events.length, itemsPerSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(events.length / itemsPerSlide))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(events.length / itemsPerSlide)) % Math.ceil(events.length / itemsPerSlide))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const getVisibleEvents = () => {
    const start = currentSlide * itemsPerSlide
    return events.slice(start, start + itemsPerSlide)
  }

  return (
    <section className="section events-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Live Sessions - Webinars</h2>
          <p className="section-subtitle">
            Join expert-led webinars and live sessions on addiction, treatment, and recovery to learn, share, and grow.
          </p>
        </div>

        <div className="webinar-carousel">
          <div className="carousel-container">
            <div className="events-slider">
              {getVisibleEvents().map((event, index) => (
                <div key={index} className="event-slide">
                  <div className="event-card-modern">
                    <div className="webinar-slide" style={{ background: event.gradient }}>
                      {/* Header */}
                      <div className="slide-header">
                        <div className="slide-logo">
                          <i className="fas fa-plus-circle"></i>
                          <span>Rehabs.in</span>
                        </div>
                        <div className="slide-type-badge">{event.type}</div>
                      </div>

                      {/* Main Content */}
                      <div className="slide-content">
                        <div className="slide-illustration">
                          <span className="illustration-emoji">{event.illustration}</span>
                        </div>
                        <h3 className="slide-title">{event.title}</h3>
                        <p className="slide-subtitle">{event.subtitle}</p>
                      </div>

                      {/* Speakers Section */}
                      <div className="slide-speakers">
                        <div className="speakers-label">Guest Speakers</div>
                        {event.speakers.map((speaker, idx) => (
                          <div className="speaker-info" key={idx}>
                            <div className="speaker-avatar">
                              <i className="fas fa-user-md"></i>
                            </div>
                            <div className="speaker-details">
                              <div className="speaker-name">{speaker.name}</div>
                              <div className="speaker-role">{speaker.role}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="slide-footer">
                        <div className="slide-date">
                          <i className="far fa-calendar"></i>
                          <span>{event.date}</span>
                        </div>
                        <div className="slide-time">
                          <i className="far fa-clock"></i>
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="carousel-dots">
            {Array.from({ length: Math.ceil(events.length / itemsPerSlide) }).map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Previous slide">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="carousel-arrow next" onClick={nextSlide} aria-label="Next slide">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        <div className="section-footer">
          <button className="btn-primary">View All Events</button>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
