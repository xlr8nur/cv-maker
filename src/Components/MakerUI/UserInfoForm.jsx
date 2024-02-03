import InputSection from "./InputSection"

export default function UserInfoForm({ cv, onChange }) {
  return (
    <InputSection title='Personal Info'>
      <div className="horizontal-spaced-container">
        <input
          type="text"
          name="name"
          placeholder='Full Name'
          value={cv.name}
          onChange={(e) =>onChange(e)}
          maxLength='25'
        />
        <input
          type="text"
          name="role"
          placeholder='Role'
          value={cv.role}
          onChange={(e) =>onChange(e)}
          maxLength='22'
        />
      </div>
      <input
        type="url"
        name="avatarUrl"
        placeholder='Picture URL'
        value={cv.avatarUrl}
        onChange={(e) =>onChange(e)}
      />
    </InputSection>
  )
}