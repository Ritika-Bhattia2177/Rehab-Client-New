import React from 'react'
import './ProgramsSEOContent.css'

const ProgramsSEOContent = () => {
  return (
    <section className="programs-seo-section">
      <div className="container">
        {/* H1 - Main Heading */}
        <h1 className="programs-seo-h1">
          Comprehensive Addiction Treatment Programs in India
        </h1>

        {/* Introduction Paragraph */}
        <div className="programs-intro">
          <p className="lead-text">
            At HopePath Recovery, we offer evidence-based <strong>substance abuse treatment</strong> programs 
            designed to address every aspect of addiction. Our comprehensive services include specialized 
            <strong> inpatient rehabilitation program</strong> with 24/7 medical care, flexible <strong>outpatient 
            rehab services</strong> for continued support, and our premier <strong>medical detox center in India</strong> 
            for safe withdrawal management. Each program integrates professional <strong>therapy for addiction</strong>, 
            proven <strong>relapse prevention program</strong> strategies, and <strong>holistic recovery treatment</strong> 
            approaches. Our <strong>detox program for addiction</strong> ensures medically supervised care throughout 
            your healing journey.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="programs-grid">
          
          {/* Program 1: Inpatient Rehabilitation */}
          <div className="program-card featured">
            <div className="program-icon">
              <i className="fas fa-hospital"></i>
            </div>
            <h2 className="program-h2">
              Inpatient Rehabilitation Program
            </h2>
            <div className="program-badge">Residential Treatment</div>
            <p className="program-description">
              Our premier <strong>inpatient rehabilitation program</strong> provides intensive, 24/7 residential 
              care in a secure and supportive environment. This comprehensive program combines medical supervision, 
              individual and group <strong>therapy for addiction</strong>, and structured daily activities designed 
              to promote healing and recovery. Patients benefit from round-the-clock access to medical professionals, 
              psychiatrists, and counselors who specialize in <strong>substance abuse treatment</strong>. The 
              immersive nature of inpatient care allows individuals to focus entirely on recovery, free from 
              external triggers and distractions. Our program includes detoxification support, medication 
              management, behavioral therapy, family counseling, and aftercare planning. Typical duration ranges 
              from 30 to 90 days, customized to each patient's unique needs and progress.
            </p>
            <div className="program-features">
              <h3>Program Includes:</h3>
              <ul>
                <li><i className="fas fa-check-circle"></i> 24/7 medical supervision and support</li>
                <li><i className="fas fa-check-circle"></i> Private, comfortable accommodations</li>
                <li><i className="fas fa-check-circle"></i> Individual and group therapy sessions</li>
                <li><i className="fas fa-check-circle"></i> Medication-assisted treatment (MAT)</li>
                <li><i className="fas fa-check-circle"></i> Nutritious meals and fitness programs</li>
                <li><i className="fas fa-check-circle"></i> Family therapy and education</li>
              </ul>
            </div>
          </div>

          {/* Program 2: Outpatient Services */}
          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-walking"></i>
            </div>
            <h2 className="program-h2">
              Outpatient Rehab Services
            </h2>
            <div className="program-badge">Flexible Treatment</div>
            <p className="program-description">
              Our flexible <strong>outpatient rehab services</strong> provide professional <strong>substance abuse 
              treatment</strong> while allowing patients to maintain their daily responsibilities. This program 
              is ideal for individuals with strong support systems, those transitioning from inpatient care, or 
              those with less severe addiction issues. Patients attend scheduled therapy sessions, counseling 
              appointments, and support groups while living at home. Our <strong>outpatient rehab services</strong> 
              include individual counseling, group therapy, family sessions, medication management, and ongoing 
              monitoring. This approach offers the flexibility to continue work or education while receiving 
              quality care. Programs typically involve 10-20 hours per week of structured treatment, gradually 
              decreasing as patients demonstrate progress and stability in their recovery journey.
            </p>
            <div className="program-features">
              <h3>Service Options:</h3>
              <ul>
                <li><i className="fas fa-check-circle"></i> Standard outpatient programs (9-20 hours/week)</li>
                <li><i className="fas fa-check-circle"></i> Intensive outpatient programs (IOP)</li>
                <li><i className="fas fa-check-circle"></i> Evening and weekend sessions available</li>
                <li><i className="fas fa-check-circle"></i> Telehealth options for remote areas</li>
                <li><i className="fas fa-check-circle"></i> Ongoing support and monitoring</li>
                <li><i className="fas fa-check-circle"></i> Aftercare and alumni programs</li>
              </ul>
            </div>
          </div>

          {/* Program 3: Medical Detox */}
          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-stethoscope"></i>
            </div>
            <h2 className="program-h2">
              Medical Detox Center in India
            </h2>
            <div className="program-badge">Medically Supervised</div>
            <p className="program-description">
              Our premier <strong>medical detox center in India</strong> offers safe, comfortable withdrawal 
              management with 24/7 medical supervision. The <strong>detox program for addiction</strong> is 
              the critical first step in recovery, addressing physical dependence under expert medical care. 
              Our physicians and nurses monitor vital signs, manage withdrawal symptoms with appropriate 
              medications, and ensure patient safety throughout the detoxification process. This medically 
              supervised approach significantly reduces the discomfort and risks associated with withdrawal 
              from alcohol, opioids, benzodiazepines, and other substances. The duration varies based on 
              substance type and individual factors, typically lasting 5-10 days. Upon completion, patients 
              transition seamlessly into our comprehensive treatment programs for continued recovery support.
            </p>
            <div className="program-features">
              <h3>Detox Services Include:</h3>
              <ul>
                <li><i className="fas fa-check-circle"></i> Medical assessment and evaluation</li>
                <li><i className="fas fa-check-circle"></i> 24/7 nursing care and monitoring</li>
                <li><i className="fas fa-check-circle"></i> Medication-assisted detoxification</li>
                <li><i className="fas fa-check-circle"></i> Symptom management and comfort care</li>
                <li><i className="fas fa-check-circle"></i> Psychiatric evaluation and support</li>
                <li><i className="fas fa-check-circle"></i> Transition planning to treatment</li>
              </ul>
            </div>
          </div>

          {/* Program 4: Relapse Prevention */}
          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h2 className="program-h2">
              Relapse Prevention Program
            </h2>
            <div className="program-badge">Long-term Support</div>
            <p className="program-description">
              Our comprehensive <strong>relapse prevention program</strong> equips individuals with the tools, 
              strategies, and support needed to maintain long-term sobriety. This specialized <strong>substance 
              abuse treatment</strong> component focuses on identifying triggers, developing coping mechanisms, 
              and building resilience against relapse risks. Through evidence-based techniques including cognitive 
              behavioral therapy (CBT), mindfulness practices, and stress management training, patients learn to 
              recognize warning signs and respond effectively. The program includes personalized relapse prevention 
              planning, ongoing counseling, peer support groups, and 24/7 crisis intervention access. We emphasize 
              lifestyle modifications, healthy relationship building, and establishing strong support networks to 
              ensure sustained recovery success.
            </p>
            <div className="program-features">
              <h3>Prevention Strategies:</h3>
              <ul>
                <li><i className="fas fa-check-circle"></i> Trigger identification and management</li>
                <li><i className="fas fa-check-circle"></i> Cognitive behavioral therapy techniques</li>
                <li><i className="fas fa-check-circle"></i> Stress management and coping skills</li>
                <li><i className="fas fa-check-circle"></i> Peer support and accountability groups</li>
                <li><i className="fas fa-check-circle"></i> Emergency response protocols</li>
                <li><i className="fas fa-check-circle"></i> Ongoing counseling and check-ins</li>
              </ul>
            </div>
          </div>

          {/* Program 5: Therapy Services */}
          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h2 className="program-h2">
              Professional Therapy for Addiction
            </h2>
            <div className="program-badge">Evidence-Based</div>
            <p className="program-description">
              We offer specialized <strong>therapy for addiction</strong> delivered by licensed mental health 
              professionals with expertise in <strong>substance abuse treatment</strong>. Our therapeutic 
              approaches address the psychological, emotional, and behavioral aspects of addiction. Treatment 
              modalities include Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), 
              Motivational Interviewing, trauma-informed care, and family systems therapy. Individual sessions 
              provide personalized attention to underlying issues, while group therapy offers peer support and 
              shared learning experiences. We also address co-occurring mental health disorders such as depression, 
              anxiety, PTSD, and bipolar disorder through integrated dual diagnosis treatment. All therapists are 
              certified in addiction counseling and committed to evidence-based practices that produce lasting results.
            </p>
            <div className="program-features">
              <h3>Therapy Modalities:</h3>
              <ul>
                <li><i className="fas fa-check-circle"></i> Cognitive Behavioral Therapy (CBT)</li>
                <li><i className="fas fa-check-circle"></i> Dialectical Behavior Therapy (DBT)</li>
                <li><i className="fas fa-check-circle"></i> Individual counseling sessions</li>
                <li><i className="fas fa-check-circle"></i> Group therapy and support groups</li>
                <li><i className="fas fa-check-circle"></i> Family therapy and education</li>
                <li><i className="fas fa-check-circle"></i> Trauma-informed care approaches</li>
              </ul>
            </div>
          </div>

          {/* Program 6: Holistic Treatment */}
          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-spa"></i>
            </div>
            <h2 className="program-h2">
              Holistic Recovery Treatment
            </h2>
            <div className="program-badge">Mind-Body-Spirit</div>
            <p className="program-description">
              Our innovative <strong>holistic recovery treatment</strong> program integrates complementary 
              therapies with traditional <strong>substance abuse treatment</strong> to address the whole person - 
              mind, body, and spirit. This comprehensive approach recognizes that lasting recovery requires healing 
              on multiple levels. Our holistic services include yoga and meditation for stress reduction and 
              mindfulness, acupuncture for managing withdrawal symptoms and cravings, nutritional counseling and 
              meal planning for physical restoration, fitness programs and outdoor activities for overall wellness, 
              art and music therapy for emotional expression, and massage therapy for relaxation and healing. These 
              evidence-supported complementary treatments enhance traditional therapies, reduce anxiety and depression, 
              improve sleep quality, and promote overall well-being throughout the recovery journey.
            </p>
            <div className="program-features">
              <h3>Holistic Services:</h3>
              <ul>
                <li><i className="fas fa-check-circle"></i> Yoga and meditation classes</li>
                <li><i className="fas fa-check-circle"></i> Acupuncture and traditional healing</li>
                <li><i className="fas fa-check-circle"></i> Nutritional counseling and meal plans</li>
                <li><i className="fas fa-check-circle"></i> Fitness and outdoor activities</li>
                <li><i className="fas fa-check-circle"></i> Art therapy and creative expression</li>
                <li><i className="fas fa-check-circle"></i> Mindfulness and stress management</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Why Choose Our Programs */}
        <div className="programs-why-choose">
          <h2 className="section-title">
            <i className="fas fa-award"></i>
            Why Choose Our Treatment Programs
          </h2>
          <div className="why-choose-grid">
            <div className="why-card">
              <i className="fas fa-user-md"></i>
              <h3>Expert Medical Team</h3>
              <p>Board-certified physicians, psychiatrists, and licensed therapists specializing in addiction medicine.</p>
            </div>
            <div className="why-card">
              <i className="fas fa-certificate"></i>
              <h3>Accredited Facility</h3>
              <p>Nationally accredited treatment center meeting the highest standards of care and safety.</p>
            </div>
            <div className="why-card">
              <i className="fas fa-chart-line"></i>
              <h3>Proven Success Rates</h3>
              <p>Evidence-based treatment methodologies with documented high success and low relapse rates.</p>
            </div>
            <div className="why-card">
              <i className="fas fa-users"></i>
              <h3>Personalized Care</h3>
              <p>Individualized treatment plans tailored to your specific needs, goals, and circumstances.</p>
            </div>
            <div className="why-card">
              <i className="fas fa-heart"></i>
              <h3>Compassionate Support</h3>
              <p>Caring staff providing emotional support and encouragement throughout your recovery journey.</p>
            </div>
            <div className="why-card">
              <i className="fas fa-hand-holding-heart"></i>
              <h3>Aftercare Services</h3>
              <p>Comprehensive continuing care and alumni support to ensure long-term recovery success.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="programs-cta">
          <div className="cta-content">
            <h2>Start Your Recovery Journey Today</h2>
            <p>
              Take the first step toward lasting recovery. Our admissions team is available 24/7 to answer 
              your questions, verify insurance, and help you choose the right program for your needs.
            </p>
            <div className="cta-buttons">
              <a href="tel:+911800XXXXXX" className="cta-btn primary">
                <i className="fas fa-phone"></i>
                Call Now: 1800-XXX-XXXX
              </a>
              <a href="#contact" className="cta-btn secondary">
                <i className="fas fa-envelope"></i>
                Request Information
              </a>
              <a href="#insurance" className="cta-btn tertiary">
                <i className="fas fa-shield-alt"></i>
                Verify Insurance
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProgramsSEOContent
