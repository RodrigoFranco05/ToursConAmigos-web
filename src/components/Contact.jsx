import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa'
import { contactData } from '../data/contactData'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (isSubmitting) return
    
    if (!formData.name || !formData.email) {
      setStatus({ type: 'error', message: 'Por favor completa todos los campos obligatorios.' })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      // Ejecutar reCAPTCHA v3
      if (typeof grecaptcha !== 'undefined') {
        grecaptcha.ready(async () => {
          try {
            const token = await grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action: 'submit' })
            
            // Enviar email con EmailJS
            const templateParams = {
              from_name: formData.name,
              from_email: formData.email,
              phone: formData.phone || 'No proporcionado',
              message: formData.message,
              'g-recaptcha-response': token
            }

            await emailjs.send(
              import.meta.env.VITE_EMAILJS_SERVICE_ID,
              import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
              templateParams,
              import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

            setStatus({ type: 'success', message: '¡Mensaje enviado con éxito! Te responderemos pronto.' })
            setFormData({ name: '', email: '', phone: '', message: '' })
          } catch (error) {
            console.error('Error:', error)
            setStatus({ type: 'error', message: 'Error al enviar el mensaje. Por favor intenta nuevamente.' })
          } finally {
            setIsSubmitting(false)
          }
        })
      } else {
        // Si reCAPTCHA no está disponible
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'No proporcionado',
          message: formData.message
        }

        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )

        setStatus({ type: 'success', message: '¡Mensaje enviado con éxito! Te responderemos pronto.' })
        setFormData({ name: '', email: '', phone: '', message: '' })
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus({ type: 'error', message: 'Error al enviar el mensaje. Por favor intenta nuevamente.' })
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="contact-section section">
      <div className="container">
        <div className="section-header text-center mb-lg">
          <h2>Contacto</h2>
          <p>Estamos para ayudarte a planificar tu próximo viaje</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            
            <div className="contact-item">
              <a href={contactData.whatsapp.link} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
                <span>{contactData.whatsapp.numero}</span>
              </a>
            </div>

            <div className="contact-item">
              <a href={contactData.telefono.link}>
                <FaPhone />
                <span>{contactData.telefono.numero}</span>
              </a>
            </div>

            <div className="contact-item">
              <a href={contactData.email.link}>
                <FaEnvelope />
                <span>{contactData.email.direccion}</span>
              </a>
            </div>

            <div className="contact-item">
              <a href={contactData.direccion.link} target="_blank" rel="noopener noreferrer">
                <FaMapMarkerAlt />
                <span>{contactData.direccion.texto}</span>
              </a>
            </div>

            <div className="contact-item">
              <FaClock />
              <span>{contactData.horarios}</span>
            </div>

            <div className="contact-social">
              <a href={contactData.redes.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href={contactData.redes.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Envianos tu Consulta</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
