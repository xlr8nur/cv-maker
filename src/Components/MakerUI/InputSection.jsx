import Section from '../Section'

export default function InputSection({ title, children }) {
  return (
    <div className="input-section">
      <Section title={title}>
        {children}
      </Section>
    </div>
  )
}