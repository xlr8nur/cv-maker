import Section from '../Section'
import Avatar from './Avatar'
import Contact from './Contact'
import EduInfoList from './EduInfoList'
import ReferencesList from './ReferencesList'

export default function Sidebar({ avatarUrl, contact, education, references }) {
  return (
    <div className='sidebar'>
      <Avatar avatarUrl={avatarUrl} />
      <div className='sidebar-sections'>
        <Section title='Contact'>
          <Contact contact={contact} />
        </Section>
        <Section title='Education'>
          <EduInfoList education={education} />
        </Section>
        <Section title='References'>
          <ReferencesList references={references} />
        </Section>
      </div>
    </div>
  )
}