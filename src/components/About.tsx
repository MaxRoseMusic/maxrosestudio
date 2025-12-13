import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__image-container">
            <img
              src="/photos/DSC01047.jpg"
              alt="Max Rose Studio"
              className="about__image"
            />
          </div>

          <div className="about__content">
            <h2 className="about__title">À propos</h2>
            <div className="about__text">
              <p>
                Bienvenue au Max Rose Studio, un espace dédié à la création musicale
                où passion et professionnalisme se rencontrent.
              </p>
              <p>
                Fort d'une expérience dans l'industrie musicale, le studio offre
                un environnement acoustique de qualité et un équipement de pointe
                pour donner vie à vos projets artistiques.
              </p>
              <p>
                Que vous soyez un artiste émergent ou confirmé, chaque projet est
                abordé avec la même attention aux détails et le même engagement
                envers l'excellence sonore.
              </p>
            </div>
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">10+</span>
                <span className="about__stat-label">Années d'expérience</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">200+</span>
                <span className="about__stat-label">Projets réalisés</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">50+</span>
                <span className="about__stat-label">Artistes accompagnés</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
