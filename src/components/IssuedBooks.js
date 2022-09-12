import './IssuedBooks.css'

function IssuedBooks() {
  return (
    <div className='booksContainer'>
        <div className='issuedBooksWrapper'>
        <div className='inputDiv'> <input type='text'  placeholder='search..' /></div>
        <div className='issuedBookList'>issued books</div>
        </div>
    </div>
  )
}

export default IssuedBooks