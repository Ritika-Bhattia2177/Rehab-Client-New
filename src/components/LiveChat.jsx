import React, { useState, useEffect, useRef } from 'react'

function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: '👋 Hello! Welcome to HopePath Recovery.\n\nI\'m here to help you 24/7. Whether you\'re seeking treatment for yourself or a loved one, you\'ve taken a brave first step.\n\nHow can I assist you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, isMinimized])

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0)
    }
  }, [isOpen])

  const quickReplies = [
    { text: 'Treatment programs', icon: 'fa-heart' },
    { text: 'Insurance coverage', icon: 'fa-shield-alt' },
    { text: 'Admission process', icon: 'fa-clipboard-list' },
    { text: 'Speak to counselor', icon: 'fa-user-md' }
  ]

  const botResponses = {
    // Direct addiction help responses
    'addiction': 'Taking the first step to address addiction is incredibly brave. We understand what you\'re going through and we\'re here to help you recover. Our treatment approach is personalized to your specific needs and includes medical support, therapy, and ongoing care.',
    
    'help': 'We provide comprehensive addiction treatment services. This includes medical detox, individual counseling, group therapy, family support, and aftercare planning. Our programs are designed to give you the tools and support needed for lasting recovery.',
    
    'drug': 'Drug addiction recovery is possible with proper treatment. We offer medical detoxification to safely manage withdrawal symptoms, followed by therapy to address the underlying causes. Our evidence-based approach has helped many people achieve long-term sobriety.',
    
    'alcohol': 'Alcohol addiction treatment starts with safe medical detox to manage withdrawal, followed by therapy to understand triggers and develop coping strategies. We provide both residential and outpatient programs depending on your needs.',
    
    'quit': 'To successfully quit, you need professional medical support, therapy to address the root causes, and a strong support system. Our programs provide all of these elements in a structured environment. Most people complete initial treatment in 30-90 days.',
    
    'leave': 'Leaving addiction behind requires comprehensive treatment. We guide you through detox, therapy, life skills training, and aftercare planning. The journey is challenging but absolutely achievable with proper support.',
    
    'stop': 'Stopping substance use safely requires medical supervision, especially during withdrawal. Our team manages the physical aspects while therapists help you understand and overcome the psychological dependence. Recovery is a process, not an event.',
    
    'overcome': 'Overcoming addiction involves treating both the physical dependency and psychological patterns. Through individual therapy, group counseling, and medical support, you learn to identify triggers, develop coping skills, and build a life in recovery.',
    
    'relapse': 'Relapse is a common part of recovery and doesn\'t mean failure. What\'s important is returning to treatment. We help you identify what led to the relapse, strengthen your coping strategies, and reinforce your recovery plan.',
    
    'detox': 'Medical detox is the first step where we safely manage withdrawal symptoms using medication and 24/7 medical monitoring. It typically takes 5-10 days depending on the substance. After detox, you transition to therapy and counseling.',
    
    'withdraw': 'Withdrawal symptoms vary by substance but can include physical discomfort, anxiety, and cravings. Our medical team manages these symptoms with appropriate medications and monitoring to keep you safe and as comfortable as possible throughout the process.',
    
    'scared': 'It\'s normal to feel scared about treatment. Many people do initially. Once you\'re here, you\'ll be in a supportive environment with staff and peers who understand. Treatment is about healing, not punishment. You\'ll have privacy, dignity, and care throughout.',
    
    'afraid': 'Fear is a natural response to change. Treatment isn\'t scary - it\'s actually a safe space where you can focus entirely on healing. You\'ll have structure, support, and people who genuinely care about your recovery.',
    
    'family': 'Family involvement is encouraged and beneficial. We offer family therapy sessions, education programs to help them understand addiction, and family visitation. Healing these relationships is an important part of recovery.',
    
    'cost': 'Most treatment is covered by insurance. We accept major insurance plans and can verify your benefits at no cost. For those without insurance, we offer payment plans and financial assistance. Cost should not prevent you from getting help.',
    
    'price': 'Treatment costs vary by program length and level of care. Insurance typically covers most or all of the cost. We can provide a detailed breakdown after verifying your insurance benefits.',
    
    'afford': 'We work with you to make treatment affordable. Insurance coverage, payment plans, and financial assistance are all available. Our goal is to ensure cost doesn\'t prevent anyone from getting the help they need.',
    
    'insurance': 'We accept most major insurance providers including Blue Cross, Aetna, Cigna, United Healthcare, and many others. We can verify your specific benefits and out-of-pocket costs within 24 hours.',
    
    'treatment': 'Our treatment programs include residential (inpatient), intensive outpatient, and partial hospitalization options. Each combines medical care, individual therapy, group counseling, life skills training, and aftercare planning tailored to your needs.',
    
    'program': 'Programs range from 30 to 90 days for residential treatment, with continuing care afterwards. We also offer outpatient programs for those who need flexibility. The right program depends on your individual situation and substance use history.',
    
    'rehab': 'Rehab provides a structured environment away from triggers where you can focus entirely on recovery. You\'ll receive medical care, therapy, learn coping skills, and build a foundation for long-term sobriety.',
    
    'admission': 'Admission typically happens within 24-48 hours of your initial consultation. We complete an assessment, verify insurance, create your treatment plan, and coordinate your arrival. The process is straightforward and we guide you through each step.',
    
    'counselor': 'Our counselors are licensed professionals specializing in addiction treatment. They provide individual therapy, help you understand your addiction, develop coping strategies, and support you through recovery. You\'ll work closely with your counselor throughout treatment.',
    
    'therapist': 'Therapists use evidence-based approaches like cognitive behavioral therapy and motivational interviewing. Sessions focus on understanding triggers, developing healthy coping mechanisms, and addressing any co-occurring mental health issues.',
    
    'success': 'Success in recovery depends on commitment to treatment, using the tools and strategies learned, building a support network, and continuing aftercare. Many people achieve long-term sobriety through our programs.',
    
    'how long': 'Treatment duration varies by individual needs. Residential programs typically last 30-90 days. After completing residential treatment, most people continue with outpatient care for several months to a year.',
    
    'what happens': 'Treatment starts with assessment and detox if needed, then moves to therapy and counseling. Days include individual and group sessions, activities, meals, and free time. You\'ll work on understanding your addiction and building recovery skills.',
    
    'dual diagnosis': 'Dual diagnosis treatment addresses both substance abuse and mental health conditions like depression or anxiety simultaneously. This integrated approach is more effective when both conditions exist.',
    
    'mental health': 'Mental health is a key part of addiction treatment. Many people with addiction also have anxiety, depression, or trauma. We treat both together because they\'re often connected.',
    
    'confidential': 'All treatment is completely confidential and protected by HIPAA laws. What you share in therapy stays private. We take your privacy very seriously.',
    
    'work': 'Treatment works when you\'re committed and engaged. Evidence-based approaches combined with medical care and support have high success rates. Recovery is possible and many people go on to live fulfilling, sober lives.',
    
    'default': 'I\'m here to answer your questions about addiction treatment and recovery. What would you like to know?'
  }

  const getIntelligentResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Only respond to rehab/addiction related questions
    const isRehabRelated = /addiction|addict|drug|alcohol|rehab|treatment|detox|withdraw|sober|recovery|quit|stop|help|substance|opioid|cocaine|heroin|meth|pills|drinking|relapse|counselor|therapist|therapy|program|admission|cost|insurance|family|scared|afraid|mental health|dual diagnosis/i.test(lowerMessage)
    
    if (!isRehabRelated) {
      return "I'm here specifically to help with addiction treatment and recovery questions. Please ask me anything about rehab, treatment programs, or overcoming addiction."
    }
    
    // Check for crisis keywords
    if (lowerMessage.match(/suicid|kill myself|end my life|want to die|hurt myself/)) {
      return '🚨 IMMEDIATE HELP AVAILABLE:\n\nPlease call or text 988 (Suicide & Crisis Lifeline) right now.\n\nYou can also call us at 1-800-RECOVERY for immediate support.\n\nYour life matters, and help is available right now. You don\'t have to face this alone.'
    }
    
    // Direct matching - most specific first
    if (/leave.*addiction|overcome.*addiction|beat.*addiction/i.test(lowerMessage)) return botResponses.leave
    if (/how long|duration|length/i.test(lowerMessage)) return botResponses['how long']
    if (/what happens|what to expect|daily schedule/i.test(lowerMessage)) return botResponses['what happens']
    if (/dual diagnosis|depression|anxiety|ptsd|mental/i.test(lowerMessage)) return botResponses['dual diagnosis']
    if (/confidential|privacy|private|secret/i.test(lowerMessage)) return botResponses.confidential
    if (/does it work|success rate|effective/i.test(lowerMessage)) return botResponses.work
    if (/admission|admit|check in|enroll|how to start/i.test(lowerMessage)) return botResponses.admission
    if (/counselor|therapist|talk to someone/i.test(lowerMessage)) return botResponses.counselor
    if (/insurance|coverage|covered|benefits/i.test(lowerMessage)) return botResponses.insurance
    if (/cost|price|afford|expensive|payment/i.test(lowerMessage)) return botResponses.cost
    if (/family|parents|spouse|kids|relationship/i.test(lowerMessage)) return botResponses.family
    if (/scared|afraid|nervous|anxious|worried|fear/i.test(lowerMessage)) return botResponses.scared
    if (/withdraw|withdrawal/i.test(lowerMessage)) return botResponses.withdraw
    if (/detox/i.test(lowerMessage)) return botResponses.detox
    if (/relapse|relapsed|using again/i.test(lowerMessage)) return botResponses.relapse
    if (/alcohol|drinking|drunk|alcoholic/i.test(lowerMessage)) return botResponses.alcohol
    if (/drug|substance|cocaine|heroin|meth|opioid|pills/i.test(lowerMessage)) return botResponses.drug
    if (/quit|stop|leave|overcome/i.test(lowerMessage)) return botResponses.quit
    if (/program|treatment plan/i.test(lowerMessage)) return botResponses.program
    if (/treatment|therapy|rehab/i.test(lowerMessage)) return botResponses.treatment
    if (/help|need help|seeking help/i.test(lowerMessage)) return botResponses.help
    if (/addiction|addict/i.test(lowerMessage)) return botResponses.addiction
    
    return botResponses.default
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    
    if (!inputMessage.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, userMessage])
    const currentMessage = inputMessage
    setInputMessage('')
    setIsTyping(true)

    // Simulate bot response with intelligent processing
    setTimeout(() => {
      setIsTyping(false)
      
      // Get intelligent response based on user input
      const botReply = getIntelligentResponse(currentMessage)

      const botMessage = {
        id: messages.length + 2,
        sender: 'bot',
        text: botReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }

      setMessages(prev => [...prev, botMessage])
      
      // If chat is minimized or closed, increment unread count
      if (isMinimized || !isOpen) {
        setUnreadCount(prev => prev + 1)
      }
    }, 1200)
  }

  const handleQuickReply = (reply) => {
    setInputMessage(reply)
    setTimeout(() => {
      inputRef.current?.focus()
    }, 100)
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
    if (!isOpen) {
      setUnreadCount(0)
    }
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const closeChat = () => {
    setIsOpen(false)
    setIsMinimized(false)
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button 
          className="chat-floating-button"
          onClick={toggleChat}
          aria-label="Open live chat"
        >
          <i className="fas fa-comments"></i>
          {unreadCount > 0 && (
            <span className="chat-unread-badge">{unreadCount}</span>
          )}
          <span className="chat-floating-text">Chat with us</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`live-chat-widget ${isMinimized ? 'minimized' : ''}`}>
          {/* Chat Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">
                <i className="fas fa-user-nurse"></i>
                <span className="avatar-status"></span>
              </div>
              <div className="chat-header-text">
                <h3>HopePath Support</h3>
                <span className="chat-status">
                  <span className="status-dot"></span>
                  Online • Avg. response time: 2 min
                </span>
              </div>
            </div>
            <div className="chat-header-actions">
              <button 
                className="chat-action-btn" 
                onClick={toggleMinimize}
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                <i className={`fas ${isMinimized ? 'fa-window-maximize' : 'fa-minus'}`}></i>
              </button>
              <button 
                className="chat-action-btn chat-close-btn" 
                onClick={closeChat}
                aria-label="Close chat"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

          {/* Chat Body - Hidden when minimized */}
          {!isMinimized && (
            <>
              {/* Chat Messages */}
              <div className="chat-messages">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`chat-message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                  >
                    {message.sender === 'bot' && (
                      <div className="message-avatar">
                        <i className="fas fa-user-nurse"></i>
                      </div>
                    )}
                    <div className="message-content">
                      <div className="message-bubble">
                        <p style={{ whiteSpace: 'pre-line' }}>{message.text}</p>
                      </div>
                      <span className="message-time">{message.time}</span>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="chat-message bot-message">
                    <div className="message-avatar">
                      <i className="fas fa-user-nurse"></i>
                    </div>
                    <div className="message-content">
                      <div className="message-bubble typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              {messages.length <= 2 && (
                <div className="quick-replies">
                  <p className="quick-replies-label">Quick options:</p>
                  <div className="quick-replies-grid">
                    {quickReplies.map((reply, index) => (
                      <button
                        key={index}
                        className="quick-reply-btn"
                        onClick={() => handleQuickReply(reply.text)}
                      >
                        <i className={`fas ${reply.icon}`}></i>
                        {reply.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="chat-input-form">
                <div className="chat-input-wrapper">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="chat-input"
                  />
                  <button 
                    type="submit" 
                    className="chat-send-btn" 
                    disabled={!inputMessage.trim()}
                    aria-label="Send message"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
                <p className="chat-footer-text">
                  <i className="fas fa-lock"></i>
                  Secure & confidential • HIPAA compliant
                </p>
              </form>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default LiveChat
