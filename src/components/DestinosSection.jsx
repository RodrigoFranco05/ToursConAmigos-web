import React from 'react'
import { destinos } from '../data/destinos'
import './DestinosSection.css'

const DestinosSection = () => {
  return (
    <section id="viajes" className="destinos-section section">
      <div className="container">
        <div className="section-header text-center mb-lg">
          <h2>Nuestros Destinos</h2>
          <p>Descubrí los mejores lugares para tu próximo viaje</p>
        </div>

        <div className="destinos-grid">
          {destinos.map((destino) => (
            <div key={destino.id} className="destino-card card">
              <div className="destino-image">
                <img src={destino.imagen} alt={destino.nombre} />
              </div>
              <div className="destino-content">
                <h3>{destino.nombre}</h3>
                <p>{destino.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DestinosSection
