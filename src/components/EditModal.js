import { useContext } from "react";
import { EditContext } from "../store/editContext";
import styles from './EditModal.module.css';

function EditModal() {
    const { state, dispatch }  = useContext(EditContext);

    const { title, author,  category , amount} = state;
  return (
    <div className={styles.backdrop}>
       <div className={styles.modal}> 
           <div> 
        <h3> TITLE : {title}</h3>
        <h4> AUTHOR: {author}</h4>
        <h4> CATEGORY: {category}</h4>
        <h4> AMOUNT: {amount}</h4>
        
        <form>
          <h4> CHANGE AMOUNT :</h4>
          <input type="number" />
          <button >Submit</button>
        </form>
        
      </div>
     
      <button onClick={() => dispatch({type: 'REMOVE'})}>Done</button>
        </div> 
   
    </div>
  )
}

export default EditModal;