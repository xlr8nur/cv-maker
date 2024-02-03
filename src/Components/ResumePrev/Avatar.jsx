export default function Avatar({ avatarUrl }) {
    return (
      <div className='avatar'>
        <img src={avatarUrl ? avatarUrl : './avatar.png'} alt='Avatar' />
      </div>
    )
  }