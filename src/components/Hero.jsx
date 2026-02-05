import React from 'react'
import './Hero.css'
import logo from '/source/img/logo_trasparente_angulado.png'

const Hero = () => {
  const handleScrollTo = (targetId) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero-pattern"></div>
      <div className="hero-container container">
        <div className="hero-content">
          <h1 className="hero-title">
            <img 
              src={logo}
              alt="Tours Con Amigos" 
              className="hero-logo"
            />
          </h1>
          <p className="hero-subtitle">
          Descubrí nuevos lugares, experiencias y momentos inolvidables junto a tu escuela o grupo.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => handleScrollTo('contacto')}
            >
              Consultar
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => handleScrollTo('paquetes')}
            >
              Ver Paquetes
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="" 
            alt="" 
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
