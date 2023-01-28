import { useContext} from 'react';
import { EditContext } from '../../store/editContext';
import './BookItem.css'

function BookItem({ id, title, author, amount, book_category , deleteBook }  ) {


const { dispatch } = useContext(EditContext);
   

  return (
    <div className='itemWrapper'>
        <div className='bookTitle'>
        <h2> {title} </h2>
        </div>
        
        <h3> {author} </h3>
        <p >Amount :<span> {amount}</span></p>
        <p>{book_category}</p>
      
        <div className='actions'>
            <button id='editBtn' onClick={() => dispatch({type: 'EDIT', payload: { id, title, author, amount, book_category } })} >EDIT</button>
            <button id='delBtn' onClick={(e) => deleteBook(id,e)}   >DELETE</button>
        </div>
         
    </div>
  )
}

export default BookItem;