export default function SkillsList({ skills }) {
    const listItems = skills.map((skill) =>
      <p key={skill.id} className='skill'>{skill.value}</p>
    )
  
    return (
      <div className="skills-container">
        {listItems}
      </div>
    )
  }