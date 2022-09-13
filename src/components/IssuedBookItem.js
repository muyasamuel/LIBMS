import './IssuedBookItem.css'

function IssuedBookItem({studentsName, studentsEmail, title, issuedDate, returnDate}) {
  return (
    <div className='issuedBookWrapper'>
        <h2>{studentsName} </h2>
        <h3> {studentsEmail}</h3>
        <p> {title} </p>
        <span>{issuedDate}</span>
        <span>{returnDate}</span>
    </div>
  )
}

export default IssuedBookItem