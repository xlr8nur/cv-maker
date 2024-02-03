export default function Section({ title, children }) {
    return (
      <section>
        {title &&
          <div className="section-title-container">
            <h3 className="uppercase spaced-letters">{title}</h3>
            <hr />
          </div>
        }
        <div className="section-content">
          {children}
        </div>
      </section>
    )
  }