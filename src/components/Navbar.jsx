import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container container">
        <a 
          href="#inicio" 
          className="navbar-logo-mobile"
          onClick={(e) => handleNavClick(e, 'inicio')}
        >
          <img 
            src="/source/img/logo_trasparente_angulado.png" 
            alt="Tours Con Amigos Logo" 
          />
        </a>

        <button 
          className="navbar-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')}>Inicio</a></li>
          <li><a href="#viajes" onClick={(e) => handleNavClick(e, 'viajes')}>Viajes</a></li>
          <li><a href="#paquetes" onClick={(e) => handleNavClick(e, 'paquetes')}>Paquetes</a></li>
          
          <li className="navbar-logo-item">
            <a 
              href="#inicio" 
              className="navbar-logo"
              onClick={(e) => handleNavClick(e, 'inicio')}
            >
              <img 
                src="/source/img/logo_trasparente_angulado.png" 
                alt="Tours Con Amigos Logo" 
              />
            </a>
          </li>
          
          <li><a href="#educativos" onClick={(e) => handleNavClick(e, 'educativos')}>Educativos</a></li>
          <li><a href="#nosotros" onClick={(e) => handleNavClick(e, 'nosotros')}>Nosotros</a></li>
          <li><a href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
