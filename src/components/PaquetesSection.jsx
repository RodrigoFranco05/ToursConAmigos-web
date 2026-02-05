import React from 'react'
import { paquetes } from '../data/paquetes'
import './PaquetesSection.css'

const PaquetesSection = () => {
  const handleConsultar = () => {
    const contactSection = document.getElementById('contacto')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="paquetes" className="paquetes-section section">
      <div className="container">
        <div className="section-header text-center mb-lg">
          <h2>Paquetes Destacados</h2>
          <p>Próximos viajes con todo incluido</p>
        </div>

        <div className="paquetes-grid">
          {paquetes.map((paquete) => (
            <div key={paquete.id} className="paquete-card card">
              <div className="paquete-image">
                <img src={paquete.imagen} alt={paquete.destino} />
              </div>
              <div className="paquete-content">
                <h3>{paquete.destino}</h3>
                <div className="paquete-info">
                  <p className="paquete-fechas">📅 {paquete.fechas}</p>
                  <p className="paquete-precio">💰 {paquete.precio}</p>
                </div>
                <p className="paquete-descripcion">{paquete.descripcion}</p>
                <button 
                  className="btn btn-primary"
                  onClick={handleConsultar}
                >
                  Consultar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PaquetesSection
