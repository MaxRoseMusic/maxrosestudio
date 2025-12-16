import './Services.css'

const services = [
  {
    id: 'production',
    title: 'Production',
    description: "De la composition à l'enregistrement, j'accompagne les artistes dans la construction de leur son\u00A0: arrangement, direction artistique, travail sur l'intention et les textures. Mon rôle est de vous aider à révéler l'identité de vos morceaux, sans la dénaturer.",
    image: '/photos/DSC00856-C.jpg'
  },
  {
    id: 'recording',
    title: 'Enregistrement',
    description: "Un home studio dédié, traité acoustiquement et équipé de matériel professionnel me permet de m'adapter aux exigences de la prise de son. L'objectif est de trouver la signature sonore et l'intention artistique qui convient à votre projet, un élément déterminant pour obtenir le meilleur résultat possible. Voix, guitare, basse, percussions, piano, vents ou violons, je vous accompagne sur tous types d'enregistrements.",
    image: '/photos/DSC00870-C.jpg'
  },
  {
    id: 'mixing',
    title: 'Mixage & Mastering',
    description: "Je travaille vos pistes pour révéler l’identité de vos morceaux\u00A0: équilibre, dynamique et espace sonore sont pensés pour servir l’intention artistique. Mon rôle est de comprendre ce que vous cherchez afin de créer un rendu cohérent et clair, fidèle au projet, tout en respectant votre signature sonore.",
    image: '/photos/DSC00898-2-C.jpg'
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
