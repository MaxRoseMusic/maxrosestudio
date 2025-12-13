import { useState, FormEvent } from 'react'
import './Contact.css'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('https://formspree.io/f/xkgdyqdr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <div className="contact__wrapper">
          <div className="contact__info">
            <h3>Travaillons ensemble</h3>
            <p>
              Vous avez un projet musical ? N'hésitez pas à me contacter
              pour discuter de vos idées et de la façon dont je peux vous
              accompagner dans votre création.
            </p>
            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-icon">📍</span>
                <span>Paris, France</span>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">✉️</span>
                <span>contact@maxrose.studio</span>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="name">Nom *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div className="contact__form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Votre message"
              />
            </div>

            <button
              type="submit"
              className="contact__submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Envoi en cours...' : 'Envoyer'}
            </button>

            {status === 'success' && (
              <p className="contact__message contact__message--success">
                Message envoyé avec succès ! Je vous répondrai rapidement.
              </p>
            )}

            {status === 'error' && (
              <p className="contact__message contact__message--error">
                Une erreur est survenue. Veuillez réessayer.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
