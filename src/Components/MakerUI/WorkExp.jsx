import InputSection from './InputSection'

export default function WorkExpForm({ cv, onChange, onAdd, onDelete }) {
  const listItems = cv.workExp.map((work, idx) =>
    <WorkExp
      key={work.id}
      id={work.id}
      index={idx}
      work={work}
      onChange={onChange}
      onDelete={onDelete}
    />
  )


  return (
    <InputSection title='Work Experience'>
      {listItems}
      <button onClick={onAdd}>Add</button>
    </InputSection>
  )
}

function WorkExp({ id, index, work, onChange, onDelete }) {
  return (
    <>
      <h4>Work Info #{index + 1}</h4>
      <div className="horizontal-spaced-container">
        <input
          type="text"
          name="role"
          placeholder='Role'
          value={work.role}
          onChange={(e) => onChange(e, id)}
        />
        <input
          type="text"
          name="timePeriod"
          placeholder='Time Period'
          value={work.timePeriod}
          onChange={(e) => onChange(e, id)}
        />
      </div>
      <div className="horizontal-spaced-container">
        <input
          type="text"
          name="companyName"
          placeholder='Company Name'
          value={work.companyName}
          onChange={(e) => onChange(e, id)}
        />
        <input
          type="text"
          name="companyLocation"
          placeholder='Country'
          value={work.companyLocation}
          onChange={(e) => onChange(e, id)}
        />
      </div>
      <textarea
        name="description"
        cols="30"
        rows="6"
        placeholder='Description'
        value={work.description}
        onChange={(e) => onChange(e, id)}
      ></textarea>
      <button className='delete-btn' onClick={() => onDelete(id)}>Delete</button>
    </>
  )
}