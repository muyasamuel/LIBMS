import './BookItem.css'

function BookItem(  {  title, author, amount, category} ) {
   

  return (
    <div className='itemWrapper'>
        <h2> {title} </h2>
        <h3> {author} </h3>
        <p>Amount :<span> {amount}</span></p>
        <p>{category}</p>
         
    </div>
  )
}

export default BookItem