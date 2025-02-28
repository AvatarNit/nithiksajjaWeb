import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavbarHeader from './components/NavbarHeader.jsx'
import ContactFooter from './components/ContactFooter.jsx'
import Home from './pages/home.jsx'
import Projects from './pages/projects.jsx'
import Links from './pages/links.jsx'
import Contact from './pages/contact.jsx'
import About from './pages/about.jsx'
import PdfViewer from './pages/pdfViewer.jsx'
import './App.css'
import pcepPDF from "./assets/pcepCert.pdf"

function App() {

  return (
    <Router>
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/links" element={<Links />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/PCEP" element={<PdfViewer pdfUrl={pcepPDF} />} />
      </Routes>
      <ContactFooter />
    </Router>
  )
}

export default App
