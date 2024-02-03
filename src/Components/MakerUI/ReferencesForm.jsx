import InputSection from "./InputSection"

export default function ReferencesForm({ cv, onChange, onAdd, onDelete }) {
  const listItems = cv.references.map((reference, idx) =>
    <InputSubsection
      key={reference.id}
      id={reference.id}
      index={idx}
      reference={reference}
      onChange={onChange}
      onDelete={onDelete}
    />
  )

  return (
    <InputSection title='References'>
      {listItems}
      <button onClick={onAdd}>Add</button>
    </InputSection>
  )
}

function InputSubsection({ id, index, reference, onChange, onDelete }) {
  return (
    <>
      <h4>Reference #{index + 1}</h4>
      <div className="horizontal-spaced-container">
        <input
          type="text"
          name='name'
          placeholder='Name'
          value={reference.name}
          onChange={(e) => onChange(e, id)}
        />
        <input
          type="text"
          name='role'
          placeholder='Role'
          value={reference.role}
          onChange={(e) => onChange(e, id)}
        />
      </div>
      <div className="horizontal-spaced-container">
        <input
          type="text"
          name='company'
          placeholder='Company'
          value={reference.company}
          onChange={(e) => onChange(e, id)}
        />
        <input
          type="email"
          name='email'
          placeholder='Email'
          value={reference.email}
          onChange={(e) => onChange(e, id)}
        />
      </div>
      <div className="horizontal-spaced-container">
        <input
          type="tel"
          name='phoneNumber'
          placeholder='Phone Number'
          value={reference.phoneNumber}
          onChange={(e) => onChange(e, id)}
        />
        <button className="delete-btn" onClick={() => onDelete(id)}>Delete</button>
      </div>
    </>
  )
}