import { useContext } from 'react';
import { EditContext } from '../store/editContext';
import './BookItem.css'

function BookItem({  title, author, amount, category }  ) {
 
 
  const { dispatch } = useContext(EditContext);
   

  return (
    <div className='itemWrapper'>
        <div className='bookTitle'>
        <h2> {title} </h2>
        </div>
        
        <h3> {author} </h3>
        <p >Amount :<span> {amount}</span></p>
        <p>{category}</p>
      
        <div className='actions'>
            <button id='editBtn' onClick={() => dispatch({type: 'EDIT', payload: {  title, author, amount, category } })} >EDIT</button>
            <button id='delBtn' >DELETE</button>
        </div>
         
    </div>
  )
}

export default BookItem;