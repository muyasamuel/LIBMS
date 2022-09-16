import { useContext } from 'react';
import { EditContext } from '../store/editContext';
import './BookItem.css'

function BookItem({  title, author, amount, category }  ) {
 
 
  const { dispatch } = useContext(EditContext);
   

  return (
    <div className='itemWrapper'>
        <h2> {title} </h2>
        <h3> {author} </h3>
        <p >Amount :<span> {amount}</span></p>
        <p>{category}</p>
      
        <div>
            <button onClick={() => dispatch({type: 'EDIT', payload: {  title, author, amount, category } })} >EDIT</button>
            <button >DELETE</button>
        </div>
         
    </div>
  )
}

export default BookItem;