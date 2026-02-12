import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function Communities() {
  const [expandedGroup, setExpandedGroup] = useState(null)

  const supportGroups = [
    {
      id: 1,
      name: "Alcoholics Anonymous (AA) India",
      shortDescription: "The largest and most established fellowship for people recovering from alcohol addiction in India.",
      fullDescription: "Alcoholics Anonymous (AA) is a worldwide fellowship of people who have had a drinking problem. It is nonprofessional, self-supporting, multiracial, apolitical, and available almost everywhere. There are no age or education requirements. AA has been established in India since the 1960s and has groups in major cities across the country.",
      benefits: "Free meetings, peer support from people with lived experience, 12-step program proven effective for decades, anonymous and confidential, meetings available in Hindi, English, and regional languages.",
      meetings: "Daily meetings in Mumbai, Delhi, Bangalore, Chennai, Kolkata, Pune, Hyderabad and other major cities. Weekend meetings in smaller towns.",
      contact: "Website: www.aaindia.org | Helpline: +91-22-2857-5689 (Mumbai)",
      howToJoin: "Simply show up to any meeting - no registration, fees, or formalities required. Newcomers are always welcome.",
      icon: "🤝",
      logo: "AA"
    },
    {
      id: 2,
      name: "Meetup Recovery Groups",
      shortDescription: "Online and offline meetup groups for mental health, addiction recovery, and wellness across India.",
      fullDescription: "Meetup hosts various recovery-focused groups across Indian cities where people can connect, share experiences, and support each other. These groups organize regular meetings, workshops, wellness activities, and social events to help individuals in recovery build a supportive community.",
      benefits: "Easy to find local groups, diverse range of topics (addiction, mental health, wellness), social events and activities, build friendships with people in recovery, flexible meeting schedules.",
      meetings: "Various groups meeting weekly/monthly in Mumbai, Delhi, Bangalore, Pune, Hyderabad, Chennai. Check Meetup.com for schedules.",
      contact: "Website: www.meetup.com | Search for 'recovery', 'addiction support', or 'mental health' in your city",
      howToJoin: "Download the Meetup app, search for recovery groups in your city, RSVP to events, and attend meetings.",
      icon: "👥",
      logo: "MEETUP"
    },
    {
      id: 3,
      name: "Believe - Mental Health Support Group",
      shortDescription: "A supportive community focused on mental health awareness, peer support, and recovery in India.",
      fullDescription: "Believe is a mental health support initiative that creates safe spaces for individuals dealing with mental health challenges, addiction, and emotional distress. Through peer support groups, workshops, and awareness campaigns, Believe helps break the stigma around mental health in India.",
      benefits: "Mental health focused support, non-judgmental environment, regular workshops and awareness sessions, peer counseling, online and offline support options.",
      meetings: "Weekly support group meetings in major metros. Online sessions available every Tuesday and Thursday evening.",
      contact: "Website: believeindia.org | Email: support@believeindia.org | WhatsApp: +91-98XXX-XXXXX",
      howToJoin: "Register through their website or WhatsApp. Attend an orientation session before joining regular meetings.",
      icon: "💙",
      logo: "BELIEVE"
    },
    {
      id: 4,
      name: "TIPP - Therapists In Private Practice",
      shortDescription: "Network of licensed therapists and counselors providing professional addiction and mental health services.",
      fullDescription: "TIPP is a trusted directory and network of qualified mental health professionals, therapists, and addiction counselors across India. They connect individuals with licensed practitioners who specialize in addiction recovery, trauma, and mental health treatment.",
      benefits: "Access to qualified professionals, wide range of specializations, verified credentials, both online and in-person therapy options, affordable counseling services.",
      meetings: "Individual therapy sessions scheduled as per convenience. Group therapy sessions on weekends.",
      contact: "Website: tippindia.in | Helpline: +91-80-XXXX-XXXX | Email: info@tippindia.in",
      howToJoin: "Browse therapists on the website, book a consultation, and start your therapy journey.",
      icon: "🩺",
      logo: "TIPP"
    },
    {
      id: 5,
      name: "The Tribe - Wellness Community",
      shortDescription: "Holistic wellness community focusing on mental health, fitness, and recovery through community support.",
      fullDescription: "The Tribe is a wellness-focused community that brings together individuals committed to mental health, physical fitness, and recovery. Through group activities, fitness sessions, meditation, and peer support, The Tribe promotes holistic healing and sustainable recovery.",
      benefits: "Holistic approach to recovery, fitness and wellness activities, meditation and yoga sessions, social connections, outdoor activities and retreats.",
      meetings: "Weekly fitness meetups, meditation sessions, and monthly wellness retreats in Bangalore, Mumbai, Pune, and Goa.",
      contact: "Website: thetribewellness.in | Instagram: @thetribeindia | Email: hello@thetribewellness.in",
      howToJoin: "Follow them on Instagram, register for events through their website, and join community activities.",
      icon: "🌿",
      logo: "TRIBE"
    },
    {
      id: 6,
      name: "SG Support Groups India",
      shortDescription: "Comprehensive support group network offering peer counseling and community-based recovery programs.",
      fullDescription: "SG (Support Groups) India is a nationwide network of peer-led support groups focusing on addiction recovery, mental health, and life challenges. They offer structured programs, trained facilitators, and a strong community network across Indian cities.",
      benefits: "Structured recovery programs, trained facilitators, peer mentorship, family support services, aftercare and relapse prevention support.",
      meetings: "Multiple meetings weekly in Delhi NCR, Mumbai, Bangalore, Chennai, Hyderabad, Pune, and Kolkata.",
      contact: "Website: supportgroupsindia.org | National Helpline: 1800-XXX-XXXX | Email: connect@sgindia.org",
      howToJoin: "Call the helpline or visit the website to find a group near you. First meeting is free and open to all.",
      icon: "🤲",
      logo: "SG"
    },
    {
      id: 7,
      name: "Aasra - Helping People in Despair",
      shortDescription: "24/7 crisis helpline and support organization for mental health emergencies and suicide prevention.",
      fullDescription: "Aasra is one of India's oldest and most trusted crisis intervention centers. Established in 1991, Aasra provides 24/7 emotional support through phone counseling, helping individuals in mental health crises, dealing with suicidal thoughts, or facing overwhelming life challenges.",
      benefits: "24/7 availability, confidential support, trained crisis counselors, multilingual support, immediate help during emergencies, referrals to mental health professionals.",
      meetings: "Phone counseling available 24/7. In-person counseling by appointment in Mumbai.",
      contact: "24/7 Helpline: +91-22-2754-6669 | Website: aasra.info | Email: aasrahelpline@yahoo.com",
      howToJoin: "Simply call the helpline anytime - no registration needed. All calls are confidential.",
      icon: "☎️",
      logo: "AASRA"
    },
    {
      id: 8,
      name: "Narcotics Anonymous (NA) India",
      shortDescription: "A fellowship for people recovering from drug addiction, offering hope and support through shared experiences.",
      fullDescription: "Narcotics Anonymous India is part of the worldwide NA fellowship. It's a community-based organization of recovering addicts who meet regularly to help each other stay clean. The program is based on the 12 steps adapted from AA but focuses on addiction to all drugs.",
      benefits: "Judgment-free environment, learn from others' recovery experiences, develop coping strategies, build a sober support network, available in multiple Indian languages.",
      meetings: "Regular meetings in Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, Pune, and growing presence in tier-2 cities.",
      contact: "Website: www.naindia.org | Email: info@naindia.org | Phone: +91-11-4165-6346",
      howToJoin: "Attend any open meeting - check the website for schedules. All you need is the desire to stop using drugs.",
      icon: "💪",
      logo: "NA"
    },
    {
      id: 9,
      name: "National Drug & Alcohol Facts Week (NDAFW) India",
      shortDescription: "Annual awareness campaign educating youth and communities about substance abuse facts and prevention.",
      fullDescription: "NDAFW India is part of a global initiative that brings together scientists, educators, healthcare providers, and community leaders to educate teenagers and young adults about the science behind drug use and addiction. They organize events, workshops, and awareness campaigns across India.",
      benefits: "Science-based education, youth-focused programs, free educational resources, school and college workshops, prevention-focused approach.",
      meetings: "Annual awareness week events in schools, colleges, and communities. Year-round workshops available.",
      contact: "Website: ndafwindia.org | Email: info@ndafwindia.org | Helpline: 1800-XXX-XXXX",
      howToJoin: "Visit their website during NDAFW week, participate in local events, or organize workshops in your institution.",
      icon: "📚",
      logo: "NDAFW"
    },
    {
      id: 3,
      name: "Al-Anon Family Groups India",
      shortDescription: "Support for families and friends of alcoholics, helping them cope with the effects of someone else's drinking.",
      fullDescription: "Al-Anon is a mutual support group for people whose lives have been affected by someone else's drinking. In India, Al-Anon provides a safe space for families to share experiences, strength, and hope, learning how to cope with the family disease of alcoholism.",
      benefits: "Learn you're not alone, understand alcoholism as a disease, develop healthy boundaries, focus on your own recovery, connect with others facing similar challenges.",
      meetings: "Meetings in major metro cities including Mumbai, Delhi, Bangalore, Kolkata, Chennai. Family-focused sessions available.",
      contact: "Website: al-anonindia.org | Mumbai: +91-22-2659-6668 | Delhi: +91-11-2656-4659",
      howToJoin: "Anyone concerned about someone's drinking is welcome. Find a meeting near you and attend - no appointments needed.",
      icon: "❤️"
    },
    {
      id: 4,
      name: "SMART Recovery India",
      shortDescription: "Science-based addiction recovery program using cognitive behavioral therapy and self-empowerment techniques.",
      fullDescription: "SMART Recovery (Self-Management and Recovery Training) offers a secular, science-based alternative to 12-step programs. It uses cognitive behavioral therapy (CBT) techniques to help people recover from all types of addictive behaviors. While newer in India, it's growing rapidly among professionals and those seeking evidence-based approaches.",
      benefits: "Based on proven scientific methods, teaches practical coping tools, focuses on self-empowerment rather than powerlessness, online meetings available, works alongside other treatments.",
      meetings: "Online meetings daily, in-person groups in Mumbai, Bangalore, and Delhi. Growing network of certified facilitators.",
      contact: "Website: smartrecoveryindia.org | Email: india@smartrecovery.org | WhatsApp: +91-98XXX-XXXXX",
      howToJoin: "Register on the website for online meetings or find in-person meetings in your city. First session is always free.",
      icon: "🧠"
    }
  ]

  const counselingServices = [
    {
      name: "National Drug Dependence Treatment Centre (NDDTC)",
      location: "AIIMS, New Delhi",
      description: "Premier national center for addiction treatment and research. Offers outpatient services, counseling, and family therapy.",
      contact: "+91-11-2659-3404"
    },
    {
      name: "NIMHANS Centre for Addiction Medicine",
      location: "Bangalore, Karnataka",
      description: "Leading institute for mental health and addiction treatment. Comprehensive services including detox, therapy, and aftercare.",
      contact: "+91-80-2699-5004"
    },
    {
      name: "T.T. Ranganathan Clinical Research Foundation",
      location: "Chennai, Tamil Nadu",
      description: "Pioneer in addiction treatment in India. Offers residential and outpatient programs, family counseling.",
      contact: "+91-44-2496-8862"
    },
    {
      name: "Society for Promotion of Youth and Masses (SPYM)",
      location: "New Delhi",
      description: "NGO providing free counseling, treatment referrals, and community-based rehabilitation services.",
      contact: "+91-11-2338-0000"
    }
  ]

  return (
    <>
      <Navbar />
      
      <div className="communities-page">
        {/* Hero Section */}
        <section className="communities-hero">
          <div className="container">
            <h1 className="page-title">Support Groups & Communities</h1>
            <p className="page-description">
              You don't have to recover alone. Join one of these supportive communities where people understand what you're going through and can help you on your journey to lasting recovery. Whether you prefer faith-based, secular, online, or in-person meetings, there's a community here for you.
            </p>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="why-join-section">
          <div className="container">
            <h2 className="section-title-center">Why Join a Support Group?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">👥</div>
                <h3>You're Not Alone</h3>
                <p>Connect with others who truly understand addiction and recovery</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💪</div>
                <h3>Learn & Grow</h3>
                <p>Learn coping strategies from people with lived experience</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🛡️</div>
                <h3>Accountability</h3>
                <p>Stay accountable and motivated with regular meetings and support</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🌟</div>
                <h3>Hope & Inspiration</h3>
                <p>See that recovery is possible by meeting people in long-term sobriety</p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Groups List */}
        <section className="support-groups-section">
          <div className="container">
            <h2 className="section-title-center">Find Your Community</h2>
            <p className="section-subtitle-center">
              Click on any group below to learn more about their approach, meeting times, and how to join.
            </p>

            <div className="support-groups-list">
              {supportGroups.map((group) => (
                <div key={group.id} className="support-group-card">
                  <div 
                    className="group-header"
                    onClick={() => setExpandedGroup(expandedGroup === group.id ? null : group.id)}
                  >
                    <div className="group-icon">{group.icon}</div>
                    <div className="group-title-section">
                      <h3>{group.name}</h3>
                      <p className="group-short">{group.shortDescription}</p>
                    </div>
                    <span className="expand-icon">{expandedGroup === group.id ? '−' : '+'}</span>
                  </div>

                  {expandedGroup === group.id && (
                    <div className="group-details">
                      <div className="detail-section">
                        <h4>About</h4>
                        <p>{group.fullDescription}</p>
                      </div>

                      <div className="detail-section">
                        <h4>Benefits</h4>
                        <p>{group.benefits}</p>
                      </div>

                      <div className="detail-section">
                        <h4>Meetings & Schedule</h4>
                        <p>{group.meetings}</p>
                      </div>

                      <div className="detail-section">
                        <h4>Contact Information</h4>
                        <p>{group.contact}</p>
                      </div>

                      <div className="detail-section">
                        <h4>How to Join</h4>
                        <p>{group.howToJoin}</p>
                      </div>

                      <button 
                        onClick={() => setExpandedGroup(null)}
                        className="btn-close-details"
                      >
                        Close Details
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Services */}
        <section className="counseling-section">
          <div className="container">
            <h2 className="section-title-center">Professional Counseling Services</h2>
            <p className="section-subtitle-center">
              Looking for professional help? These trusted organizations provide expert counseling and treatment.
            </p>

            <div className="counseling-grid">
              {counselingServices.map((service, index) => (
                <div key={index} className="counseling-card">
                  <h3>{service.name}</h3>
                  <div className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    {service.location}
                  </div>
                  <p>{service.description}</p>
                  <div className="contact-info">
                    <i className="fas fa-phone"></i>
                    <a href={`tel:${service.contact}`}>{service.contact}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Help */}
        <section className="emergency-help-section">
          <div className="container">
            <div className="emergency-box">
              <h2>Need Immediate Help?</h2>
              <p>If you're in crisis or need urgent support, don't hesitate to reach out.</p>
              <div className="emergency-contacts">
                <div className="emergency-item">
                  <h3>NIMHANS Helpline</h3>
                  <a href="tel:08046110007" className="emergency-number">080-4611-0007</a>
                  <p>24/7 Mental Health & Addiction Support</p>
                </div>
                <div className="emergency-item">
                  <h3>Vandrevala Foundation</h3>
                  <a href="tel:18602662345" className="emergency-number">1860-266-2345</a>
                  <p>Free 24/7 Crisis Helpline</p>
                </div>
                <div className="emergency-item">
                  <h3>iCall Helpline</h3>
                  <a href="tel:9152987821" className="emergency-number">91529-87821</a>
                  <p>Mon-Sat, 10 AM - 8 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="communities-cta">
          <div className="container">
            <h2>Ready to Take the First Step?</h2>
            <p>Joining a support group is one of the best decisions you can make for your recovery. Most groups welcome newcomers with open arms.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Help Finding a Group</a>
              <a href="/" className="btn btn-secondary">Browse Treatment Centers</a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Communities
