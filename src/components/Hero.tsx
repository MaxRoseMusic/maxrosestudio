import './Hero.css'

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__background">
        <img
          src="/photos/DSC00852-2.jpg"
          alt="Studio background"
          className="hero__image"
        />
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content">
        <h1 className="hero__title">Max Rose Studio</h1>
        <p className="hero__subtitle">
          Production • Enregistrement<span className="hero__subtitle-separator"> • </span><br className="hero__subtitle-break" />Mixage • Mastering
        </p>
        <button className="hero__cta" onClick={scrollToServices}>
          Découvrir
        </button>
      </div>

      <div className="hero__scroll-indicator" onClick={scrollToServices}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  )
}
