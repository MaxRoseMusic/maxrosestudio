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
              Passionné depuis le plus jeune âge, c'est par la guitare que je fais ma rencontre avec la musique. 
              <br />
              Très rapidement, l'envie d'enregistrer se fait ressentir et c'est avec des amis dans un espace improvisé que la constat s'impose&nbsp;: je veux produire la musique des artistes qui m'entourent.

              </p>
              <p>
              Aujourd'hui, fort de l'aménagement de 2 home studios, l'aboutissement de nombreux projets, l'accompagnement de dizaines d'artistes et la connaissance de mon matériel et de mon espace, je propose un accompagnement complet de la composition au mastering.
              <br />
              </p>
              <p>
              Je travaille avec tous types d'artistes et de musiciens sur des styles divers comme la pop, le rock, la folk, la soul, la variété ou encore le métal, autant de styles que de projets artistiques uniques.
              <br />
              N'hésitez pas à me contacter pour que l'on regarde ensemble en quoi je peux vous aider&nbsp;!

              </p>
            </div>
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">10+</span>
                <span className="about__stat-label">Années d'expérience</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">40+</span>
                <span className="about__stat-label">Projets réalisés</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">20+</span>
                <span className="about__stat-label">Artistes accompagnés</span>
              </div>
            </div>
            <a
              href="https://www.instagram.com/maxroseproductions/"
              target="_blank"
              rel="noopener noreferrer"
              className="about__instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <defs>
                  <linearGradient id="instagram-gradient-about" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFDC80" />
                    <stop offset="25%" stopColor="#F77737" />
                    <stop offset="50%" stopColor="#E1306C" />
                    <stop offset="75%" stopColor="#C13584" />
                    <stop offset="100%" stopColor="#833AB4" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagram-gradient-about)" />
                <circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient-about)" />
                <circle cx="18" cy="6" r="1.5" fill="url(#instagram-gradient-about)" stroke="none" />
              </svg>
              <span>@maxroseproductions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
