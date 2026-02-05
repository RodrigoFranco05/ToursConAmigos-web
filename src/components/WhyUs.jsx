import React from 'react'
import { FaUsers, FaCalendarCheck, FaHeart, FaBus, FaShieldAlt, FaStar } from 'react-icons/fa'
import { razones } from '../data/whyUs'
import './WhyUs.css'

const iconMap = {
  FaUsers: FaUsers,
  FaCalendarCheck: FaCalendarCheck,
  FaHeart: FaHeart,
  FaBus: FaBus,
  FaShieldAlt: FaShieldAlt,
  FaStar: FaStar
}

const WhyUs = () => {
  return (
    <section className="why-us-section section">
      <div className="container">
        <div className="section-header text-center mb-lg">
          <h2>¿Por qué elegirnos?</h2>
          <p>Nuestro compromiso con cada viaje</p>
        </div>

        <div className="reasons-grid">
          {razones.map((razon) => {
            const IconComponent = iconMap[razon.icono]
            return (
              <div key={razon.id} className="reason-card">
                <div className="reason-icon">
                  {IconComponent && <IconComponent />}
                </div>
                <h3>{razon.titulo}</h3>
                <p>{razon.descripcion}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
