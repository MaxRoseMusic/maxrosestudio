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
            Un projet, une idée, ou simplement une envie d’échanger&nbsp;?
            <br />
            Je serais ravi d'en savoir un peu plus sur vous, vos projets et vos idées, quelque soient leur stade d’avancement&nbsp;!
            </p>
            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-icon">📍</span>
                <span>Clichy, France</span>
              </div>
              <a
                href="https://www.instagram.com/maxroseproductions/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__detail contact__detail--link"
              >
                <svg className="contact__detail-icon contact__detail-icon--instagram" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FFDC80" />
                      <stop offset="25%" stopColor="#F77737" />
                      <stop offset="50%" stopColor="#E1306C" />
                      <stop offset="75%" stopColor="#C13584" />
                      <stop offset="100%" stopColor="#833AB4" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagram-gradient)" />
                  <circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient)" />
                  <circle cx="18" cy="6" r="1.5" fill="url(#instagram-gradient)" stroke="none" />
                </svg>
                <span>@maxroseproductions</span>
              </a>
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
                Message envoyé avec succès&nbsp;! Je vous répondrai rapidement.
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
