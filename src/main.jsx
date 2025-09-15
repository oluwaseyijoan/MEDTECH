import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import About from './pages/about.jsx' 
import Contact from './pages/contact.jsx'
import DoctorsDashboard from './pages/doctorsDashboard.jsx'
import Services from './pages/services.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/doctorsDashboard" element={<DoctorsDashboard />} /> 
        <Route path="/services" element={<Services />} /> 
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
