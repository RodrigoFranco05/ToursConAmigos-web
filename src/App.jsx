import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DestinosSection from './components/DestinosSection'
import PaquetesSection from './components/PaquetesSection'
import EducationalSection from './components/EducationalSection'
import WhyUs from './components/WhyUs'
import About from './components/About'
import InstagramEmbed from './components/InstagramEmbed'
import Contact from './components/Contact'
import MapEmbed from './components/MapEmbed'
import PreFooter from './components/PreFooter'
import Footer from './components/Footer'
import StickyWhatsApp from './components/StickyWhatsApp'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DestinosSection />
        <PaquetesSection />
        <EducationalSection />
        <WhyUs />
        <About />
        <InstagramEmbed />
        <Contact />
        <MapEmbed />
        <PreFooter />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}

export default App
