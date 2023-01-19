import './IssuedBookItem.css'

function IssuedBookItem({student_name, student_email, title, issue_date, return_date}) {
  return (
    <div className='issuedBookWrapper'>
        <h2>{student_name} </h2>
        <div className='issuedEmail'>
           <h3> {student_email}</h3>
        </div>
       
        <p className='title'> {title} </p>
        <span>{issue_date}</span>
        <span>{return_date}</span>
    </div>
  )
}

export default IssuedBookItem