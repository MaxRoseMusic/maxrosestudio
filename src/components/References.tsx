import { useState, useRef, useEffect } from 'react'
import './References.css'

const references = [
  {
    id: 'aurelia-redessiner',
    image: '/references/Aurelia - Redessiner leurs visages.png',
    artiste: 'Aurélia',
    artisteLink: 'https://linktr.ee/aurelia',
    projet: 'Redessiner leurs visages',
    role: "Production, Mixage, Mastering",
    lien: 'https://open.spotify.com/track/464XCceVFMGnQmY9AEJ6NM?si=hGg_OZXPRWa3XH8viBs69Q'
  },
  {
    id: 'eytan-oiseaux',
    image: '/references/Eytan Dantski - Parfois les oiseaux.png',
    artiste: 'Eytan Dantski',
    artisteLink: 'https://linktr.ee/eytandantski',
    projet: 'Parfois les oiseaux',
    role: "Production, Mixage, Mastering",
    lien: 'https://open.spotify.com/track/2yAA3xq29rhqTfj4NgIhX8?si=yphBOblxSkmUnneytOiUvw'
  },
  {
    id: 'louise-moths',
    image: '/references/Louise - Moths (cover).jpeg',
    artiste: 'Louise',
    artisteLink: 'https://soundcloud.com/louise-thb',
    projet: 'Moths',
    role: "Production, Mixage, Mastering",
    lien: 'https://soundcloud.com/louise-thb/moths?si=7371200571a94482b18428c61a9e4939&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
  },
  {
    id: 'eytan-tristes-murs',
    image: '/references/Eytan Dantski - De tristes murs.jpeg',
    artiste: 'Eytan Dantski',
    artisteLink: 'https://linktr.ee/eytandantski',
    projet: 'De tristes murs',
    role: "Production, Mixage",
    lien: 'https://open.spotify.com/album/5e80E9UExvuxtqLrR0g4ok?si=mIfvonrvSk-TMLjG9YgF2w'
  },
  {
    id: 'louise-idontwannabeyou',
    image: '/references/Louise - Idontwannabeyou (cover).jpg',
    artiste: 'Louise',
    artisteLink: 'https://soundcloud.com/louise-thb',
    projet: 'Idontwannabeyou',
    role: "Production, Mixage, Mastering",
    lien: 'https://soundcloud.com/louise-thb/idontwannabeyouanymore-cover?si=01da20367d694a73adce9ac2f8ef29d8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
  }
]

export default function References() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const calculateVisibleCount = () => {
      if (trackRef.current && trackRef.current.children.length > 0) {
        const trackWidth = trackRef.current.clientWidth
        const card = trackRef.current.children[0] as HTMLElement
        const cardWidth = card.offsetWidth
        const gap = parseInt(getComputedStyle(trackRef.current).gap) || 24
        const count = Math.floor((trackWidth + gap) / (cardWidth + gap))
        setVisibleCount(Math.max(1, count))
      }
    }

    calculateVisibleCount()
    window.addEventListener('resize', calculateVisibleCount)
    return () => window.removeEventListener('resize', calculateVisibleCount)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleScroll = () => {
      const card = track.children[0] as HTMLElement
      if (!card) return
      const cardWidth = card.offsetWidth
      const gap = parseInt(getComputedStyle(track).gap) || 24
      const scrollLeft = track.scrollLeft
      const newIndex = Math.round(scrollLeft / (cardWidth + gap))
      setCurrentIndex(Math.max(0, Math.min(newIndex, references.length - visibleCount)))
    }

    track.addEventListener('scroll', handleScroll)
    return () => track.removeEventListener('scroll', handleScroll)
  }, [visibleCount])

  const step = Math.max(1, visibleCount - 1)

  const scrollToIndex = (index: number) => {
    if (trackRef.current) {
      const card = trackRef.current.children[index] as HTMLElement
      if (card) {
        // Scroll to align the card at the left edge with some padding
        const scrollLeft = card.offsetLeft - 24
        trackRef.current.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' })
      }
    }
    setCurrentIndex(index)
  }

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - step)
    scrollToIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = Math.min(references.length - visibleCount, currentIndex + step)
    scrollToIndex(newIndex)
  }

  return (
    <section id="references" className="references">
      <div className="container">
        <h2 className="section-title">Références</h2>

        <div className="references__carousel">
          <button className="references__nav references__nav--prev" onClick={handlePrev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="references__track" ref={trackRef}>
            {references.map((reference, index) => (
              <article
                key={reference.id}
                className={`references__card ${index === currentIndex ? 'references__card--active' : ''}`}
              >
                <div className="references__image-container">
                  <img
                    src={reference.image}
                    alt={reference.artiste}
                    className="references__image"
                  />
                  <div className="references__overlay">
                    <div className="references__info">
                      <div className="references__info-item">
                        <svg className="references__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        <a
                          href={reference.artisteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="references__artist-link"
                        >
                          {reference.artiste}
                        </a>
                      </div>
                      <div className="references__info-item">
                        <svg className="references__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 18V5l12-2v13" />
                          <circle cx="6" cy="18" r="3" />
                          <circle cx="18" cy="16" r="3" />
                        </svg>
                        <span>{reference.projet}</span>
                      </div>
                      <div className="references__info-item">
                        <svg className="references__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="4" y1="3" x2="4" y2="8" />
                          <line x1="4" y1="14" x2="4" y2="21" />
                          <line x1="12" y1="3" x2="12" y2="12" />
                          <line x1="12" y1="18" x2="12" y2="21" />
                          <line x1="20" y1="3" x2="20" y2="5" />
                          <line x1="20" y1="11" x2="20" y2="21" />
                          <rect x="2" y="8" width="4" height="6" rx="1" />
                          <rect x="10" y="12" width="4" height="6" rx="1" />
                          <rect x="18" y="5" width="4" height="6" rx="1" />
                        </svg>
                        <span>{reference.role}</span>
                      </div>
                      <a
                        href={reference.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="references__info-item references__info-link"
                      >
                        <svg className="references__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 3h6v6" />
                          <path d="M10 14L21 3" />
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        </svg>
                        <span>Écouter</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button className="references__nav references__nav--next" onClick={handleNext} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="references__dots">
          {Array.from({ length: Math.floor((references.length - visibleCount) / step) + 1 }, (_, pageIndex) => (
            <button
              key={pageIndex}
              className={`references__dot ${Math.floor(currentIndex / step) === pageIndex ? 'references__dot--active' : ''}`}
              onClick={() => scrollToIndex(pageIndex * step)}
              aria-label={`Go to page ${pageIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
