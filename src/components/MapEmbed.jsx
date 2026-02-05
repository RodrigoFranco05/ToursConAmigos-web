import React from 'react'
import './MapEmbed.css'

const MapEmbed = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4180.016477183931!2d-60.690229916943736!3d-31.63131062998214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a90076dff209%3A0xb156f1cc40ec5e84!2sTOUR%20CON%20AMIGOS!5e1!3m2!1ses!2sar!4v1770224909793!5m2!1ses!2sar" 
          width="100%" 
          height="450" 
          style={{border: 0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Tours Con Amigos"
        ></iframe>
      </div>
    </section>
  )
}

export default MapEmbed
