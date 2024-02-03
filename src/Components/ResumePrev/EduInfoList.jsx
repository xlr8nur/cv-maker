export default function EduInfoList({ education }) {
    return (
      <>
        {education.map((education, idx) =>
          <EduInfo key={idx} education={education} />
        )}
      </>
    )
  }
  
  function EduInfo({ education }) {
    const { title, timePeriod, institution, country } = education
  
    return (
      <div className='education-info-container'>
        <p className='education-info-title'>{title}</p>
        <p className='uppercase'>{timePeriod}</p>
        <p className='institution'>
          <span>{institution}</span>{institution && country && ' - '}{country}
        </p>
      </div>
    )
  }