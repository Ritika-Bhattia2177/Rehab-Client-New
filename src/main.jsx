import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './assets/css/main.css'
import './assets/css/components.css'
import './assets/css/pages.css'
import './assets/css/responsive.css'
import './assets/css/livechat.css'
import './assets/css/modal.css'

// Import SEO checker for development/testing
import './utils/seoChecker'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
