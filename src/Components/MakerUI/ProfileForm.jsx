import InputSection from "./InputSection"

export default function ProfileForm({ cv, onChange }) {
  return (
    <InputSection title='Profile'>
      <textarea
        name="profileDescription"
        cols="30"
        rows="6"
        placeholder='Description'
        onChange={(e) => onChange(e)}
        value={cv.profileDescription}
      ></textarea>
    </InputSection>
  )
}