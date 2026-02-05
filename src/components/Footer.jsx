import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { contactData } from '../data/contactData'
import './Footer.css'
import logo from '/source/img/logo_trasparente_angulado.png'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (targetId) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-column">
          <img 
            src={logo}
            alt="Tours Con Amigos" 
            className="footer-logo"
          />
          <p className="footer-description">
            Tu agencia de confianza para viajes grupales educativos y recreativos en Santa Fe.
          </p>
          <p className="footer-description">
            Legajo RNAV Nº 18921
          </p>
          <div className="footer-social">
            <a href={contactData.redes.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href={contactData.redes.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href={contactData.whatsapp.link} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Navegación</h4>
          <ul className="footer-links">
            <li><button onClick={() => handleNavClick('inicio')}>Inicio</button></li>
            <li><button onClick={() => handleNavClick('viajes')}>Viajes</button></li>
            <li><button onClick={() => handleNavClick('paquetes')}>Paquetes</button></li>
            <li><button onClick={() => handleNavClick('educativos')}>Educativos</button></li>
            <li><button onClick={() => handleNavClick('nosotros')}>Nosotros</button></li>
            <li><button onClick={() => handleNavClick('contacto')}>Contacto</button></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contacto</h4>
          <ul className="footer-contact">
            <li>
              <FaWhatsapp />
              <a href={contactData.whatsapp.link} target="_blank" rel="noopener noreferrer">
                {contactData.whatsapp.numero}
              </a>
            </li>
            <li>
              <FaEnvelope />
              <a href={contactData.email.link}>{contactData.email.direccion}</a>
            </li>
            <li>
              <FaMapMarkerAlt />
              <span>{contactData.direccion.texto}</span>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Horarios</h4>
          <p className="footer-horarios-text">{contactData.horarios}</p>
        </div>
      </div>

      <div className="footer-scroll-top-wrapper">
        <button className="footer-scroll-top" onClick={scrollToTop}>
          ↑ Volver arriba
        </button>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Tours Con Amigos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
