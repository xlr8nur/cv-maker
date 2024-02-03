import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
import '../../styles/resume-prev.css'

export default function ResumePrev({ cv }) {
  return (
    <div className='resume-prev-container'>
    <Header
      name={cv.name}
      role={cv.role}
    />
    <Sidebar
      avatarUrl={cv.avatarUrl}
      contact={cv.contact}
      education={cv.education}
      references={cv.references}
    />
    <Main
      profileDescription={cv.profileDescription}
      workExp={cv.workExp}
      skills={cv.skills}
    />
  </div>
  )
}