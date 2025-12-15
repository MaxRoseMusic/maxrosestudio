import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import References from './components/References'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <References />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Max Rose Studio. Tous droits réservés.</p>
         <p>photos par Louise Thb</p>
           <a
              href="https://www.instagram.com/louisethb/"
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
              <p>@louisethb</p>
            </a>
        </div>
      </footer>
    </>
  )
}

export default App
