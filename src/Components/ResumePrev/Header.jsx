export default function Header({ name, role }) {
    return (
      <div className='resume-header uppercase spaced-letters'>
        <h1 className='name'>{name}</h1>
        {role &&
          <>
            <hr />
            <h2 className='role'>{role}</h2>
          </>
        }
      </div>
    )
  }