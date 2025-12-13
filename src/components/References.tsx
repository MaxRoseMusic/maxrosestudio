import './References.css'

const references = [
  {
    id: 'francis-cabrel',
    name: 'Francis Cabrel',
    image: '/references/francis_cabrel.jpeg'
  },
  {
    id: 'johnny-halliday',
    name: 'Johnny Hallyday',
    image: '/references/johnny_halliday.webp'
  },
  {
    id: 'louane',
    name: 'Louane',
    image: '/references/louane.jpg'
  }
]

export default function References() {
  return (
    <section id="references" className="references">
      <div className="container">
        <h2 className="section-title">Références</h2>

        <div className="references__grid">
          {references.map(reference => (
            <article key={reference.id} className="references__card">
              <div className="references__image-container">
                <img
                  src={reference.image}
                  alt={reference.name}
                  className="references__image"
                />
              </div>
              <h3 className="references__name">{reference.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
