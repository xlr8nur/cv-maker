import InputSection from "./InputSection"

export default function ContactForm({ cv, onChange }) {
  return (
    <InputSection title='Contact'>
      <div className="horizontal-spaced-container">
        <input
          type="text"
          name="addressFirstLine"
          placeholder='First Address Line'
          value={cv.contact.addressFirstLine}
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          name="addressSecondLine"
          placeholder='Second Address Line'
          value={cv.contact.addressSecondLine}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="horizontal-spaced-container">
        <input
          type="tel"
          name="phoneNumber"
          placeholder='Phone Number'
          value={cv.contact.phoneNumber}
          onChange={(e) => onChange(e)}
        />
        <input
          type="email"
          name="email"
          placeholder='Email'
          value={cv.contact.email}
          onChange={(e) => onChange(e)}
        />
      </div>
    </InputSection>
  )
}