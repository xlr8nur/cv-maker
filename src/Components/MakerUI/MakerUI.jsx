import '../../styles/maker-ui.css'
import UserInfoForm from './UserInfoForm'
import ProfileForm from './ProfileForm'
import WorkExpForm from './WorkExpForm'
import SkillsForm from './SkillsForm'
import ContactForm from './ContactForm'
import EduForm from './EduForm'
import ReferencesForm from './ReferencesForm'
import ButtonPanel from './ButtonPanel'

export default function MakerUI({
  cv,
  onChangeUserInfo,
  onChangeContact,
  onChangeSkill,
  onAddSkill,
  onDeleteSkill,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onChangeWorkExperience,
  onAddWorkExperience,
  onDeleteWorkExperience,
  onChangeReference,
  onAddReference,
  onDeleteReference,
  onExportPDF,
  onResetForm,
  onLoadExampleCV
}) {
  return (
    <div className='maker-ui-container'>
      <UserInfoForm
        cv={cv}
        onChange={onChangeUserInfo}
      />
      <ProfileForm
        cv={cv}
        onChange={onChangeUserInfo}
      />
      <WorkExpForm 
        cv={cv}
        onChange={onChangeWorkExperience}
        onAdd={onAddWorkExperience}
        onDelete={onDeleteWorkExperience}
      />
      <SkillsForm
        cv={cv}
        onChange={onChangeSkill}
        onAdd={onAddSkill}
        onDelete={onDeleteSkill}
      />
      <ContactForm
        cv={cv}
        onChange={onChangeContact}
      />
      <EduForm 
        cv={cv}
        onChange={onChangeEducation}
        onAdd={onAddEducation}
        onDelete={onDeleteEducation}
      />
      <ReferencesForm 
        cv={cv}
        onChange={onChangeReference}
        onAdd={onAddReference}
        onDelete={onDeleteReference}
      />
      <ButtonPanel 
        onExportPDF={onExportPDF}
        onReset={onResetForm}
        onLoadExample={onLoadExampleCV}
      />
    </div>
  )
}