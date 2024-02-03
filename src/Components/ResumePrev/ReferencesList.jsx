export default function ReferencesList({ references }) {
    return (
      <div className="section-content">
        {references.map((reference, idx) =>
          <Reference key={idx} reference={reference} />
        )}
      </div>
    )
  }
  
  function Reference({ reference }) {
    const { name, role, company, email, phoneNumber } = reference
  
    return (
      <div className='reference-container'>
        <p className='name uppercase'>{name}</p>
        <p className='role-and-company'>
          {role}{role && company && ', '}{company}{(role || company) ? '.' : null}
        </p>
        {(email || phoneNumber) ? <br /> : null}
        {email &&
          <p className='email'><b>Email:</b> {email}</p>
        }
        {phoneNumber &&
          <p className='phone-number'><b>Mobile:</b> {phoneNumber}</p>
        }
      </div>
    )
  }