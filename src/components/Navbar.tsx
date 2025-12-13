import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { id: 'services', label: 'Mes services' },
  { id: 'about', label: 'À propos' },
  { id: 'references', label: 'Références' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Check if we're above the first section (hero area)
      const firstSection = sections[0]
      if (firstSection && scrollPosition < firstSection.offsetTop) {
        setActiveSection('')
        return
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <button className="navbar__logo" onClick={scrollToTop}>
          Max Rose Studio
        </button>

        <button
          className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
