import './Services.css'

const services = [
  {
    id: 'production',
    title: 'Production',
    description: 'Création et arrangement de vos projets musicaux avec une approche artistique unique.',
    image: '/photos/DSC00856.jpg'
  },
  {
    id: 'recording',
    title: 'Enregistrement',
    description: 'Capture haute qualité de vos performances dans un environnement acoustique professionnel.',
    image: '/photos/DSC00870.jpg'
  },
  {
    id: 'mixing',
    title: 'Mixage & Mastering',
    description: 'Finalisation de vos morceaux avec précision et expertise pour un son professionnel.',
    image: '/photos/DSC00898-2.jpg'
  }
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Mes Services</h2>

        <div className="services__grid">
          {services.map(service => (
            <article key={service.id} className="services__card">
              <div className="services__card-image">
                <img src={service.image} alt={service.title} />
                <div className="services__card-overlay"></div>
              </div>
              <div className="services__card-content">
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-description">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
