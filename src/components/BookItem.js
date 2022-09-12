import './BookItem.css'

function BookItem(  {  title, author, amount, category} ) {
   

  return (
    <div className='itemWrapper'>
        <h2> {title} </h2>
        <h3> {author} </h3>
        <p >Amount :<span> {amount}</span></p>
        <p>{category}</p>
        <div>
            <button>EDIT</button>
            <button>DELETE</button>
        </div>
         
    </div>
  )
}

export default BookItem