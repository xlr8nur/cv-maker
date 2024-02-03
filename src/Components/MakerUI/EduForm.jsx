import InputSection from "./InputSection"

export default function EduForm({ cv, onChange, onAdd, onDelete }) {
  const listItems = cv.education.map((education, idx) =>
    <InputSubsection
      key={education.id}
      id={education.id}
      index={idx}
      education={education}
      onChange={onChange}
      onDelete={onDelete}
    />
  )

  return (
    <InputSection title='Education'>
      {listItems}
      <button onClick={onAdd}>Add</button>
    </InputSection>
  )
}

function InputSubsection({ id, index, education, onChange, onDelete }) {
  return (
    <>
      <h4>Education #{index + 1} </h4>
      <div className="horizontal-spaced-container">
        <input
          type="text"
          name='title'
          placeholder='Title'
          value={education.title}
          onChange={(e) => onChange(e, id)}
        />
        <input
          type="text"
          name='timePeriod'
          placeholder='Time Period'
          value={education.timePeriod}
          onChange={(e) => onChange(e, id)}
        />
      </div>
      <div className="horizontal-spaced-container">
        <input
          type="text"
          name='institution'
          placeholder='Institution'
          value={education.institution}
          onChange={(e) => onChange(e, id)}
        />
        <input
          type="text"
          name='country'
          placeholder='Country'
          value={education.country}
          onChange={(e) => onChange(e, id)}
        />
        <button className='delete-btn' onClick={() => onDelete(id)}>Delete</button>
      </div>
    </>
  )
}