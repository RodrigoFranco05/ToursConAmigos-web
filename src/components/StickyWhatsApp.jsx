import React, { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { contactData } from '../data/contactData'
import './StickyWhatsApp.css'

const StickyWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <a
      href={contactData.whatsapp.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`sticky-whatsapp ${isVisible ? 'visible' : ''}`}
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp />
      <span className="whatsapp-tooltip">¡Consultanos!</span>
    </a>
  )
}

export default StickyWhatsApp
