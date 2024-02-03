export default function Contact({ contact }) {
    const { addressFirstLine, addressSecondLine, phoneNumber, email } = contact
    const imgSize = 15
  
    return (
      <div className="contact">
        {(addressFirstLine || addressSecondLine) ?
          <div className="img-and-details">
            <img src="./location.png" alt="Location" height={imgSize} width={imgSize} />
            <p>
              {addressFirstLine}
              {addressFirstLine && <br />}
              {addressSecondLine}
            </p>
          </div>
          : <></>
        }
        {phoneNumber &&
          <div className="img-and-details">
            <img src="./phone.png" alt="Phone" height={imgSize} width={imgSize} />
            <p>{phoneNumber}</p>
          </div>
        }
        {email &&
          <div className="img-and-details">
            <img src="./email.png" alt="Email" height={imgSize} width={imgSize} />
            <p>{email}</p>
          </div>
        }
      </div>
    )
  }