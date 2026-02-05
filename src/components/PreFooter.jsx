import React from 'react'
import './PreFooter.css'

const PreFooter = () => {
  return (
    <section className="prefooter-section">
      <div className="prefooter-overlay"></div>
      <div className="prefooter-content">
        <h2>¡Viajes educativos con Tour con Amigos!</h2>
        <p className="prefooter-hashtag">Aprender, explorar y disfrutar en cada destino</p>
        <button 
          className="btn btn-primary btn-lg"
          onClick={() => {
            const contactSection = document.getElementById('contacto')
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          Comenzá tu aventura
        </button>
      </div>
    </section>
  )
}

export default PreFooter
