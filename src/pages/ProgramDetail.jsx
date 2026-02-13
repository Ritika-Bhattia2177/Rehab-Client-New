import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import InquiryModal from '../components/InquiryModal'

function ProgramDetail() {
  const { id } = useParams()
  const [careTeam, setCareTeam] = useState([])
  const [loadingStaff, setLoadingStaff] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('')

  // Fetch care team members
  useEffect(() => {
    const fetchCareTeam = async () => {
      try {
        const response = await fetch('' + API_BASE_URL + '/api/staff')
        const data = await response.json()
        
        if (data.success) {
          // Take first 4 staff members for the care team
          setCareTeam(data.data.slice(0, 4))
        }
      } catch (error) {
        console.error('Error fetching care team:', error)
      } finally {
        setLoadingStaff(false)
      }
    }

    fetchCareTeam()
  }, [])

  // Handler functions for modal
  const handleInquiryClick = () => {
    setModalType('program_inquiry')
    setIsModalOpen(true)
  }

  const handleVisitClick = () => {
    setModalType('visit_schedule')
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setModalType('')
  }

  // Program data - this would typically come from an API or database
  const programs = {
    'substance-detox': {
      title: 'Substance Abuse Treatment',
      tagline: 'Comprehensive Recovery from Addiction',
      badge: 'SUBSTANCE ABUSE',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      description: 'Comprehensive treatment programs for alcohol and drug addiction with medically supervised detox and therapy. Our evidence-based approach combines medical intervention with psychological support to address the root causes of addiction and build lasting recovery skills.',
      whoIsThisFor: [
        'Individuals struggling with alcohol or drug addiction',
        'People experiencing withdrawal symptoms',
        'Those who have relapsed and need structured care',
        'Anyone seeking medically supervised detox environment'
      ],
      whatToExpect: [
        { step: 'Medical Assessment', desc: 'Complete health evaluation and addiction severity assessment' },
        { step: 'Medically Supervised Detox', desc: '24/7 medical monitoring during withdrawal process' },
        { step: 'Individual & Group Therapy', desc: 'Evidence-based counseling and peer support sessions' },
        { step: 'Holistic Wellness', desc: 'Nutrition, fitness, and complementary therapies' },
        { step: 'Aftercare Planning', desc: 'Comprehensive discharge plan and ongoing support' }
      ],
      servicesIncluded: [
        'Medical Detox',
        '24/7 Support',
        'Individual Therapy',
        'Group Sessions',
        'Family Counseling',
        'Relapse Prevention',
        'Life Skills Training'
      ],
      duration: '30-90 days depending on individual needs',
      careLevel: '24/7 medical and clinical supervision',
      testimonial: {
        text: 'The substance abuse program saved my life. The comprehensive approach addressed not just my addiction, but helped me understand and heal from the underlying issues.',
        author: 'John D.'
      }
    },
    'mental-health-therapy': {
      title: 'Mental Health Recovery',
      tagline: 'Specialized Care for Mental Wellness',
      badge: 'MENTAL HEALTH',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
      description: 'Specialized programs for depression, anxiety, PTSD, and other mental health conditions. Our comprehensive mental health treatment combines psychiatric care, evidence-based therapy, and holistic wellness to help you achieve emotional balance and lasting recovery.',
      whoIsThisFor: [
        'Individuals dealing with depression, anxiety, or PTSD',
        'People experiencing severe mental health challenges',
        'Those seeking professional psychiatric care',
        'Anyone needing emotional support and coping strategies'
      ],
      whatToExpect: [
        { step: 'Psychiatric Evaluation', desc: 'Comprehensive mental health assessment by licensed psychiatrists' },
        { step: 'Personalized Treatment Plan', desc: 'Customized therapy approach for your specific needs' },
        { step: 'Regular Therapy Sessions', desc: 'CBT, DBT, and other evidence-based therapies' },
        { step: 'Medication Management', desc: 'Careful psychiatric medication oversight when needed' },
        { step: 'Wellness & Recovery Skills', desc: 'Coping strategies and emotional regulation training' }
      ],
      servicesIncluded: [
        'Psychiatric Care',
        'CBT Therapy',
        'Medication Management',
        'Wellness Activities',
        'Peer Support',
        'Family Therapy',
        'Crisis Intervention'
      ],
      duration: '6-12 weeks with flexible scheduling',
      careLevel: 'Outpatient care with 24/7 crisis support available',
      testimonial: {
        text: 'The mental health program gave me tools to manage my anxiety and depression. For the first time in years, I feel hope and control over my life.',
        author: 'Sarah M.'
      }
    },
    'dual-diagnosis': {
      title: 'Dual Diagnosis Treatment',
      tagline: 'Integrated Care for Co-Occurring Disorders',
      badge: 'DUAL DIAGNOSIS',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
      description: 'Integrated treatment for co-occurring mental health and substance use disorders. Our specialized dual diagnosis program addresses both conditions simultaneously, providing comprehensive care that treats the whole person, not just individual symptoms.',
      whoIsThisFor: [
        'Individuals with both addiction and mental health disorders',
        'People whose substance use is connected to mental health issues',
        'Those who have struggled with traditional single-focus treatment',
        'Anyone needing comprehensive integrated care'
      ],
      whatToExpect: [
        { step: 'Comprehensive Assessment', desc: 'Thorough evaluation of both mental health and addiction' },
        { step: 'Integrated Treatment Plan', desc: 'Coordinated approach addressing both conditions' },
        { step: 'Combined Therapy', desc: 'Simultaneous treatment for addiction and mental health' },
        { step: 'Psychiatric & Medical Care', desc: 'Full medical and psychiatric support' },
        { step: 'Long-term Recovery Plan', desc: 'Strategies to manage both conditions after treatment' }
      ],
      servicesIncluded: [
        'Comprehensive Assessment',
        'Integrated Treatment',
        'Psychiatric Support',
        'Addiction Therapy',
        'Relapse Prevention',
        'Medication Management',
        'Family Education'
      ],
      duration: '60-90 days residential or intensive outpatient',
      careLevel: '24/7 psychiatric and medical supervision',
      testimonial: {
        text: 'Understanding that my addiction and depression were connected changed everything. The dual diagnosis program finally gave me the complete treatment I needed.',
        author: 'Michael R.'
      }
    },
    'outpatient': {
      title: 'Outpatient Programs',
      tagline: 'Flexible Treatment That Fits Your Life',
      badge: 'OUTPATIENT',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
      description: 'Flexible treatment options that allow you to maintain daily responsibilities while receiving care. Our outpatient programs provide comprehensive treatment without requiring you to step away from work, school, or family commitments.',
      whoIsThisFor: [
        'Individuals who need treatment but cannot leave work or home',
        'People transitioning from residential care',
        'Those with strong support systems at home',
        'Anyone seeking flexible recovery options'
      ],
      whatToExpect: [
        { step: 'Flexible Scheduling', desc: 'Evening and weekend sessions available' },
        { step: 'Regular Therapy Sessions', desc: 'Individual and group counseling 2-3 times per week' },
        { step: 'Skill Development', desc: 'Practical tools for managing recovery in daily life' },
        { step: 'Ongoing Support', desc: 'Continuous care team check-ins and adjustments' },
        { step: 'Family Integration', desc: 'Involving loved ones in your recovery process' }
      ],
      servicesIncluded: [
        'Flexible Scheduling',
        'Evening Sessions',
        'Work-Friendly',
        'Continued Support',
        'Family Involvement',
        'Individual Therapy',
        'Group Support'
      ],
      duration: '8-16 weeks, customizable to your needs',
      careLevel: 'Regular clinical oversight with 24/7 crisis support',
      testimonial: {
        text: 'The outpatient program let me get the help I needed while keeping my job and staying with my family. It was exactly what I needed.',
        author: 'David L.'
      }
    },
    'inpatient-rehab': {
      title: 'Residential Treatment',
      tagline: 'Immersive 24/7 Recovery Environment',
      badge: 'RESIDENTIAL',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
      description: 'Immersive 24/7 care in a structured, supportive environment focused on healing and recovery. Our residential treatment provides intensive, round-the-clock care in a peaceful setting where you can focus entirely on your recovery journey.',
      whoIsThisFor: [
        'Individuals requiring intensive, structured treatment',
        'Those with severe addiction or mental health challenges',
        'People needing separation from triggering environments',
        'Anyone seeking comprehensive, immersive recovery care'
      ],
      whatToExpect: [
        { step: 'Admission & Assessment', desc: 'Complete medical and psychological evaluation on day one' },
        { step: 'Structured Daily Program', desc: 'Balanced schedule of therapy, wellness, and recovery activities' },
        { step: 'Intensive Therapy', desc: 'Multiple individual and group sessions per week' },
        { step: 'Life Skills & Recreation', desc: 'Practical training and therapeutic activities' },
        { step: 'Transition Planning', desc: 'Comprehensive aftercare and step-down support' }
      ],
      servicesIncluded: [
        '24/7 Supervision',
        'Structured Schedule',
        'Full Medical Support',
        'Therapeutic Community',
        'Holistic Approach',
        'Nutritious Meals',
        'Recreational Therapy'
      ],
      duration: '30-90 days residential stay',
      careLevel: '24/7 medical, psychiatric, and clinical supervision',
      testimonial: {
        text: 'The residential program gave me the space and structure I needed to truly focus on recovery. Being away from old triggers was life-changing.',
        author: 'Jennifer K.'
      }
    },
    'aftercare': {
      title: 'Aftercare & Relapse Prevention',
      tagline: 'Continued Support for Lasting Recovery',
      badge: 'AFTERCARE',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
      description: 'Ongoing support and resources to maintain sobriety and prevent relapse after completing primary treatment. Our comprehensive aftercare program ensures you have the tools, support, and community needed for long-term success.',
      whoIsThisFor: [
        'Individuals completing primary treatment programs',
        'People seeking ongoing support in recovery',
        'Those looking to strengthen relapse prevention skills',
        'Anyone wanting to maintain long-term sobriety'
      ],
      whatToExpect: [
        { step: 'Continuing Care Plan', desc: 'Personalized strategy for maintaining recovery' },
        { step: 'Support Group Connections', desc: 'Regular meetings and peer support networks' },
        { step: 'Alumni Program Access', desc: 'Ongoing connection with treatment community' },
        { step: 'Life Skills Enhancement', desc: 'Job training, education, and practical support' },
        { step: 'Crisis Prevention', desc: 'Early warning system and intervention strategies' }
      ],
      servicesIncluded: [
        'Support Groups',
        'Alumni Network',
        'Life Skills Training',
        'Job Assistance',
        'Sober Living',
        'Check-in Calls',
        'Relapse Prevention'
      ],
      duration: 'Ongoing support as long as needed',
      careLevel: 'Flexible support with crisis intervention available',
      testimonial: {
        text: 'The aftercare program has been my safety net. Knowing I have support whenever I need it makes all the difference in staying sober.',
        author: 'Robert P.'
      }
    },
    'holistic': {
      title: 'Holistic Therapy Programs',
      tagline: 'Mind, Body, and Spirit Healing',
      badge: 'HOLISTIC',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      description: 'Alternative and complementary treatments including yoga, meditation, art therapy, and nutrition. Our holistic programs integrate traditional therapy with wellness practices to heal the whole person - mind, body, and spirit.',
      whoIsThisFor: [
        'Individuals seeking complementary treatment approaches',
        'People interested in mind-body wellness',
        'Those looking for alternative therapy methods',
        'Anyone wanting comprehensive wellness support'
      ],
      whatToExpect: [
        { step: 'Wellness Assessment', desc: 'Holistic evaluation of physical, mental, and spiritual health' },
        { step: 'Yoga & Meditation', desc: 'Daily mindfulness and movement practices' },
        { step: 'Creative Therapies', desc: 'Art, music, and expressive therapy sessions' },
        { step: 'Nutrition & Fitness', desc: 'Personalized wellness and dietary guidance' },
        { step: 'Integration', desc: 'Combining holistic practices with traditional therapy' }
      ],
      servicesIncluded: [
        'Yoga & Meditation',
        'Art Therapy',
        'Nutrition Counseling',
        'Fitness Programs',
        'Mindfulness Training',
        'Acupuncture',
        'Massage Therapy'
      ],
      duration: '4-12 weeks, flexible scheduling',
      careLevel: 'Wellness-focused care with clinical support',
      testimonial: {
        text: 'The holistic approach helped me heal in ways I never expected. Yoga and art therapy gave me tools I use every day.',
        author: 'Lisa T.'
      }
    },
    'adolescent': {
      title: 'Adolescent Programs',
      tagline: 'Age-Appropriate Care for Young People',
      badge: 'ADOLESCENT',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
      description: 'Age-appropriate treatment programs designed specifically for teenagers and young adults. Our adolescent program addresses the unique developmental, social, and emotional needs of young people facing addiction or mental health challenges.',
      whoIsThisFor: [
        'Teenagers struggling with substance use or mental health',
        'Young adults needing age-appropriate treatment',
        'Families seeking specialized adolescent care',
        'Anyone aged 13-19 requiring professional support'
      ],
      whatToExpect: [
        { step: 'Family Assessment', desc: 'Comprehensive evaluation including family dynamics' },
        { step: 'Age-Appropriate Therapy', desc: 'Treatment designed for adolescent development' },
        { step: 'Educational Support', desc: 'Continuing education during treatment' },
        { step: 'Peer Group Therapy', desc: 'Support with others facing similar challenges' },
        { step: 'Family Integration', desc: 'Family therapy and parent education' }
      ],
      servicesIncluded: [
        'Age-Specific Care',
        'Educational Support',
        'Family Therapy',
        'Peer Groups',
        'Life Skills',
        'Recreation Therapy',
        'Academic Planning'
      ],
      duration: '30-60 days with ongoing family support',
      careLevel: 'Specialized adolescent medical and clinical care',
      testimonial: {
        text: 'The adolescent program understood what I was going through. Being with other teens who got it made me feel less alone.',
        author: 'Anonymous Teen'
      }
    }
  }

  const program = programs[id] || programs['substance-detox']

  return (
    <>
      <Navbar />
      
      <div className="program-detail-page">
        {/* Hero Section */}
        <section className="program-detail-hero">
          <div className="container">
            <div className="program-detail-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/programs">Programs</Link>
              <span>/</span>
              <span>{program.title}</span>
            </div>
          </div>
        </section>

        {/* Main Program Detail Section */}
        <section className="program-detail-main">
          <div className="container">
            <div className="program-detail-grid">
              {/* Left Column - Image */}
              <div className="program-detail-image-col">
                <div className="program-detail-image-wrapper">
                  <span className="program-badge">{program.badge}</span>
                  <img src={program.image} alt={program.title} className="program-detail-img" />
                  <div className="image-trust-badges">
                    <div className="trust-badge">
                      <i className="fas fa-check-circle"></i>
                      <span>Accredited Facility</span>
                    </div>
                    <div className="trust-badge">
                      <i className="fas fa-award"></i>
                      <span>Licensed Professionals</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="program-detail-content-col">
                <div className="program-detail-header">
                  <h1 className="program-detail-title">{program.title}</h1>
                  <p className="program-detail-tagline">{program.tagline}</p>
                </div>

                <div className="program-detail-description">
                  <p>{program.description}</p>
                </div>

                {/* Duration & Care Level Info Box */}
                <div className="program-info-box">
                  <div className="info-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <strong>Program Duration</strong>
                      <p>{program.duration}</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-user-md"></i>
                    <div>
                      <strong>Care Level</strong>
                      <p>{program.careLevel}</p>
                    </div>
                  </div>
                </div>

                {/* Safety & Confidentiality */}
                <div className="safety-confidentiality">
                  <div className="safety-item">
                    <i className="fas fa-lock"></i>
                    <span>100% Confidential Treatment</span>
                  </div>
                  <div className="safety-item">
                    <i className="fas fa-user-nurse"></i>
                    <span>Licensed Medical Professionals</span>
                  </div>
                  <div className="safety-item">
                    <i className="fas fa-phone-volume"></i>
                    <span>24/7 Emergency Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Is This For Section */}
        <section className="program-detail-section bg-light">
          <div className="container">
            <div className="section-header-center">
              <i className="fas fa-users-cog section-icon"></i>
              <h2>Who Is This Program For?</h2>
              <p className="section-subtitle">This program is ideal for individuals who need:</p>
            </div>
            <div className="who-is-this-for-grid">
              {program.whoIsThisFor.map((item, index) => (
                <div key={index} className="who-item">
                  <i className="fas fa-check-circle"></i>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Your Care Team Section */}
        <section className="program-detail-section care-team-section">
          <div className="container">
            <div className="section-header-center">
              <i className="fas fa-user-md section-icon"></i>
              <h2>🧑‍⚕️ Meet Your Care Team</h2>
              <p className="section-subtitle">Expert professionals dedicated to your recovery journey</p>
            </div>
            
            {loadingStaff ? (
              <div className="loading-staff">
                <i className="fas fa-spinner fa-spin"></i>
                <p>Loading care team...</p>
              </div>
            ) : careTeam.length > 0 ? (
              <div className="care-team-grid">
                {careTeam.map((member) => (
                  <div key={member._id} className="care-team-card">
                    <div className="care-team-image">
                      <img src={member.image} alt={member.name} />
                      <div className="care-team-badge">{member.role}</div>
                    </div>
                    <div className="care-team-info">
                      <h3 className="care-team-name">{member.name}</h3>
                      <p className="care-team-qualification">{member.qualification}</p>
                      <p className="care-team-specialization">
                        <i className="fas fa-stethoscope"></i>
                        {member.specialization}
                      </p>
                      <p className="care-team-experience">
                        <i className="fas fa-award"></i>
                        {member.experience}+ years experience
                      </p>
                      {member.bio && (
                        <p className="care-team-bio">{member.bio}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-staff-message">
                <i className="fas fa-users"></i>
                <p>Our dedicated care team is ready to support your recovery.</p>
              </div>
            )}
            
            <div className="care-team-cta">
              <p>
                <i className="fas fa-info-circle"></i>
                All our professionals are licensed, certified, and committed to providing compassionate, evidence-based care.
              </p>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="program-detail-section">
          <div className="container">
            <div className="section-header-center">
              <i className="fas fa-clipboard-list section-icon"></i>
              <h2>What to Expect</h2>
              <p className="section-subtitle">Your journey through our program, step by step</p>
            </div>
            <div className="what-to-expect-timeline">
              {program.whatToExpect.map((step, index) => (
                <div key={index} className="timeline-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h3>{step.step}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Included Section */}
        <section className="program-detail-section bg-light">
          <div className="container">
            <div className="section-header-center">
              <i className="fas fa-heart section-icon"></i>
              <h2>Services Included</h2>
              <p className="section-subtitle">Comprehensive care tailored to your needs</p>
            </div>
            <div className="services-included-grid">
              {program.servicesIncluded.map((service, index) => (
                <div key={index} className="service-item">
                  <i className="fas fa-check"></i>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="program-detail-section">
          <div className="container">
            <div className="testimonial-card-large">
              <i className="fas fa-quote-left quote-icon"></i>
              <p className="testimonial-text">{program.testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar-placeholder">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <strong>{program.testimonial.author}</strong>
                  <span>Program Graduate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="program-detail-cta">
          <div className="container">
            <div className="cta-content-center">
              <h2>Ready to Start Your Recovery Journey?</h2>
              <p>Our team is here to help you every step of the way. Contact us today for a confidential consultation.</p>
              <div className="cta-buttons">
                <button className="btn-cta-primary" onClick={handleInquiryClick}>
                  <i className="fas fa-phone-alt"></i>
                  Inquire About This Program
                </button>
                <button className="btn-cta-secondary" onClick={handleVisitClick}>
                  <i className="fas fa-calendar-check"></i>
                  Schedule a Visit
                </button>
              </div>
              <p className="cta-note">
                <i className="fas fa-clock"></i>
                Our team will contact you within 24 hours
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Inquiry/Visit Modal */}
      <InquiryModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        type={modalType}
        programName={program ? program.title : ''}
      />

      <Footer />
    </>
  )
}

export default ProgramDetail
