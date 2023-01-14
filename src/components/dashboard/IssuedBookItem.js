import './IssuedBookItem.css'

function IssuedBookItem({studentsName, studentsEmail, title, issuedDate, returnDate}) {
  return (
    <div className='issuedBookWrapper'>
        <h2>{studentsName} </h2>
        <div className='issuedEmail'>
           <h3> {studentsEmail}</h3>
        </div>
       
        <p> {title} </p>
        <span>{issuedDate}</span>
        <span>{returnDate}</span>
    </div>
  )
}

export default IssuedBookItem