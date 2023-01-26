
import axios from 'axios';
import { useContext} from 'react';
import { EditContext } from '../../store/editContext';
import './BookItem.css'

function BookItem({ id, title, author, amount, book_category }  ) {


 

 const deleteBook =  (id, e) => {
  e.preventDefault();
  axios.delete(`http://localhost:8000/api/books/delete-book/${id}`)
  .then(response => console.log("Delete",response));
  // .catch(error => {
  //     setErrorMessage(error.message);
  //     console.error('There was an error!', error);
  // });
  
}
 

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
            <button id='editBtn' onClick={() => dispatch({type: 'EDIT', payload: {  title, author, amount, book_category } })} >EDIT</button>
            <button id='delBtn' onClick={(e) => deleteBook(id,e)}   >DELETE</button>
        </div>
         
    </div>
  )
}

export default BookItem;