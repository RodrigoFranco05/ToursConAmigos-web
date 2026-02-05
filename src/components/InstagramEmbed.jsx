import React from 'react'
import './InstagramEmbed.css'

const InstagramEmbed = () => {
  return (
    <section className="instagram-section section">
      <div className="container">
        <div className="section-header text-center mb-lg">
          <h2>Seguinos en Instagram</h2>
          <p>Descubrí nuestros próximos paquetes y destinos</p>
        </div>

        <div className="instagram-container">
          <iframe
            src="https://www.instagram.com/tourconamigos21/embed/"
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            title="Instagram Feed Tours Con Amigos"
          ></iframe>
        </div>

        <div className="instagram-cta">
          <a 
            href="https://www.instagram.com/tourconamigos21/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default InstagramEmbed
