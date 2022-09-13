import './IssuedBooks.css';
import { issuedBooks } from './Data';
import IssuedBookItem from './IssuedBookItem';

function IssuedBooks() {
  return (
    <div className='booksContainer'>
        <div className='issuedBooksWrapper'>
        <div className='inputDiv'> <input type='text'  placeholder='search..' /></div>
        <div className='issuedBookList'>
          {issuedBooks.map((item) => {
            return <IssuedBookItem key={item.id} {...item} />
          }) }
        </div>
        </div>
    </div>
  )
}

export default IssuedBooks;