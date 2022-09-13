import './IssuedBooks.css';
import { issuedBooks } from './Data';

function IssuedBooks() {
  return (
    <div className='booksContainer'>
        <div className='issuedBooksWrapper'>
        <div className='inputDiv'> <input type='text'  placeholder='search..' /></div>
        <div className='issuedBookList'>
          {issuedBooks.map((item) => {
            return <li> {item.studentsName}</li>
          }) }
        </div>
        </div>
    </div>
  )
}

export default IssuedBooks;