import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function Resources() {
  const [activeTab, setActiveTab] = useState('guides')
  const [flippedCards, setFlippedCards] = useState({})
  const [activePhase, setActivePhase] = useState(0)
  const [expandedArticles, setExpandedArticles] = useState({})
  const [expandedWorksheets, setExpandedWorksheets] = useState({})
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
  
  // Newsletter subscription state
  const [email, setEmail] = useState('')
  const [subscriptionMessage, setSubscriptionMessage] = useState('')
  const [subscriptionStatus, setSubscriptionStatus] = useState('') // 'success' or 'error'
  const [isSubscribing, setIsSubscribing] = useState(false)

  // Debug: Log state changes
  React.useEffect(() => {
    console.log('Active Tab Changed:', activeTab)
  }, [activeTab])

  const guides = [
    {
      id: 1,
      title: 'Understanding Addiction',
      category: 'Education',
      description: 'Comprehensive guide to understanding the nature of addiction, its causes, and effects.',
      icon: 'fa-book-medical',
      downloadLink: 'understanding-addiction.pdf',
      size: '2.4 MB'
    },
    {
      id: 2,
      title: 'Recovery Roadmap',
      category: 'Recovery',
      description: 'Step-by-step guide to navigating your recovery journey from start to long-term sobriety.',
      icon: 'fa-route',
      downloadLink: 'recovery-roadmap.pdf',
      size: '3.1 MB'
    },
    {
      id: 3,
      title: 'Family Support Guide',
      category: 'Family',
      description: 'Resources and strategies for families supporting a loved one through recovery.',
      icon: 'fa-users',
      downloadLink: 'family-support-guide.pdf',
      size: '1.8 MB'
    },
    {
      id: 4,
      title: 'Mental Health Toolkit',
      category: 'Mental Health',
      description: 'Practical tools and techniques for managing mental health during recovery.',
      icon: 'fa-toolbox',
      downloadLink: 'mental-health-toolkit.pdf',
      size: '2.7 MB'
    },
    {
      id: 5,
      title: 'Relapse Prevention Plan',
      category: 'Prevention',
      description: 'Create your personalized plan to identify triggers and prevent relapse.',
      icon: 'fa-shield-alt',
      downloadLink: 'relapse-prevention.pdf',
      size: '1.5 MB'
    },
    {
      id: 6,
      title: 'Nutrition & Wellness',
      category: 'Wellness',
      description: 'Guide to nutrition, exercise, and healthy habits that support recovery.',
      icon: 'fa-heartbeat',
      downloadLink: 'nutrition-wellness.pdf',
      size: '2.2 MB'
    }
  ]

  const videos = [
    {
      id: 1,
      title: 'Understanding Addiction and Recovery',
      duration: '12:34',
      views: '25K',
      thumbnailGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      thumbnailIcon: 'fa-brain',
      category: 'Education',
      description: 'A comprehensive guide to understanding addiction as a disease and the journey to recovery.',
      videoUrl: 'https://www.youtube.com/embed/GlmphYGAyBg'
    },
    {
      id: 2,
      title: 'Breaking the Cycle of Addiction',
      duration: '8:45',
      views: '18K',
      thumbnailGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      thumbnailIcon: 'fa-sync-alt',
      category: 'Recovery',
      description: 'Learn effective strategies to break free from the cycle of addiction and build a healthy lifestyle.',
      videoUrl: 'https://www.youtube.com/embed/drRwAdjZ644'
    },
    {
      id: 3,
      title: 'Rehabilitation Success Stories',
      duration: '15:20',
      views: '32K',
      thumbnailGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      thumbnailIcon: 'fa-star',
      category: 'Inspiration',
      description: 'Inspiring real-life stories from individuals who have successfully overcome addiction.',
      videoUrl: 'https://www.youtube.com/embed/1Wy8jh4QQH8'
    },
    {
      id: 4,
      title: 'Mental Health and Addiction',
      duration: '10:15',
      views: '22K',
      thumbnailGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      thumbnailIcon: 'fa-heart',
      category: 'Mental Health',
      description: 'Understanding the connection between mental health and substance abuse, and how to address both.',
      videoUrl: 'https://www.youtube.com/embed/-JsuNKbAAkU'
    },
    {
      id: 5,
      title: 'Family Support in Recovery',
      duration: '14:50',
      views: '28K',
      thumbnailGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      thumbnailIcon: 'fa-users',
      category: 'Family',
      description: 'How families can provide effective support during the recovery journey.',
      videoUrl: 'https://www.youtube.com/embed/GlmphYGAyBg'
    },
    {
      id: 6,
      title: 'Life After Rehabilitation',
      duration: '11:30',
      views: '20K',
      thumbnailGradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      thumbnailIcon: 'fa-mountain',
      category: 'Recovery',
      description: 'Tips and strategies for maintaining sobriety and thriving after completing treatment.',
      videoUrl: 'https://www.youtube.com/embed/drRwAdjZ644'
    }
  ]

  const supportGroups = [
    {
      id: 1,
      name: 'Alcoholics Anonymous (AA)',
      description: 'Free peer support group for people recovering from alcohol addiction.',
      schedule: 'Daily meetings nationwide',
      contact: 'aa.org',
      website: 'https://www.aa.org',
      icon: 'fa-handshake',
      phone: '1-800-839-1686'
    },
    {
      id: 2,
      name: 'Narcotics Anonymous (NA)',
      description: 'Support group for individuals recovering from drug addiction.',
      schedule: 'Multiple weekly meetings',
      contact: 'na.org',
      website: 'https://www.na.org',
      icon: 'fa-hands-helping',
      phone: '1-818-773-9999'
    },
    {
      id: 3,
      name: 'SMART Recovery',
      description: 'Science-based addiction recovery support using self-empowerment.',
      schedule: 'Online & in-person options',
      contact: 'smartrecovery.org',
      website: 'https://www.smartrecovery.org',
      icon: 'fa-brain',
      phone: '1-440-951-5357'
    },
    {
      id: 4,
      name: 'Al-Anon Family Groups',
      description: 'Support for families and friends of people with alcohol problems.',
      schedule: 'Weekly meetings available',
      contact: 'al-anon.org',
      website: 'https://al-anon.org',
      icon: 'fa-home-heart',
      phone: '1-888-425-2666'
    },
    {
      id: 5,
      name: 'Refuge Recovery',
      description: 'Buddhist-inspired approach to recovery and healing from addiction.',
      schedule: 'Regular meetings worldwide',
      contact: 'refugerecovery.org',
      website: 'https://www.refugerecovery.org',
      icon: 'fa-om',
      phone: 'See website for local contacts'
    },
    {
      id: 6,
      name: 'Celebrate Recovery',
      description: 'Christ-centered 12-step recovery program for all hurts, habits, and hang-ups.',
      schedule: 'Weekly meetings at churches',
      contact: 'celebraterecovery.com',
      website: 'https://www.celebraterecovery.com',
      icon: 'fa-praying-hands',
      phone: 'See website for local chapters'
    }
  ]

  const emergencyContacts = [
    {
      name: 'National Suicide Prevention Lifeline',
      number: '988',
      description: '24/7 crisis support',
      icon: 'fa-phone-volume'
    },
    {
      name: 'SAMHSA National Helpline',
      number: '1-800-662-4357',
      description: 'Treatment referral and information',
      icon: 'fa-info-circle'
    },
    {
      name: 'Crisis Text Line',
      number: 'Text HOME to 741741',
      description: 'Free 24/7 crisis counseling',
      icon: 'fa-comment-medical'
    },
    {
      name: 'National Domestic Violence Hotline',
      number: '1-800-799-7233',
      description: 'Confidential support',
      icon: 'fa-shield-heart'
    }
  ]

  const tools = [
    {
      id: 1,
      name: 'Treatment Readiness Assessment',
      description: 'Evaluate your readiness for rehab with our comprehensive assessment tool.',
      icon: 'fa-clipboard-check',
      action: 'assessment',
      color: '#667eea'
    },
    {
      id: 2,
      name: 'Rehab Center Finder',
      description: 'Find the best rehabilitation center near you based on your specific needs and location.',
      icon: 'fa-map-marker-alt',
      action: 'find-center',
      color: '#f093fb'
    },
    {
      id: 3,
      name: 'Insurance Verification',
      description: 'Check your insurance coverage and verify benefits for addiction treatment programs.',
      icon: 'fa-shield-alt',
      action: 'verify-insurance',
      color: '#ff6b6b'
    },
    {
      id: 4,
      name: 'Treatment Cost Calculator',
      description: 'Estimate rehab costs and explore payment options for inpatient and outpatient programs.',
      icon: 'fa-calculator',
      action: 'calculate-cost',
      color: '#4facfe'
    },
    {
      id: 5,
      name: 'Program Comparison Tool',
      description: 'Compare different treatment programs, durations, and approaches to find the best fit.',
      icon: 'fa-balance-scale',
      action: 'compare-programs',
      color: '#43e97b'
    },
    {
      id: 6,
      name: 'Admission Preparation Guide',
      description: 'Complete pre-admission checklist and prepare for your rehab journey.',
      icon: 'fa-suitcase',
      action: 'prepare-admission',
      color: '#feca57'
    },
    {
      id: 7,
      name: 'Facility Virtual Tour',
      description: 'Schedule virtual tours of our rehabilitation facilities and see amenities firsthand.',
      icon: 'fa-video',
      action: 'virtual-tour',
      color: '#00d2ff'
    },
    {
      id: 8,
      name: 'Family Support Resources',
      description: 'Access resources to help your family prepare and support your treatment journey.',
      icon: 'fa-users',
      action: 'family-resources',
      color: '#ee5a6f'
    }
  ]

  const successStories = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      duration: '3 Years Sober',
      story: 'After 10 years of alcohol dependency, I found hope through treatment and community support.',
      image: '👨',
      location: 'Mumbai'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      duration: '5 Years Clean',
      story: 'Recovery gave me my life back. Today I help others find their path to sobriety.',
      image: '👩',
      location: 'Delhi'
    },
    {
      id: 3,
      name: 'Amit Patel',
      duration: '2 Years Sober',
      story: 'With family support and professional help, I overcame my addiction and rebuilt relationships.',
      image: '👨',
      location: 'Bangalore'
    }
  ]

  const articles = [
    {
      id: 1,
      title: '10 Coping Strategies for Early Recovery',
      excerpt: 'Learn practical techniques to manage stress and cravings during your first year of sobriety.',
      readTime: '5 min read',
      category: 'Recovery Tips',
      icon: 'fa-lightbulb',
      fullContent: `
        Early recovery can be challenging, but these 10 proven strategies will help you navigate this critical period:

        1. **Build a Daily Routine**: Structure provides stability. Wake up and sleep at consistent times, plan your meals, and schedule activities that support your recovery.

        2. **Practice Mindfulness**: Meditation and deep breathing exercises help manage cravings and reduce stress. Start with just 5 minutes daily.

        3. **Stay Connected**: Attend support group meetings regularly. Connection with others in recovery provides accountability and understanding.

        4. **Exercise Regularly**: Physical activity releases endorphins, improves mood, and helps restore physical health. Aim for 30 minutes of movement daily.

        5. **Journal Your Progress**: Writing helps process emotions and track triggers. Document your journey, celebrate wins, and learn from challenges.

        6. **Avoid Triggers**: Identify people, places, and situations that trigger cravings. Create a plan to avoid or manage these triggers effectively.

        7. **Learn to Say No**: Setting boundaries is crucial. Practice declining invitations to situations that could jeopardize your recovery.

        8. **Seek Professional Help**: Work with therapists and counselors who specialize in addiction. Professional support accelerates healing.

        9. **Practice Self-Compassion**: Recovery isn't linear. Be kind to yourself during setbacks and focus on progress, not perfection.

        10. **Celebrate Milestones**: Acknowledge every day of sobriety. Reward yourself for achievements and recognize how far you've come.

        Remember, recovery is a journey, not a destination. Each day you choose sobriety is a victory worth celebrating.
      `
    },
    {
      id: 2,
      title: 'The Science Behind Addiction',
      excerpt: 'Understanding how addiction affects the brain and why recovery is a medical process.',
      readTime: '8 min read',
      category: 'Education',
      icon: 'fa-brain',
      fullContent: `
        Addiction is a complex brain disorder, not a moral failing. Understanding the science helps reduce stigma and improve treatment outcomes.

        **How Addiction Changes the Brain:**

        The brain's reward system releases dopamine during pleasurable activities. Substances hijack this system, flooding it with dopamine—far more than natural rewards provide.

        Over time, the brain adapts by:
        - Reducing dopamine receptors
        - Becoming less sensitive to the substance
        - Requiring more of the substance for the same effect (tolerance)

        **Three Brain Regions Most Affected:**

        1. **Basal Ganglia**: Controls reward and habit formation. Becomes hypersensitive to substance-related cues.

        2. **Extended Amygdala**: Regulates stress and negative emotions. Becomes overactive, causing anxiety and irritability during withdrawal.

        3. **Prefrontal Cortex**: Manages decision-making and impulse control. Its function is impaired, making it difficult to resist cravings.

        **Why Recovery Takes Time:**

        Brain healing isn't instant. Neural pathways strengthened by addiction must be weakened while healthy pathways are reinforced. This neuroplasticity process requires:

        - Consistent abstinence
        - Therapeutic intervention
        - Healthy lifestyle changes
        - Time (often 6-12 months for significant recovery)

        **The Medical Model of Addiction:**

        Like diabetes or heart disease, addiction is a chronic condition requiring ongoing management. Treatment includes:
        - Medication-assisted treatment (MAT)
        - Behavioral therapies
        - Support systems
        - Lifestyle modifications

        Understanding addiction as a medical condition empowers individuals to seek help without shame and approach recovery with compassion and evidence-based strategies.
      `
    },
    {
      id: 3,
      title: 'Building a Strong Support Network',
      excerpt: 'Why community matters in recovery and how to find your people.',
      readTime: '6 min read',
      category: 'Support',
      icon: 'fa-users',
      fullContent: `
        Recovery doesn't happen in isolation. A strong support network is one of the most powerful tools for sustained sobriety.

        **Why Support Networks Matter:**

        - **Accountability**: Others help keep you committed to your recovery goals
        - **Understanding**: People in recovery "get it" in ways others might not
        - **Hope**: Seeing others succeed provides inspiration and possibility
        - **Practical Help**: Advice on navigating challenges from those who've been there
        - **Reduced Isolation**: Combat loneliness, a major relapse trigger

        **Types of Support:**

        1. **12-Step Programs**: AA, NA, and similar groups offer structured, peer-led support worldwide
        
        2. **SMART Recovery**: Science-based alternative focusing on self-empowerment and CBT techniques
        
        3. **Faith-Based Groups**: Celebrate Recovery and similar programs integrate spiritual principles
        
        4. **Online Communities**: Forums and apps provide 24/7 support and anonymity
        
        5. **Individual Therapy**: Professional guidance for underlying issues
        
        6. **Family Support**: Involving loved ones strengthens relationships and creates home accountability

        **How to Build Your Network:**

        **Start Small**: You don't need dozens of contacts. Begin with 2-3 trusted individuals you can call during difficult moments.

        **Be Selective**: Choose people who:
        - Support your sobriety unconditionally
        - Respect your boundaries
        - Are available when needed
        - Share similar values and goals

        **Give Back**: As you progress, support others. Helping newcomers reinforces your own recovery and creates meaningful connections.

        **Diversify**: Include people at different recovery stages, with various backgrounds, and from multiple support settings.

        **Stay Connected**: Regular check-ins maintain relationships. Don't wait for crises to reach out.

        Remember: Asking for help is strength, not weakness. Your support network is your safety net during challenging times.
      `
    },
    {
      id: 4,
      title: 'Nutrition for Recovery',
      excerpt: 'How proper nutrition supports healing and helps prevent relapse.',
      readTime: '7 min read',
      category: 'Wellness',
      icon: 'fa-apple-alt',
      fullContent: `
        Substance abuse depletes the body of essential nutrients. Proper nutrition is foundational to physical healing and emotional stability in recovery.

        **How Addiction Affects Nutrition:**

        - **Vitamin Deficiencies**: Particularly B vitamins, vitamin D, and minerals
        - **Digestive Issues**: Impaired nutrient absorption
        - **Blood Sugar Imbalances**: Contributing to mood swings and cravings
        - **Liver Damage**: Affecting nutrient processing
        - **Malnutrition**: From poor eating habits during active addiction

        **Key Nutrients for Recovery:**

        1. **B Vitamins**: Essential for brain function and energy production. Sources: whole grains, eggs, leafy greens, legumes

        2. **Omega-3 Fatty Acids**: Support brain health and reduce inflammation. Sources: fish, flaxseed, walnuts, chia seeds

        3. **Amino Acids**: Building blocks for neurotransmitters. Sources: lean proteins, dairy, eggs, quinoa

        4. **Complex Carbohydrates**: Stabilize blood sugar and mood. Sources: oats, brown rice, sweet potatoes, whole wheat

        5. **Antioxidants**: Combat oxidative stress from substance use. Sources: berries, dark chocolate, green tea, colorful vegetables

        **Eating Patterns for Recovery:**

        **Regular Meals**: Eat every 3-4 hours to maintain stable blood sugar. Skipping meals can trigger cravings and irritability.

        **Balanced Plates**: Include protein, complex carbs, healthy fats, and vegetables at each meal.

        **Hydration**: Drink 8-10 glasses of water daily. Dehydration affects mood and cognitive function.

        **Limit Sugar and Caffeine**: These can cause energy crashes and mimic withdrawal symptoms.

        **Meal Planning Tips:**

        - Prepare meals in advance to avoid poor choices when stressed
        - Keep healthy snacks available (nuts, fruit, yogurt)
        - Cook with others for social connection and accountability
        - Be patient—taste preferences normalize over time

        **Supplements to Consider:**

        Work with healthcare providers to determine if you need:
        - Multivitamin
        - Vitamin D
        - Omega-3 supplements
        - Probiotics for gut health

        **The Gut-Brain Connection:**

        90% of serotonin is produced in the gut. A healthy diet supports:
        - Better mood regulation
        - Reduced anxiety
        - Improved sleep
        - Clearer thinking
        - Stronger cravings resistance

        Remember: Nutrition is self-care, not deprivation. Nourishing your body is an act of respect for your recovery journey.
      `
    }
  ]

  const worksheets = [
    {
      id: 1,
      title: 'Daily Gratitude Journal',
      description: 'Practice gratitude to improve mental health',
      type: 'PDF',
      pages: '12 pages',
      color: '#667eea',
      preview: `A structured daily journal designed to cultivate gratitude and positive thinking in recovery.`,
      features: [
        'Daily prompts for morning and evening reflection',
        'Gratitude tracking for 30 days',
        'Mood and emotion logging',
        'Weekly review and insights section',
        'Inspirational quotes for recovery',
        'Space for personal reflections'
      ],
      benefits: [
        'Improves mental health and reduces depression',
        'Shifts focus from challenges to blessings',
        'Enhances self-awareness and mindfulness',
        'Strengthens resilience during recovery'
      ]
    },
    {
      id: 2,
      title: 'Relapse Prevention Workbook',
      description: 'Identify triggers and create action plans',
      type: 'PDF',
      pages: '24 pages',
      color: '#8b5cf6',
      preview: `Comprehensive workbook to identify triggers, develop coping strategies, and create emergency plans.`,
      features: [
        'Trigger identification exercises',
        'High-risk situation analyzer',
        'Personalized coping strategy builder',
        'Emergency contact planning',
        'Craving intensity tracking',
        'Relapse warning signs checklist'
      ],
      benefits: [
        'Prepares you for challenging situations',
        'Builds confidence in handling cravings',
        'Creates actionable prevention strategies',
        'Reduces relapse risk significantly'
      ]
    },
    {
      id: 3,
      title: 'Goal Setting Worksheet',
      description: 'Set SMART goals for your recovery',
      type: 'PDF',
      pages: '8 pages',
      color: '#10b981',
      preview: `Strategic worksheet for setting and achieving meaningful recovery goals using the SMART framework.`,
      features: [
        'SMART goal planning template',
        'Short-term and long-term goal sections',
        'Action step breakdown guides',
        'Progress tracking milestones',
        'Obstacle identification tools',
        'Celebration and reward planning'
      ],
      benefits: [
        'Provides clear direction and purpose',
        'Breaks large goals into manageable steps',
        'Increases motivation and commitment',
        'Tracks progress and celebrates wins'
      ]
    },
    {
      id: 4,
      title: 'Emotion Regulation Guide',
      description: 'Learn healthy ways to process emotions',
      type: 'PDF',
      pages: '16 pages',
      color: '#f59e0b',
      preview: `Practical guide with exercises and techniques for identifying, understanding, and managing emotions.`,
      features: [
        'Emotion identification wheel',
        'Healthy vs. unhealthy coping comparison',
        'DBT-based regulation techniques',
        'Distress tolerance exercises',
        'Mindfulness practices for emotions',
        'Communication skill builders'
      ],
      benefits: [
        'Reduces emotional reactivity',
        'Improves relationships and communication',
        'Decreases anxiety and depression',
        'Prevents emotion-driven relapse'
      ]
    }
  ]

  const myths = [
    {
      id: 1,
      myth: 'Addiction is a choice',
      reality: 'Addiction is a chronic brain disease. While the first use may be voluntary, repeated substance use changes brain chemistry, making it difficult to stop without help.',
      icon: 'fa-brain',
      color: '#667eea'
    },
    {
      id: 2,
      myth: 'You have to hit rock bottom before seeking help',
      reality: 'Recovery can begin at any stage. Early intervention often leads to better outcomes. Waiting for rock bottom can result in devastating consequences.',
      icon: 'fa-hand-holding-heart',
      color: '#f093fb'
    },
    {
      id: 3,
      myth: 'Relapse means treatment failed',
      reality: 'Relapse is often part of recovery, not failure. Addiction has a 40-60% relapse rate, similar to other chronic diseases. Each attempt teaches valuable lessons.',
      icon: 'fa-chart-line',
      color: '#4facfe'
    },
    {
      id: 4,
      myth: 'Detox is all you need',
      reality: 'Detox addresses physical dependence but not psychological addiction. Comprehensive treatment including therapy and aftercare is essential for long-term recovery.',
      icon: 'fa-hospital',
      color: '#43e97b'
    },
    {
      id: 5,
      myth: 'Willpower alone can overcome addiction',
      reality: 'Addiction requires professional treatment. Brain changes make quitting without support extremely difficult. Medical and therapeutic interventions are crucial.',
      icon: 'fa-user-md',
      color: '#fa709a'
    },
    {
      id: 6,
      myth: 'You can never fully recover',
      reality: 'Full recovery is possible. Many people achieve long-term sobriety and lead fulfilling lives. Recovery is a journey of continuous growth and healing.',
      icon: 'fa-trophy',
      color: '#feca57'
    }
  ]

  const recoveryPhases = [
    {
      id: 1,
      phase: 'Detoxification',
      timeline: 'Days 1-7',
      icon: 'fa-first-aid',
      color: '#667eea',
      physical: ['Withdrawal symptoms peak', 'Body begins clearing toxins', 'Sleep patterns disrupted'],
      brain: ['Dopamine levels imbalanced', 'Cravings are intense', 'Mood swings common'],
      relationships: ['Initial outreach to support', 'Family involvement begins', 'Trust rebuilding starts'],
      life: ['Focus on physical health', 'Medical supervision critical', 'Daily routine establishing']
    },
    {
      id: 2,
      phase: 'Early Abstinence',
      timeline: 'Weeks 2-12',
      icon: 'fa-seedling',
      color: '#4facfe',
      physical: ['Energy levels improving', 'Sleep normalizing', 'Appetite returning'],
      brain: ['New neural pathways forming', 'Cravings decreasing', 'Mental clarity improving'],
      relationships: ['Honest communication practiced', 'Boundaries being set', 'Support network growing'],
      life: ['Developing healthy routines', 'Learning coping skills', 'Setting short-term goals']
    },
    {
      id: 3,
      phase: 'Maintaining Abstinence',
      timeline: 'Months 3-12',
      icon: 'fa-chart-line',
      color: '#43e97b',
      physical: ['Physical health restored', 'Exercise routine established', 'Healthy weight achieved'],
      brain: ['Brain chemistry rebalancing', 'Emotional regulation improving', 'Cognitive function restored'],
      relationships: ['Trust being rebuilt', 'Healthy relationships forming', 'Family healing progressing'],
      life: ['Career/education resuming', 'Financial stability improving', 'Life purpose emerging']
    },
    {
      id: 4,
      phase: 'Advanced Recovery',
      timeline: 'Years 1-5+',
      icon: 'fa-mountain',
      color: '#feca57',
      physical: ['Optimal health achieved', 'Vitality fully returned', 'Longevity improved'],
      brain: ['Brain fully healed', 'Emotional mastery', 'New identity formed'],
      relationships: ['Deep connections restored', 'Helping others in recovery', 'Meaningful relationships thriving'],
      life: ['Life goals achieved', 'Personal growth continuous', 'Contributing to community']
    }
  ]

  const toggleFlip = (cardId) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }))
  }

  const toggleArticle = (articleId) => {
    setExpandedArticles(prev => ({
      ...prev,
      [articleId]: !prev[articleId]
    }))
  }

  const toggleWorksheet = (worksheetId) => {
    setExpandedWorksheets(prev => ({
      ...prev,
      [worksheetId]: !prev[worksheetId]
    }))
  }

  // Handler for downloading guides - Professional HTML Version with Specific Content
  const handleDownload = (guide) => {
    // Generate guide-specific content based on the guide title
    const getGuideSpecificContent = (guide) => {
      switch(guide.title) {
        case 'Understanding Addiction':
          return {
            overview: `Addiction is a complex disease that affects brain function and behavior. This guide provides evidence-based information about the neurological, psychological, and social aspects of addiction. Understanding how addiction develops and progresses is the first step toward effective treatment and lasting recovery. You will learn about the brain reward system, genetic factors, environmental influences, and the progression from substance use to dependence.`,
            whatYoullLearn: [
              'The neuroscience of addiction and how substances affect brain chemistry',
              'Genetic and environmental risk factors that contribute to addiction',
              'The difference between physical dependence and psychological addiction',
              'Common myths and misconceptions about addiction debunked',
              'Warning signs and stages of addiction progression',
              'Evidence-based treatment approaches and their effectiveness'
            ],
            howToUse: [
              'Read Part 1: The Science of Addiction to understand the biological basis',
              'Complete the self-assessment questionnaire in Part 2',
              'Review Part 3: Types of Addiction for substance-specific information',
              'Study Part 4: Impact on Brain and Body with detailed diagrams',
              'Use Part 5: Breaking the Cycle to explore treatment options',
              'Share relevant chapters with family members to increase understanding'
            ],
            keyPrinciples: [
              'Addiction is a medical condition, not a moral failing or lack of willpower',
              'Recovery is possible with proper treatment, support, and commitment',
              'Understanding triggers and cravings is essential for long-term success',
              'Co-occurring mental health disorders require integrated treatment',
              'Family involvement and education significantly improve outcomes',
              'Evidence-based treatments like CBT and MAT are most effective'
            ]
          }
        
        case 'Recovery Roadmap':
          return {
            overview: `This comprehensive roadmap guides you through every stage of recovery - from initial detox through early recovery, building stability, and maintaining long-term sobriety. Each phase includes specific goals, strategies, challenges to expect, and tools to overcome them. Whether you are considering treatment, newly sober, or working on long-term maintenance, this guide provides the direction and support you need for your unique journey.`,
            whatYoullLearn: [
              'The five stages of recovery and what to expect in each phase',
              'Detoxification process, timeline, and medical supervision requirements',
              'Building a strong foundation in early recovery (Days 1-90)',
              'Developing coping strategies for cravings and triggers',
              'Creating and maintaining healthy routines and habits',
              'Milestones to celebrate and how to sustain long-term sobriety'
            ],
            howToUse: [
              'Identify your current stage in the recovery timeline',
              'Complete the assessments at the beginning of each chapter',
              'Follow the action steps provided for your specific stage',
              'Use the worksheets to create your personalized recovery plan',
              'Track your progress using the milestone checklist',
              'Revisit sections as you advance through different recovery phases'
            ],
            keyPrinciples: [
              'Recovery is a marathon, not a sprint - take it one day at a time',
              'Each stage of recovery has unique challenges and opportunities',
              'Relapse is not failure - it is an opportunity to strengthen your recovery',
              'Building a support network is crucial for long-term success',
              'Self-care practices are essential, not optional, in recovery',
              'Progress is not always linear - trust the process and be patient'
            ]
          }
        
        case 'Family Support Guide':
          return {
            overview: `Supporting a loved one through addiction and recovery requires understanding, patience, boundaries, and self-care. This guide empowers family members and friends with practical strategies to provide effective support while protecting their own well-being. Learn how to communicate effectively, set healthy boundaries, recognize enabling behaviors, and navigate the challenges of supporting someone in recovery. Family involvement significantly improves recovery outcomes.`,
            whatYoullLearn: [
              'Understanding addiction as a family disease and its impact on relationships',
              'Effective communication techniques and active listening skills',
              'Setting and maintaining healthy boundaries without guilt',
              'Recognizing and stopping enabling behaviors that hinder recovery',
              'Self-care strategies for family members and preventing caregiver burnout',
              'How to support during relapse and maintain hope during setbacks'
            ],
            howToUse: [
              'Start with Part 1: Understanding Your Role in the Recovery Process',
              'Complete the Family Impact Assessment worksheet',
              'Practice the communication scripts provided in each scenario',
              'Use the Boundary-Setting Worksheet to define your limits',
              'Implement the self-care checklist for your own well-being',
              'Join a family support group and share what you have learned'
            ],
            keyPrinciples: [
              'You cannot control your loved one recovery - only your own responses',
              'Supporting recovery does not mean sacrificing your own well-being',
              'Healthy boundaries are acts of love, not punishment or abandonment',
              'Enabling is different from helping - learn to recognize the difference',
              'Recovery affects the whole family - everyone needs support and healing',
              'Hope and patience are essential - celebrate small victories together'
            ]
          }
        
        case 'Mental Health Toolkit':
          return {
            overview: `Mental health and addiction recovery are deeply interconnected. This toolkit provides evidence-based techniques for managing anxiety, depression, stress, and other co-occurring mental health conditions during recovery. Learn practical skills like mindfulness, emotional regulation, cognitive restructuring, and stress management. Understanding and addressing mental health is essential for sustainable recovery and overall well-being.`,
            whatYoullLearn: [
              'The connection between mental health disorders and substance use',
              'Mindfulness and meditation techniques for emotional regulation',
              'Cognitive Behavioral Therapy (CBT) strategies you can use daily',
              'Stress management and relaxation techniques that actually work',
              'Identifying and challenging negative thought patterns',
              'When and how to seek professional mental health support'
            ],
            howToUse: [
              'Complete the Mental Health Screening Tool in the first chapter',
              'Practice the daily mindfulness exercises for 5-10 minutes',
              'Use the Thought Record Worksheet when experiencing negative thoughts',
              'Try different stress management techniques to find what works for you',
              'Implement the sleep hygiene checklist for better rest',
              'Track your mood daily using the Mood Monitoring Chart'
            ],
            keyPrinciples: [
              'Mental health is just as important as physical health in recovery',
              'Co-occurring disorders require integrated, simultaneous treatment',
              'Daily practice of coping skills builds resilience over time',
              'Professional support enhances self-help strategies significantly',
              'Medication can be an important tool when prescribed appropriately',
              'Self-compassion and patience accelerate healing and growth'
            ]
          }
        
        case 'Relapse Prevention Plan':
          return {
            overview: `A comprehensive relapse prevention plan is your insurance policy for long-term recovery. This guide helps you identify your personal triggers, recognize early warning signs, develop coping strategies, and create an emergency action plan. Learn to distinguish between a lapse and full relapse, understand the stages that lead to relapse, and build a solid prevention strategy tailored to your unique situation and risk factors.`,
            whatYoullLearn: [
              'The stages of relapse: emotional, mental, and physical warning signs',
              'Identifying your personal high-risk situations and triggers',
              'Effective coping strategies for cravings and urges',
              'Creating a detailed emergency action plan with contact numbers',
              'The difference between a slip and full relapse and how to respond',
              'Building a relapse prevention support team and communication plan'
            ],
            howToUse: [
              'Complete the Trigger Identification Worksheet thoroughly',
              'Fill out your Personal High-Risk Situations checklist',
              'Create your Emergency Action Plan and share it with your support team',
              'Practice the Urge Surfing technique when cravings occur',
              'Use the Daily Check-In form to monitor your emotional state',
              'Review and update your plan monthly or after any close call'
            ],
            keyPrinciples: [
              'Relapse prevention is an active, ongoing process - not a one-time task',
              'Early recognition of warning signs can prevent full relapse',
              'Having a written plan significantly reduces relapse risk',
              'Support network involvement is critical - do not face challenges alone',
              'Self-monitoring and honesty are essential for staying on track',
              'If relapse occurs, quick response and learning are key to recovery'
            ]
          }
        
        case 'Nutrition & Wellness':
          return {
            overview: `Physical health forms the foundation of successful recovery. This guide explores how proper nutrition, regular exercise, quality sleep, and holistic wellness practices support healing and prevent relapse. Learn about the nutritional deficiencies common in recovery, foods that support brain health, exercise routines that reduce cravings, and lifestyle habits that promote overall wellness. Taking care of your body supports your mind and spirit in recovery.`,
            whatYoullLearn: [
              'How substance use affects nutritional status and what to restore',
              'Foods that support brain healing and neurotransmitter production',
              'Exercise routines that reduce cravings and improve mood naturally',
              'Sleep hygiene practices for better rest and emotional regulation',
              'Stress-reduction techniques including yoga, meditation, and breathing',
              'Creating sustainable healthy habits and preventing burnout'
            ],
            howToUse: [
              'Start with the Nutritional Assessment to identify deficiencies',
              'Follow the 30-Day Meal Plan with brain-healthy recipes',
              'Begin with the Beginner Exercise Program (15 minutes daily)',
              'Implement the Sleep Optimization Protocol for better rest',
              'Try the guided meditation and breathing exercises provided',
              'Use the Wellness Tracker to monitor your progress weekly'
            ],
            keyPrinciples: [
              'Physical health and mental health are inseparable in recovery',
              'Proper nutrition supports brain chemistry and reduces cravings',
              'Regular exercise is as effective as medication for mild depression',
              'Quality sleep is essential for emotional regulation and decision-making',
              'Small, consistent changes create lasting wellness habits',
              'Self-care is not selfish - it is necessary for sustainable recovery'
            ]
          }
        
        default:
          return {
            overview: guide.description,
            whatYoullLearn: [
              'Understanding the fundamentals and core concepts of recovery',
              'Evidence-based strategies and practical techniques',
              'Self-assessment tools and personal reflection exercises',
              'Creating personalized action plans for your journey',
              'Building and maintaining healthy habits and routines',
              'Resources for continued support and long-term growth'
            ],
            howToUse: [
              'Read through the content at your own comfortable pace',
              'Complete worksheets and self-assessment exercises',
              'Implement strategies that resonate with your journey',
              'Keep this guide as a reference throughout recovery',
              'Share relevant sections with your support team',
              'Revisit and update your action plans regularly'
            ],
            keyPrinciples: [
              'Recovery is a journey, not a destination - be patient with yourself',
              'Progress over perfection - celebrate small victories daily',
              'Professional support enhances your success significantly',
              'Building a strong support network is absolutely essential',
              'Self-compassion and patience are vital for sustained recovery',
              'Continuous learning and growth empower your recovery journey'
            ]
          }
      }
    }

    const specificContent = getGuideSpecificContent(guide)
    
    // Create a beautiful HTML document that looks like a professional PDF
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${guide.title} - HopePath Recovery</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @page { margin: 2cm; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
            background: #f5f5f5;
        }
        .document {
            background: white;
            padding: 60px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
            border-radius: 10px;
        }
        .header {
            text-align: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 50px 30px;
            border-radius: 12px;
            margin-bottom: 40px;
        }
        .logo {
            font-size: 2.5em;
            font-weight: bold;
            margin-bottom: 15px;
        }
        .header h1 {
            font-size: 2.8em;
            margin: 20px 0 10px 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
        .subtitle {
            font-size: 1.3em;
            opacity: 0.95;
            font-style: italic;
        }
        .meta-box {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 30px;
            border-radius: 10px;
            margin: 30px 0;
            border-left: 6px solid #667eea;
        }
        .meta-row {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid #dee2e6;
        }
        .meta-row:last-child { border-bottom: none; }
        .meta-label {
            font-weight: bold;
            color: #667eea;
            font-size: 1.1em;
        }
        .meta-value {
            color: #495057;
            font-size: 1.1em;
        }
        .section {
            margin: 45px 0;
            page-break-inside: avoid;
        }
        .section-title {
            color: #667eea;
            font-size: 2em;
            margin-bottom: 20px;
            padding-bottom: 12px;
            border-bottom: 4px solid #667eea;
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .section-icon {
            font-size: 1.2em;
        }
        .description {
            background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
            padding: 25px;
            border-radius: 10px;
            font-size: 1.15em;
            line-height: 1.8;
            border-left: 6px solid #2196f3;
            margin: 20px 0;
        }
        .checklist {
            list-style: none;
            padding: 0;
        }
        .checklist li {
            padding: 15px 15px 15px 50px;
            margin: 12px 0;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 8px;
            position: relative;
            font-size: 1.05em;
            transition: transform 0.2s;
        }
        .checklist li:hover {
            transform: translateX(5px);
        }
        .checklist li:before {
            content: "✓";
            position: absolute;
            left: 18px;
            color: #28a745;
            font-weight: bold;
            font-size: 1.5em;
        }
        .ordered-list {
            padding-left: 30px;
            line-height: 2.2;
            font-size: 1.05em;
        }
        .ordered-list li {
            margin: 10px 0;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 6px;
        }
        .emergency-box {
            background: linear-gradient(135deg, #fff3cd 0%, #ffe69c 100%);
            border: 3px solid #ffc107;
            padding: 30px;
            border-radius: 12px;
            margin: 40px 0;
            box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
        }
        .emergency-box h3 {
            color: #d32f2f;
            font-size: 1.8em;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .contact-list {
            list-style: none;
            padding: 0;
        }
        .contact-list li {
            padding: 15px;
            margin: 10px 0;
            background: white;
            border-radius: 8px;
            border-left: 5px solid #d32f2f;
            font-size: 1.1em;
        }
        .contact-list strong {
            color: #d32f2f;
            font-size: 1.3em;
            display: inline-block;
            min-width: 180px;
        }
        .resource-list {
            padding-left: 25px;
            line-height: 2;
        }
        .resource-list li {
            margin: 8px 0;
            font-size: 1.05em;
        }
        .footer {
            margin-top: 60px;
            padding-top: 30px;
            border-top: 3px solid #dee2e6;
            text-align: center;
            color: #6c757d;
            line-height: 1.8;
        }
        .footer strong {
            color: #495057;
            font-size: 1.1em;
        }
        .document-id {
            margin-top: 20px;
            font-size: 0.9em;
            font-family: monospace;
            color: #868e96;
        }
        .print-button {
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
            z-index: 1000;
        }
        .print-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }
        @media print {
            body { background: white; padding: 0; }
            .document { box-shadow: none; padding: 20px; }
            .print-button { display: none; }
        }
    </style>
</head>
<body>
    <button class="print-button" onclick="window.print()">🖨️ Print / Save as PDF</button>
    
    <div class="document">
        <div class="header">
            <div class="logo">🌟 HopePath Recovery</div>
            <h1>${guide.title}</h1>
            <div class="subtitle">Your Journey to Recovery Starts Here</div>
        </div>

        <div class="meta-box">
            <div class="meta-row">
                <span class="meta-label">📁 Category</span>
                <span class="meta-value">${guide.category}</span>
            </div>
            <div class="meta-row">
                <span class="meta-label">📊 Document Size</span>
                <span class="meta-value">${guide.size}</span>
            </div>
            <div class="meta-row">
                <span class="meta-label">📅 Date Downloaded</span>
                <span class="meta-value">${new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
            </div>
            <div class="meta-row">
                <span class="meta-label">🕐 Time</span>
                <span class="meta-value">${new Date().toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}</span>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">
                <span class="section-icon">📖</span> Overview
            </h2>
            <div class="description">
            ${specificContent.overview}
                <span class="section-icon">📚</span> What You'll Learn
            </h2>
            <ul class="checklist">
                ${specificContent.whatYoullLearn.map(item => `<li>${item}</li>`).join('\n                ')}
            </ul>
        </div>

        <div class="section">
            <h2 class="section-title">
                <span class="section-icon">🎯</span> How to Use This Guide
            </h2>
            <ol class="ordered-list">
                ${specificContent.howToUse.map(item => `<li>${item}</li>`).join('\n                ')}
            </ol>
        </div>

        <div class="section">
            <h2 class="section-title">
                <span class="section-icon">💡</span> Key ${guide.title} Principles
            </h2>
            <ul class="checklist">
                ${specificContent.keyPrinciples.map(item => `<li>${item}</li>`).join('\n                ')}
            </ul>
        </div>

        <div class="emergency-box">
            <h3>⚠️ Emergency Contacts - 24/7 Available</h3>
            <ul class="contact-list">
                <li><strong>988</strong> National Suicide Prevention Lifeline</li>
                <li><strong>1-800-662-4357</strong> SAMHSA National Helpline (Treatment Referral)</li>
                <li><strong>Text HOME to 741741</strong> Crisis Text Line (Text Support)</li>
                <li><strong>1-800-799-7233</strong> National Domestic Violence Hotline</li>
            </ul>
            <p style="margin-top: 20px; font-style: italic; font-size: 1.1em;">
                <strong>Remember:</strong> If you're in crisis, reach out immediately. You're never alone in your journey.
            </p>
        </div>

        <div class="section">
            <h2 class="section-title">
                <span class="section-icon">🌐</span> Additional Resources
            </h2>
            <p style="font-size: 1.1em; margin-bottom: 15px;">
                Visit <strong style="color: #667eea;">www.hopepathrecovery.com</strong> for:
            </p>
            <ul class="resource-list">
                <li>📥 More downloadable guides and interactive worksheets</li>
                <li>🎥 Educational videos, webinars, and expert interviews</li>
                <li>👥 Support group information and meeting schedules</li>
                <li>🛠️ Interactive recovery tools and progress calculators</li>
                <li>💬 Success stories and thriving community forums</li>
                <li>🏥 Professional treatment center directory</li>
            </ul>
        </div>

        <div class="footer">
            <p><strong>© ${new Date().getFullYear()} HopePath Recovery. All rights reserved.</strong></p>
            <p style="margin: 15px 0;">This document is provided as an educational resource for recovery support.</p>
            <p>For personalized treatment recommendations, please consult with qualified healthcare professionals.</p>
            <div class="document-id">
                Document ID: ${guide.id}-${Date.now()}
            </div>
        </div>
    </div>
</body>
</html>`

    // Create a blob with the HTML content
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' })
    
    // Create a download link
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${guide.title.replace(/\s+/g, '_')}_Professional_Guide.html`
    
    // Trigger the download
    document.body.appendChild(link)
    link.click()
    
    // Clean up
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
    
    // Show enhanced success notification
    const notification = document.createElement('div')
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
      color: white;
      padding: 25px 35px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      z-index: 10000;
      font-size: 16px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 15px;
      animation: slideInRight 0.4s ease;
      max-width: 450px;
      border: 2px solid rgba(255, 255, 255, 0.3);
    `
    notification.innerHTML = `
      <i class="fas fa-file-download" style="font-size: 36px; background: rgba(255,255,255,0.2); padding: 12px; border-radius: 10px;"></i>
      <div style="flex: 1;">
        <div style="font-size: 20px; margin-bottom: 6px; font-weight: bold;">✓ Download Complete!</div>
        <div style="font-size: 15px; opacity: 0.95; margin-bottom: 6px;">${guide.title}</div>
        <div style="font-size: 13px; opacity: 0.85; border-top: 1px solid rgba(255,255,255,0.3); padding-top: 8px; margin-top: 8px;">
          📄 Open the file in your browser<br>
          🖨️ Use Print to save as PDF
        </div>
      </div>
    `
    
    document.body.appendChild(notification)
    
    // Add animation
    const style = document.createElement('style')
    style.textContent = `
      @keyframes slideInRight {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOutRight {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)
    
    // Remove notification after 6 seconds (longer due to more info)
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease'
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification)
        }
        if (document.head.contains(style)) {
          document.head.removeChild(style)
        }
      }, 300)
    }, 6000)
  }

  // Handler for opening videos
  const handleVideoClick = (video) => {
    setSelectedVideo(video)
    setShowVideoModal(true)
  }

  // Handler for closing video modal
  const closeVideoModal = () => {
    setShowVideoModal(false)
    setSelectedVideo(null)
  }

  // Handler for opening support group websites
  const handleVisitWebsite = (website) => {
    window.open(website, '_blank', 'noopener,noreferrer')
  }

  // Handler for launching recovery tools
  const handleLaunchTool = (tool) => {
    // Different actions based on tool type
    const messages = {
      'assessment': `📋 Treatment Readiness Assessment\n\nEvaluate your readiness for rehab:\n• Physical health evaluation\n• Mental readiness assessment\n• Support system review\n• Financial preparation check\n• Commitment level gauge\n\nThis would open a comprehensive assessment questionnaire.`,
      'find-center': `📍 Rehab Center Finder\n\nFind the perfect rehabilitation center:\n• Search by location & distance\n• Filter by treatment type\n• Compare facility amenities\n• View success rates\n• Check bed availability\n\nThis would open the center search tool.`,
      'verify-insurance': `🛡️ Insurance Verification\n\nVerify your insurance coverage:\n• Enter insurance details\n• Check coverage percentage\n• View covered services\n• See out-of-pocket costs\n• Get pre-authorization help\n\nThis would connect you with our insurance specialists.`,
      'calculate-cost': `💰 Treatment Cost Calculator\n\nEstimate your rehab costs:\n• Treatment duration (30/60/90 days)\n• Program type (Inpatient/Outpatient)\n• Insurance coverage deduction\n• Payment plan options\n• Total investment breakdown\n\nThis would open the cost estimation tool.`,
      'compare-programs': `⚖️ Program Comparison Tool\n\nCompare treatment programs:\n• Medical detox vs. standard\n• Inpatient vs. outpatient\n• 30/60/90-day programs\n• Holistic vs. traditional\n• Dual diagnosis options\n\nThis would open the comparison interface.`,
      'prepare-admission': `🧳 Admission Preparation Guide\n\nGet ready for rehab:\n• What to pack checklist\n• Required documents list\n• Pre-admission medical forms\n• Family notification guide\n• First day expectations\n\nThis would provide a complete preparation guide.`,
      'virtual-tour': `🎥 Facility Virtual Tour\n\nExplore our facilities:\n• Private rooms & accommodations\n• Therapy and counseling areas\n• Recreation & fitness facilities\n• Dining and common areas\n• Schedule live tour\n\nThis would start a 360° virtual tour.`,
      'family-resources': `👨‍👩‍👧 Family Support Resources\n\nSupport for your loved ones:\n• Family therapy sessions\n• Visitation guidelines\n• Communication tips\n• Educational materials\n• Family weekend programs\n\nThis would open the family resources portal.`
    }
    
    alert(messages[tool.action] || `Launching ${tool.name}...`)
    
    // In production, these would open actual tool interfaces
    // You could navigate to dedicated pages or open modals with full functionality
  }

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
      const response = await fetch('http://localhost:3000/api/newsletter/subscribe', {
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
      <section className="resources-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Recovery Resources</h1>
            <p className="hero-subtitle">
              Access valuable tools, guides, and support to empower your recovery journey
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="emergency-banner">
        <div className="container">
          <div className="emergency-content">
            <i className="fas fa-exclamation-triangle"></i>
            <div>
              <h3>In Crisis? Get Help Now</h3>
              <p>If you're experiencing a mental health emergency, call 988 or text HOME to 741741</p>
            </div>
            <button className="btn-emergency">
              <i className="fas fa-phone"></i>
              Call 988
            </button>
          </div>
        </div>
      </section>

      {/* Resource Tabs */}
      <section className="resources-content">
        <div className="container">
          <div className="resource-tabs">
            <button 
              className={`tab-btn ${activeTab === 'guides' ? 'active' : ''}`}
              onClick={() => {
                console.log('Guides clicked')
                setActiveTab('guides')
              }}
            >
              <i className="fas fa-book"></i>
              Guides & Downloads
            </button>
            <button 
              className={`tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
              onClick={() => {
                console.log('Videos clicked')
                setActiveTab('videos')
              }}
            >
              <i className="fas fa-video"></i>
              Educational Videos
            </button>
            <button 
              className={`tab-btn ${activeTab === 'support' ? 'active' : ''}`}
              onClick={() => {
                console.log('Support clicked')
                setActiveTab('support')
              }}
            >
              <i className="fas fa-users"></i>
              Support Groups
            </button>
            <button 
              className={`tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
              onClick={() => {
                console.log('Tools clicked')
                setActiveTab('tools')
              }}
            >
              <i className="fas fa-tools"></i>
              Recovery Tools
            </button>
          </div>

          <div style={{ minHeight: '400px', padding: '20px 0' }}>
            {/* Debug info */}
            <div style={{ 
              textAlign: 'center', 
              padding: '15px', 
              background: '#e3f2fd', 
              marginBottom: '30px', 
              borderRadius: '8px',
              border: '2px solid #2196f3',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#1976d2'
            }}>
              🎯 Active Tab: <span style={{ color: '#d32f2f', fontSize: '18px' }}>{activeTab.toUpperCase()}</span> | 
              Videos: {videos.length} | 
              Guides: {guides.length} | 
              Support Groups: {supportGroups.length} | 
              Tools: {tools.length}
            </div>

            {/* Guides Tab */}
            {activeTab === 'guides' && (
              <div className="tab-content" key="guides-content">
                {console.log('🎨 RENDERING GUIDES TAB', guides.length, 'guides')}
                <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#2c3e50', fontSize: '2rem' }}>
                  📚 Downloadable Guides & Resources
                </h2>
                {guides.length === 0 ? (
                  <p style={{ textAlign: 'center', fontSize: '18px', color: '#666' }}>No guides available</p>
                ) : (
                  <div className="resources-grid">
                    {guides.map(guide => {
                      console.log('Rendering guide:', guide.title)
                      return (
                        <div key={guide.id} className="resource-card">
                          <div className="resource-icon">
                            <i className={`fas ${guide.icon}`}></i>
                          </div>
                          <span className="resource-category">{guide.category}</span>
                          <h3>{guide.title}</h3>
                          <p>{guide.description}</p>
                          <div className="resource-footer">
                            <span className="file-size">
                              <i className="fas fa-file-pdf"></i> {guide.size}
                            </span>
                          </div>
                          <button 
                            className="btn-download"
                            onClick={() => handleDownload(guide)}
                          >
                            <i className="fas fa-download"></i>
                            Download PDF
                          </button>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Videos Tab */}
            {activeTab === 'videos' && (
              <div className="tab-content" key="videos-content">
                {console.log('🎬 RENDERING VIDEOS TAB', videos.length, 'videos')}
                <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#2c3e50', fontSize: '2rem' }}>
                  🎥 Educational Recovery Videos
                </h2>
                {videos.length === 0 ? (
                  <p style={{ textAlign: 'center', fontSize: '18px', color: '#666' }}>No videos available</p>
                ) : (
                  <div className="video-grid">
                    {videos.map(video => {
                      console.log('Rendering video:', video.title)
                      return (
                        <div 
                          key={video.id} 
                          className="video-card"
                          onClick={() => handleVideoClick(video)}
                          style={{ cursor: 'pointer' }}
                        >
                          <div 
                            className="video-thumbnail"
                            style={{ background: video.thumbnailGradient }}
                          >
                            <div className="thumbnail-icon-wrapper">
                              <i className={`fas ${video.thumbnailIcon}`}></i>
                            </div>
                            <div className="video-overlay">
                              <i className="fas fa-play-circle"></i>
                            </div>
                            <span className="video-duration">{video.duration}</span>
                          </div>
                          <div className="video-info">
                            <span className="video-category">{video.category}</span>
                            <h3>{video.title}</h3>
                            <p className="video-description">{video.description}</p>
                            <p className="video-meta">
                              <i className="fas fa-eye"></i> {video.views} views
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Support Groups Tab */}
            {activeTab === 'support' && (
              <div className="tab-content" key="support-content">
                {console.log('👥 RENDERING SUPPORT TAB', supportGroups.length, 'groups')}
                <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#2c3e50', fontSize: '2rem' }}>
                  👥 Recovery Support Groups
                </h2>
                {supportGroups.length === 0 ? (
                  <p style={{ textAlign: 'center', fontSize: '18px', color: '#666' }}>No support groups available</p>
                ) : (
                  <div className="support-list">
                    {supportGroups.map(group => {
                      console.log('Rendering group:', group.name)
                      return (
                        <div key={group.id} className="support-card">
                          <div className="support-icon">
                            <i className={`fas ${group.icon}`}></i>
                          </div>
                          <div className="support-info">
                            <h3>{group.name}</h3>
                            <p>{group.description}</p>
                            <div className="support-meta">
                              <span><i className="fas fa-clock"></i> {group.schedule}</span>
                              <span><i className="fas fa-globe"></i> {group.contact}</span>
                              {group.phone && (
                                <span><i className="fas fa-phone"></i> {group.phone}</span>
                              )}
                            </div>
                          </div>
                          <button 
                            className="btn-secondary"
                            onClick={() => handleVisitWebsite(group.website)}
                          >
                            <i className="fas fa-external-link-alt"></i>
                            Visit Website
                          </button>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Tools Tab */}
            {activeTab === 'tools' && (
              <div className="tab-content" key="tools-content">
                {console.log('🛠️ RENDERING TOOLS TAB', tools.length, 'tools')}
                <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#2c3e50', fontSize: '2rem' }}>
                  🛠️ Interactive Recovery Tools
                </h2>
                {tools.length === 0 ? (
                  <p style={{ textAlign: 'center', fontSize: '18px', color: '#666' }}>No tools available</p>
                ) : (
                  <div className="tools-grid">
                    {tools.map(tool => {
                      console.log('Rendering tool:', tool.name)
                      return (
                        <div key={tool.id} className="tool-card">
                          <i 
                            className={`fas ${tool.icon}`}
                            style={{ color: tool.color }}
                          ></i>
                          <h3>{tool.name}</h3>
                          <p>{tool.description}</p>
                          <button 
                            className="btn-primary"
                            onClick={() => handleLaunchTool(tool)}
                            style={{ 
                              background: `linear-gradient(135deg, ${tool.color}, ${tool.color}dd)` 
                            }}
                          >
                            <i className="fas fa-rocket"></i>
                            Launch Tool
                          </button>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="emergency-contacts-section">
        <div className="container">
          <h2>Emergency & Crisis Resources</h2>
          <p className="section-subtitle">Available 24/7 - You're never alone</p>
          <div className="contacts-grid">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="contact-card">
                <i className={`fas ${contact.icon}`}></i>
                <h3>{contact.name}</h3>
                <a href={`tel:${contact.number}`} className="contact-number">{contact.number}</a>
                <p>{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories-section">
        <div className="container">
          <div className="section-header">
            <h2>Recovery Success Stories</h2>
            <p>Real people, real recovery, real hope</p>
          </div>
          <div className="stories-grid">
            {successStories.map(story => (
              <div key={story.id} className="story-card">
                <div className="story-avatar">{story.image}</div>
                <div className="story-content">
                  <h3>{story.name}</h3>
                  <span className="story-badge">{story.duration}</span>
                  <p className="story-text">"{story.story}"</p>
                  <span className="story-location">
                    <i className="fas fa-map-marker-alt"></i> {story.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="featured-articles-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Articles & Insights</h2>
            <p>Evidence-based information to support your journey</p>
          </div>
          <div className="articles-grid">
            {articles.map(article => (
              <div key={article.id} className={`article-card ${expandedArticles[article.id] ? 'expanded' : ''}`}>
                <div className="article-icon">
                  <i className={`fas ${article.icon}`}></i>
                </div>
                <span className="article-category">{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                
                {/* Expandable Full Content */}
                <div className={`article-full-content ${expandedArticles[article.id] ? 'show' : ''}`}>
                  {article.fullContent.split('\n').map((paragraph, idx) => {
                    const trimmed = paragraph.trim()
                    if (!trimmed) return null
                    
                    // Check if it's a heading (starts with **)
                    if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                      return <h4 key={idx}>{trimmed.replace(/\*\*/g, '')}</h4>
                    }
                    
                    // Check if it's a numbered/bulleted list item
                    if (/^[\d]+\./.test(trimmed) || trimmed.startsWith('-')) {
                      return <li key={idx}>{trimmed.replace(/^[\d]+\.\s*\*\*/, '').replace(/\*\*/g, '')}</li>
                    }
                    
                    // Regular paragraph - handle bold text
                    return <p key={idx} dangerouslySetInnerHTML={{
                      __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    }} />
                  })}
                </div>
                
                <div className="article-footer">
                  <span className="read-time">
                    <i className="fas fa-clock"></i> {article.readTime}
                  </span>
                  <button 
                    className="read-more-btn"
                    onClick={() => toggleArticle(article.id)}
                  >
                    {expandedArticles[article.id] ? (
                      <>Show Less <i className="fas fa-arrow-up"></i></>
                    ) : (
                      <>Read More <i className="fas fa-arrow-right"></i></>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worksheets Section */}
      <section className="worksheets-section">
        <div className="container">
          <div className="section-header">
            <h2>Downloadable Worksheets</h2>
            <p>Practical tools to support your daily recovery work</p>
          </div>
          <div className="worksheets-grid">
            {worksheets.map(worksheet => (
              <div key={worksheet.id} className={`worksheet-card ${expandedWorksheets[worksheet.id] ? 'expanded' : ''}`}>
                <div className="worksheet-icon" style={{ background: `linear-gradient(135deg, ${worksheet.color}, ${worksheet.color}dd)` }}>
                  <i className="fas fa-file-download"></i>
                </div>
                <h3>{worksheet.title}</h3>
                <p>{worksheet.description}</p>
                <div className="worksheet-meta">
                  <span><i className="fas fa-file-pdf"></i> {worksheet.type}</span>
                  <span><i className="fas fa-book-open"></i> {worksheet.pages}</span>
                </div>

                {/* Expandable Preview Content */}
                <div className={`worksheet-preview ${expandedWorksheets[worksheet.id] ? 'show' : ''}`}>
                  <div className="preview-section">
                    <h4><i className="fas fa-info-circle"></i> What's Inside</h4>
                    <p>{worksheet.preview}</p>
                  </div>
                  
                  <div className="preview-section">
                    <h4><i className="fas fa-list-check"></i> Features Included</h4>
                    <ul className="feature-list">
                      {worksheet.features.map((feature, idx) => (
                        <li key={idx}>
                          <i className="fas fa-check-circle" style={{ color: worksheet.color }}></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="preview-section">
                    <h4><i className="fas fa-heart"></i> Key Benefits</h4>
                    <ul className="benefit-list">
                      {worksheet.benefits.map((benefit, idx) => (
                        <li key={idx}>
                          <i className="fas fa-star" style={{ color: worksheet.color }}></i>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="worksheet-actions">
                  <button 
                    className="btn-preview"
                    onClick={() => toggleWorksheet(worksheet.id)}
                  >
                    <i className={`fas fa-${expandedWorksheets[worksheet.id] ? 'eye-slash' : 'eye'}`}></i>
                    {expandedWorksheets[worksheet.id] ? 'Hide Details' : 'View Details'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Resources */}
      <section className="professional-resources-section">
        <div className="container">
          <div className="professional-content">
            <div className="professional-text">
              <h2>Resources for Healthcare Professionals</h2>
              <p>Access specialized tools, research, and training materials for addiction treatment professionals.</p>
              <ul className="professional-list">
                <li><i className="fas fa-check-circle"></i> Clinical guidelines & protocols</li>
                <li><i className="fas fa-check-circle"></i> Continuing education materials</li>
                <li><i className="fas fa-check-circle"></i> Patient assessment tools</li>
                <li><i className="fas fa-check-circle"></i> Research & evidence-based practices</li>
              </ul>
              <button className="btn-primary">
                Access Professional Portal
              </button>
            </div>
            <div className="professional-image">
              <i className="fas fa-user-md"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Myth Busters Section */}
      <section className="myth-busters-section">
        <div className="container">
          <div className="section-header">
            <h2>Myth Busters</h2>
            <p>Separating fact from fiction about addiction and recovery</p>
          </div>
          <div className="myths-grid">
            {myths.map((item) => (
              <div 
                key={item.id} 
                className={`myth-card ${flippedCards[item.id] ? 'flipped' : ''}`}
                onClick={() => toggleFlip(item.id)}
              >
                <div className="myth-card-inner">
                  {/* Front Side - Myth */}
                  <div className="myth-card-front" style={{ borderColor: item.color }}>
                    <div className="myth-icon" style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)` }}>
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div className="myth-label">MYTH ❌</div>
                    <h3>{item.myth}</h3>
                    <div className="click-hint">
                      <i className="fas fa-hand-pointer"></i>
                      Click to reveal the truth
                    </div>
                  </div>
                  
                  {/* Back Side - Reality */}
                  <div className="myth-card-back" style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)` }}>
                    <div className="reality-icon">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="reality-label">REALITY ✅</div>
                    <p>{item.reality}</p>
                    <div className="click-hint">
                      <i className="fas fa-redo"></i>
                      Click to see myth again
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Progress Visualizer */}
      <section className="recovery-visualizer-section">
        <div className="container">
          <div className="section-header">
            <h2>Recovery Progress Visualizer</h2>
            <p>Understanding the stages of healing and growth in recovery</p>
          </div>

          {/* Timeline Navigation */}
          <div className="timeline-nav">
            {recoveryPhases.map((phase, index) => (
              <div 
                key={phase.id}
                className={`timeline-step ${activePhase === index ? 'active' : ''} ${index < activePhase ? 'completed' : ''}`}
                onClick={() => setActivePhase(index)}
              >
                <div className="step-icon" style={{ background: phase.color }}>
                  <i className={`fas ${phase.icon}`}></i>
                </div>
                <div className="step-info">
                  <div className="step-number">Phase {phase.id}</div>
                  <div className="step-name">{phase.phase}</div>
                  <div className="step-timeline">{phase.timeline}</div>
                </div>
                {index < recoveryPhases.length - 1 && (
                  <div className={`step-connector ${index < activePhase ? 'completed' : ''}`}></div>
                )}
              </div>
            ))}
          </div>

          {/* Phase Details */}
          <div className="phase-details">
            {recoveryPhases.map((phase, index) => (
              <div 
                key={phase.id}
                className={`phase-content ${activePhase === index ? 'active' : ''}`}
              >
                <div className="phase-grid">
                  {/* Physical Healing */}
                  <div className="phase-card">
                    <div className="phase-card-header" style={{ background: `linear-gradient(135deg, ${phase.color}, ${phase.color}dd)` }}>
                      <i className="fas fa-heartbeat"></i>
                      <h3>Physical Healing</h3>
                    </div>
                    <ul className="phase-list">
                      {phase.physical.map((item, idx) => (
                        <li key={idx}>
                          <i className="fas fa-check-circle" style={{ color: phase.color }}></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Brain Chemistry */}
                  <div className="phase-card">
                    <div className="phase-card-header" style={{ background: `linear-gradient(135deg, ${phase.color}, ${phase.color}dd)` }}>
                      <i className="fas fa-brain"></i>
                      <h3>Brain Chemistry</h3>
                    </div>
                    <ul className="phase-list">
                      {phase.brain.map((item, idx) => (
                        <li key={idx}>
                          <i className="fas fa-check-circle" style={{ color: phase.color }}></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Relationships */}
                  <div className="phase-card">
                    <div className="phase-card-header" style={{ background: `linear-gradient(135deg, ${phase.color}, ${phase.color}dd)` }}>
                      <i className="fas fa-users"></i>
                      <h3>Relationship Rebuilding</h3>
                    </div>
                    <ul className="phase-list">
                      {phase.relationships.map((item, idx) => (
                        <li key={idx}>
                          <i className="fas fa-check-circle" style={{ color: phase.color }}></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Career & Life */}
                  <div className="phase-card">
                    <div className="phase-card-header" style={{ background: `linear-gradient(135deg, ${phase.color}, ${phase.color}dd)` }}>
                      <i className="fas fa-briefcase"></i>
                      <h3>Career & Life Reconstruction</h3>
                    </div>
                    <ul className="phase-list">
                      {phase.life.map((item, idx) => (
                        <li key={idx}>
                          <i className="fas fa-check-circle" style={{ color: phase.color }}></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="resources-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Informed</h2>
            <p>Get recovery tips, new resources, and inspiring stories delivered to your inbox</p>
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
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && selectedVideo && (
        <div className="video-modal-overlay" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideoModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="video-modal-header">
              <h2>{selectedVideo.title}</h2>
              <span className="video-modal-category">{selectedVideo.category}</span>
            </div>
            <div className="video-modal-player">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-modal-info">
              <p>{selectedVideo.description}</p>
              <div className="video-modal-meta">
                <span><i className="fas fa-clock"></i> {selectedVideo.duration}</span>
                <span><i className="fas fa-eye"></i> {selectedVideo.views} views</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}

export default Resources
