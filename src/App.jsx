import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PremiumCenters from './pages/PremiumCenters'
import CenterDetails from './pages/CenterDetails'
import Programs from './pages/Programs'
import ProgramDetail from './pages/ProgramDetail'
import Resources from './pages/Resources'
import Communities from './pages/Communities'
import DrugGuide from './pages/DrugGuide'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import Advertise from './pages/Advertise'
import Login from './pages/Login'
import Register from './pages/Register'
import LiveChat from './components/LiveChat'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/premium-centers" element={<PremiumCenters />} />
          <Route path="/center/:id" element={<CenterDetails />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/program/:id" element={<ProgramDetail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/drug-guide" element={<DrugGuide />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
        {/* Global Live Chat - Available on all pages */}
        <LiveChat />
      </div>
    </Router>
  )
}

export default App
