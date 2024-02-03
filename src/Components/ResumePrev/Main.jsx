import Section from '../Section'
import WorkExpList from './WorkExpList'
import SkillsList from './SkillsList'

export default function Main({ profileDescription, workExp, skills }) {
  return (
    <div className='resume-main'>
      <div className='main-sections'>
        <Section title='Profile'>
          <p className='profile-description'>{profileDescription}</p>
        </Section>
        <Section title='Work Experience'>
          <WorkExpList workExp={workExp} />
        </Section>
        <Section title='Skills'>
          <SkillsList skills={skills} />
        </Section>
      </div>
    </div>
  )
}