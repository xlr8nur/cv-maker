export default function WorkExpList({ workExp }) {
    return (
      <>
        {workExp.map((work, idx) =>
          <Work key={idx} work={work} />
        )}
      </>
    )
  }
  
  function Work({ work }) {
    const { role, timePeriod, companyName, companyLocation, description } = work
  
    return (
      <div className='work-container'>
        <p className='role'>{role}</p>
        <p className='work-time-period'>{timePeriod}</p>
        <p className='company'>
          <span className="company-name">{companyName}</span>
          {companyName && companyLocation && ', '}
          <span className="company-location">{companyLocation}</span>
        </p>
        <p className="description">{description}</p>
      </div>
    )
  }