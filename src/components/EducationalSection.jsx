import React from 'react'
import { FaBus, FaStar, FaGraduationCap } from 'react-icons/fa'
import { educationalInfo } from '../data/educational'
import './EducationalSection.css'

const iconMap = {
  FaBus: FaBus,
  FaStar: FaStar,
  FaGraduationCap: FaGraduationCap
}

const EducationalSection = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contacto')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="educativos" className="educational-section section">
      <div className="container">
        <div className="section-header text-center mb-lg">
          <h2>Viajes Educativos</h2>
          <p>Aprender viajando es posible</p>
        </div>

        <div className="educational-content">
          <div className="educational-cards">
            {educationalInfo.map((info) => {
              const IconComponent = iconMap[info.icono]
              return (
                <div key={info.id} className="educational-card">
                  <div className="educational-icon">
                    {IconComponent && <IconComponent />}
                  </div>
                  <h3>{info.titulo}</h3>
                  <p>{info.descripcion}</p>
                </div>
              )
            })}
          </div>

          <div className="educational-cta">
            <button 
              className="btn btn-primary btn-lg"
              onClick={handleScrollToContact}
            >
              Consultá por tu grupo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationalSection
