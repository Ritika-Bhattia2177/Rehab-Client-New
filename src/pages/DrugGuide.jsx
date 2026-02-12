import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function DrugGuide() {
  const [currentStimulant, setCurrentStimulant] = useState(0)

  const [expandedOpiate, setExpandedOpiate] = useState(null)
  const [expandedHallucino, setExpandedHallucino] = useState(null)
  const [expandedDepressant, setExpandedDepressant] = useState(null)

  const opiates = [
    {
      name: "Brown Sugar",
      shortDescription: "A crude form of heroin, brown sugar is highly addictive and affects the brain's reward system, leading to dependency.",
      fullDescription: "Brown Sugar is a crude, impure form of heroin that has become a major substance abuse problem in India. It's called 'brown sugar' due to its brown color and granulated appearance, resembling actual brown sugar. This drug is particularly dangerous because it's often mixed with other substances like chalk powder, zinc oxide, or even strychnine.",
      effects: "Creates intense euphoria followed by drowsiness, affects breathing, causes severe constipation, and leads to rapid physical dependency.",
      dangers: "Extremely high risk of overdose, respiratory failure, infectious diseases (HIV, Hepatitis), collapsed veins, liver and kidney disease, and death.",
      signs: "Constricted pupils, drowsiness, slurred speech, track marks on arms, weight loss, neglecting personal hygiene, and social withdrawal."
    },
    {
      name: "Heroin",
      shortDescription: "One of the most dangerous opioids, heroin creates intense euphoria followed by severe physical and mental health consequences.",
      fullDescription: "Heroin is a highly addictive opioid drug synthesized from morphine, which is extracted from opium poppy plants. In India, heroin abuse has reached epidemic proportions, affecting individuals across all socioeconomic backgrounds. The drug can be injected, snorted, or smoked.",
      effects: "Rush of euphoria, dry mouth, warm flushing of skin, heavy feeling in extremities, nausea, severe itching, clouded mental functioning, and slowed breathing.",
      dangers: "Fatal overdose, collapsed veins, infection of heart lining and valves, liver and kidney disease, pulmonary complications, mental health disorders, and permanent organ damage.",
      signs: "Needle marks, wearing long sleeves even in hot weather, sudden weight loss, runny nose, drowsiness, withdrawal from family and friends, and financial problems."
    },
    {
      name: "OxyContin",
      shortDescription: "A prescription painkiller that's frequently abused, leading to addiction and overdose deaths across India.",
      fullDescription: "OxyContin (Oxycodone) is a powerful prescription opioid painkiller that has become widely abused in India. Originally intended for severe pain management, it has become a gateway drug, with many users transitioning to heroin when unable to access prescription pills.",
      effects: "Pain relief, euphoria, relaxation, drowsiness, confusion, slowed breathing, and physical dependence even when taken as prescribed.",
      dangers: "High risk of addiction, respiratory depression, overdose death, liver damage when combined with alcohol, and severe withdrawal symptoms.",
      signs: "Taking more than prescribed, doctor shopping, mood swings, decreased coordination, sleep problems, and neglecting responsibilities."
    }
  ]

  const hallucinogens = [
    {
      name: "LSD",
      shortDescription: "Known as the world's most powerful hallucinogen, LSD is a potent mood-changing chemical that causes terrifying hallucinations.",
      fullDescription: "LSD (Lysergic Acid Diethylamide), also called acid, blotter, or dots, is one of the most potent hallucinogenic drugs. It's typically sold as small squares of paper with designs on them, or as liquid drops. LSD profoundly alters perception, mood, and cognitive processes.",
      effects: "Distorted sensory perceptions, visual and auditory hallucinations, altered sense of time, synesthesia (mixing of senses), intense emotions, and distorted sense of self.",
      dangers: "Bad trips lasting days, psychosis, HPPD (flashbacks), impaired judgment leading to accidents, aggression, severe anxiety, paranoia, and suicidal thoughts.",
      signs: "Dilated pupils, elevated body temperature, increased heart rate, loss of appetite, tremors, bizarre behavior, and claiming to see or hear things others don't.",
      icon: "→"
    },
    {
      name: "Marijuana",
      shortDescription: "Cannabis or marijuana affects cognitive function and can lead to dependency, especially among young users.",
      fullDescription: "Marijuana (Cannabis) is the most commonly used illicit drug in India. While often perceived as harmless, regular marijuana use, especially among adolescents, can have significant negative effects on brain development, mental health, and overall functioning.",
      effects: "Altered senses, changes in mood, impaired body movement, difficulty with thinking and problem-solving, impaired memory, and altered sense of time.",
      dangers: "Addiction (especially in young users), impaired brain development, breathing problems, increased heart rate, mental health issues (anxiety, depression, psychosis), and impaired driving.",
      signs: "Red eyes, increased appetite, dry mouth, slowed reaction time, paranoia, lack of motivation, poor academic or work performance, and strong smell of marijuana.",
      icon: "→"
    }
  ]

  const stimulants = [
    {
      title: "Cocaine",
      shortDescription: "A powerful stimulant extracted from coca leaves, cocaine creates intense but short-lived euphoria.",
      fullDescription: "Cocaine is a highly addictive stimulant drug that comes from the coca plant native to South America. In India, cocaine abuse is increasing, particularly among urban professionals and party-goers. It can be snorted as a powder, rubbed into gums, or dissolved and injected.",
      effects: "Extreme happiness and energy, mental alertness, hypersensitivity to sight, sound, and touch, paranoia, decreased appetite, and increased body temperature and heart rate.",
      dangers: "Heart attacks, strokes, seizures, sudden death, severe nasal damage from snorting, bowel decay from decreased blood flow, risk of HIV and hepatitis from needle use, and intense psychological addiction.",
      signs: "Frequent sniffing or runny nose, nosebleeds, dilated pupils, white powder around nostrils, hyperactivity, excessive talking, financial problems, and erratic behavior.",
      category: "Stimulants"
    },
    {
      title: "Methamphetamine (Crystal Meth)",
      shortDescription: "Meth is an extremely addictive stimulant that causes devastating physical and mental health effects.",
      fullDescription: "Methamphetamine, commonly known as meth or ice, is a powerful, highly addictive stimulant that affects the central nervous system. It appears as a white, odorless, bitter-tasting crystalline powder. The drug causes a rapid and intense high, leading users to take repeated doses.",
      effects: "Intense euphoria, increased activity and wakefulness, decreased appetite, rapid breathing, irregular heartbeat, increased body temperature, and extreme confidence.",
      dangers: "Severe dental problems ('meth mouth'), intense itching leading to skin sores, violent behavior, psychosis including paranoia and hallucinations, brain damage, malnutrition, and organ failure.",
      signs: "Extreme weight loss, severe dental decay, skin sores and scabs, dilated pupils, erratic sleeping patterns, jerky movements, facial tics, and paranoid behavior.",
      category: "Stimulants"
    },
    {
      title: "Nicotine & Tobacco",
      shortDescription: "While legal, nicotine is highly addictive and tobacco use is the leading cause of preventable deaths in India.",
      fullDescription: "Nicotine is the addictive drug in tobacco, cigarettes, gutka, and various smokeless tobacco products widely used across India. Despite being legal, tobacco kills more people than alcohol, AIDS, car accidents, illegal drugs, murders, and suicides combined in India.",
      effects: "Increased alertness, pleasure and mood enhancement, reduced anxiety and tension, suppressed appetite, and physical dependency developing quickly.",
      dangers: "Cancer (lung, mouth, throat, stomach, pancreas), heart disease, stroke, COPD, emphysema, reproductive problems, premature aging, and secondhand smoke dangers to others.",
      signs: "Smell of smoke on clothes and breath, stained teeth and fingers, chronic cough, decreased stamina, increased breathing rate, and inability to quit despite health problems.",
      category: "Stimulants"
    }
  ]

  const depressants = [
    {
      title: "Alcohol",
      shortDescription: "The most widely abused depressant in India, alcohol causes more deaths and health problems than any other drug.",
      fullDescription: "Alcohol is a central nervous system depressant that is legal but causes devastating health, social, and economic impacts across India. It's involved in countless accidents, domestic violence cases, and chronic health conditions. Alcohol dependency can develop gradually and affects all socioeconomic groups.",
      effects: "Lowered inhibitions, impaired judgment, slurred speech, slowed reflexes, impaired memory and concentration, mood swings, and poor coordination.",
      dangers: "Liver cirrhosis, pancreatitis, heart disease, cancer, brain damage, malnutrition, accidents and injuries, violence, broken relationships, and fatal overdose.",
      signs: "Drinking alone or in secret, needing more alcohol to feel effects, withdrawal symptoms (shaking, sweating, anxiety), neglecting responsibilities, legal problems, and continued drinking despite problems.",
      image: true
    },
    {
      title: "Benzodiazepines",
      shortDescription: "Prescription sedatives like Valium and Xanax that are widely misused for their calming effects.",
      fullDescription: "Benzodiazepines are prescription medications used to treat anxiety, insomnia, and seizures. Common names include Alprazolam (Xanax), Diazepam (Valium), and Lorazepam (Ativan). These drugs are highly addictive and dangerous when misused or combined with other substances.",
      effects: "Drowsiness, dizziness, confusion, impaired coordination and memory, slurred speech, shallow breathing, and reduced anxiety.",
      dangers: "Fatal overdose (especially with alcohol), severe withdrawal seizures, accidents due to impairment, cognitive decline, respiratory depression, and psychological dependency.",
      signs: "Taking more than prescribed, doctor shopping, drowsiness, confusion, poor coordination, withdrawal symptoms when stopping, and combining with alcohol.",
      icon: "→"
    },
    {
      title: "Inhalants (Whitener, Glue)",
      shortDescription: "Cheap and easily accessible substances that are inhaled for a brief high, popular among street children and adolescents.",
      fullDescription: "Inhalants include correction fluid (whitener), glue, paint thinners, and other household products containing volatile substances. These are particularly abused by economically disadvantaged youth due to their low cost and easy availability. The effects are immediate but extremely dangerous.",
      effects: "Brief euphoria, dizziness, lightheadedness, hallucinations, slurred speech, lack of coordination, and loss of consciousness.",
      dangers: "Sudden sniffing death syndrome (heart failure), brain damage, hearing loss, liver and kidney damage, bone marrow damage, oxygen depletion, and suffocation.",
      signs: "Chemical smell on breath or clothes, paint or stains on face or hands, slurred speech, drunk appearance without alcohol, hidden chemical containers, and sores around mouth.",
      icon: "→"
    }
  ]

  const nextStimulant = () => {
    setCurrentStimulant((prev) => (prev + 1) % stimulants.length)
  }

  const prevStimulant = () => {
    setCurrentStimulant((prev) => (prev - 1 + stimulants.length) % stimulants.length)
  }

  return (
    <>
      <Navbar />
      
      <div className="drug-guide-page">
        {/* Hero Section */}
        <section className="drug-guide-hero">
          <div className="container">
            <h1 className="page-title">Common Drugs in India</h1>
            <p className="page-description">
              More Indians abuse addictive substances than ever before; the problem has gone from a personal to a national issue. And as addictive substances become more available in India, more and more of our people suffer addiction and dependence on drugs and alcohol. This Drug Guide will give you a snapshot of commonly abused Indian drugs. Read more to discover the effects, dangers, and background of over 15 dangerous drugs.
            </p>
          </div>
        </section>

        {/* Opiates Section */}
        <section className="drug-category-section opiates-section">
          <div className="container">
            <div className="category-grid">
              <div className="category-info">
                <h2 className="category-title">OPIATES</h2>
                <p className="category-description">
                  Opiates affect our emotion control centers. The brain, nervous system, and limbic system are all endangered.
                </p>
                
                <div className="drug-list">
                  {opiates.map((drug, index) => (
                    <div key={index} className="drug-item-expandable">
                      <div 
                        className="drug-item-header"
                        onClick={() => setExpandedOpiate(expandedOpiate === index ? null : index)}
                        style={{ cursor: 'pointer' }}
                      >
                        <h3>{drug.name}</h3>
                        <span className="arrow-icon">{expandedOpiate === index ? '↓' : '↗'}</span>
                      </div>
                      
                      {expandedOpiate === index && (
                        <div className="drug-details">
                          <p className="drug-full-desc">{drug.fullDescription}</p>
                          
                          <div className="drug-info-section">
                            <h4>Effects:</h4>
                            <p>{drug.effects}</p>
                          </div>
                          
                          <div className="drug-info-section">
                            <h4>Dangers:</h4>
                            <p>{drug.dangers}</p>
                          </div>
                          
                          <div className="drug-info-section">
                            <h4>Warning Signs:</h4>
                            <p>{drug.signs}</p>
                          </div>
                          
                          <button 
                            onClick={() => setExpandedOpiate(null)} 
                            className="btn-close-details"
                          >
                            Show Less
                          </button>
                        </div>
                      )}
                      
                      {expandedOpiate !== index && (
                        <p className="drug-short-desc">{drug.shortDescription}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="category-image">
                <img 
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop" 
                  alt="Opiates" 
                  className="drug-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hallucinogens Section */}
        <section className="drug-category-section hallucinogens-section">
          <div className="container">
            <h2 className="section-title-center">Hallucinogens</h2>
            <p className="section-subtitle-center">
              Hallucinogen drugs distort the mind, create false sensory experiences and distort your perceptions of reality.
            </p>

            <div className="hallucinogens-grid">
              <div className="hallucino-image">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&q=80" 
                  alt="Hallucinogens - Psychedelic substances" 
                  className="psychedelic-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&h=600&fit=crop&q=80"
                  }}
                />
              </div>

              <div className="hallucino-list">
                {hallucinogens.map((drug, index) => (
                  <div key={index} className="hallucino-card-expandable">
                    <div 
                      className="card-header"
                      onClick={() => setExpandedHallucino(expandedHallucino === index ? null : index)}
                      style={{ cursor: 'pointer' }}
                    >
                      <h3>{drug.name}</h3>
                      <span className="card-icon">{expandedHallucino === index ? '↓' : drug.icon}</span>
                    </div>
                    
                    {expandedHallucino !== index && (
                      <p className="drug-short-desc">{drug.shortDescription}</p>
                    )}
                    
                    {expandedHallucino === index && (
                      <div className="drug-details">
                        <p className="drug-full-desc">{drug.fullDescription}</p>
                        
                        <div className="drug-info-section">
                          <h4>Effects:</h4>
                          <p>{drug.effects}</p>
                        </div>
                        
                        <div className="drug-info-section">
                          <h4>Dangers:</h4>
                          <p>{drug.dangers}</p>
                        </div>
                        
                        <div className="drug-info-section">
                          <h4>Warning Signs:</h4>
                          <p>{drug.signs}</p>
                        </div>
                        
                        <button 
                          onClick={(e) => {
                            e.stopPropagation()
                            setExpandedHallucino(null)
                          }} 
                          className="btn-close-details"
                        >
                          Show Less
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stimulants Section */}
        <section className="drug-category-section stimulants-section">
          <div className="container">
            <div className="stimulants-header">
              <img 
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&h=400&fit=crop" 
                alt="Stimulants Banner" 
                className="stimulants-banner"
              />
              <div className="banner-overlay">
                <h2 className="banner-title">STIMULANTS</h2>
              </div>
            </div>

            <h3 className="section-title-center" style={{marginTop: '60px'}}>Stimulants</h3>
            
            <div className="stimulants-carousel">
              <div className="carousel-content">
                <div className="carousel-info">
                  <p className="carousel-description">
                    Representing the most widely abused drug group in the world, depressants affect users in a number of ways.
                  </p>
                  <div className="carousel-counter">
                    {currentStimulant + 1}/{stimulants.length}
                  </div>
                </div>

                <div className="carousel-controls">
                  <button onClick={prevStimulant} className="carousel-btn">‹‹</button>
                  <button onClick={nextStimulant} className="carousel-btn">››</button>
                </div>
              </div>

              <div className="stimulant-card">
                <h3>{stimulants[currentStimulant].title}</h3>
                <p className="drug-short-desc">{stimulants[currentStimulant].shortDescription}</p>
                
                <button 
                  onClick={() => setCurrentStimulant(currentStimulant)}
                  className="learn-more-btn"
                  style={{ 
                    background: 'transparent', 
                    border: 'none', 
                    color: '#2E7D32',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    padding: '10px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  Learn More <span className="learn-more-icon">→</span>
                </button>
                
                <div className="drug-details" style={{ marginTop: '20px' }}>
                  <p className="drug-full-desc">{stimulants[currentStimulant].fullDescription}</p>
                  
                  <div className="drug-info-section">
                    <h4>Effects:</h4>
                    <p>{stimulants[currentStimulant].effects}</p>
                  </div>
                  
                  <div className="drug-info-section">
                    <h4>Dangers:</h4>
                    <p>{stimulants[currentStimulant].dangers}</p>
                  </div>
                  
                  <div className="drug-info-section">
                    <h4>Warning Signs:</h4>
                    <p>{stimulants[currentStimulant].signs}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Depressants Section */}
        <section className="drug-category-section depressants-section">
          <div className="container">
            <h2 className="section-title-center">DEPRESSANTS</h2>
            <p className="section-subtitle-center">
              Representing the most widely abused drug group in the world, depressants affect users in a number of ways.
            </p>

            <div className="depressants-grid">
              {depressants.map((item, index) => (
                <div key={index} className={`depressant-card-expandable ${item.image ? 'featured-card' : ''}`}>
                  <div 
                    className="card-header-clickable"
                    onClick={() => setExpandedDepressant(expandedDepressant === index ? null : index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h3>{item.title}</h3>
                    <span className="card-action-icon">{expandedDepressant === index ? '↓' : (item.icon || '↗')}</span>
                  </div>
                  
                  <div className="card-content">
                    {expandedDepressant !== index && (
                      <p className="drug-short-desc">{item.shortDescription}</p>
                    )}
                    
                    {expandedDepressant === index && (
                      <div className="drug-details">
                        <p className="drug-full-desc">{item.fullDescription}</p>
                        
                        <div className="drug-info-section">
                          <h4>Effects:</h4>
                          <p>{item.effects}</p>
                        </div>
                        
                        <div className="drug-info-section">
                          <h4>Dangers:</h4>
                          <p>{item.dangers}</p>
                        </div>
                        
                        <div className="drug-info-section">
                          <h4>Warning Signs:</h4>
                          <p>{item.signs}</p>
                        </div>
                        
                        <button 
                          onClick={(e) => {
                            e.stopPropagation()
                            setExpandedDepressant(null)
                          }} 
                          className="btn-close-details"
                        >
                          Show Less
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {item.image && expandedDepressant !== index && (
                    <div className="card-image">
                      <img 
                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop" 
                        alt={item.title}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="drug-guide-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Need Help or Have Questions?</h2>
              <p>Our team is here to support you on your recovery journey. Reach out today.</p>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-primary">Contact Us</a>
                <a href="/" className="btn btn-secondary">Browse Centers</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  )
}

export default DrugGuide
