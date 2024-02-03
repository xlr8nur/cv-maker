import InputSection from './InputSection'

export default function SkillsForm({ cv, onChange, onAdd, onDelete }) {
  const listItems = cv.skills.map((skill, idx) =>
    <Skill
      key={skill.id}
      id={skill.id}
      index={idx}
      value={skill.value}
      onChange={onChange}
      onDelete={onDelete}
    />
  )

  return (
    <InputSection title='Skills'>
      {listItems}
      <button onClick={onAdd}>Add</button>
    </InputSection>
  )
}

function Skill({ id, index, value, onChange, onDelete }) {
  return (
    <div className="horizontal-spaced-container">
      <input
        type="text"
        name="value"
        placeholder={`Skill #${index + 1}`}
        value={value}
        onChange={(e) => onChange(e, id)}
      />
      <button className='delete-btn' onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}