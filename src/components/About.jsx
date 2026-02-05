import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { stats } from '../data/stats'
import './About.css'

const StatCounter = ({ numero, sufijo, descripcion }) => {
  const [count, ref] = useCounter(numero, 2000, 0)
  
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'k'
    }
    return num
  }

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">
        {formatNumber(count)}{sufijo}
      </div>
      <div className="stat-description">{descripcion}</div>
    </div>
  )
}

const About = () => {
  return (
    <section id="nosotros" className="about-section section">
      <div className="container">
        <div className="section-header text-center mb-lg">
          <h2>Quiénes Somos</h2>
          <p>Tu agencia de confianza en Santa Fe</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-item">
              <h3>Nuestra Misión</h3>
              <p>
                Crear experiencias de viaje inolvidables que conecten a las personas con nuevos destinos, 
                culturas y vivencias. Nos especializamos en viajes grupales educativos y recreativos, 
                poniendo siempre en primer lugar la seguridad y satisfacción de nuestros pasajeros.
              </p>
            </div>

            <div className="about-item">
              <h3>Nuestra Visión</h3>
              <p>
                Ser la agencia de turismo líder en Santa Fe y la región, reconocida por la calidad 
                de nuestros servicios, la calidez de nuestro equipo y la excelencia en cada detalle 
                de nuestros viajes.
              </p>
            </div>

            <div className="about-item">
              <h3>Nuestra Filosofía</h3>
              <p>
                Creemos que viajar es más que trasladarse de un lugar a otro. Es crear momentos, 
                construir recuerdos y compartir experiencias. Por eso, cada viaje que organizamos 
                está diseñado con dedicación, profesionalismo y mucho corazón.
              </p>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat) => (
              <StatCounter
                key={stat.id}
                numero={stat.numero}
                sufijo={stat.sufijo}
                descripcion={stat.descripcion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
