import { useContext } from "react";
import { EditContext } from "../store/editContext";
import "./EditBookItem.css";
import Modal from "./Modal";

function EditBookItem() {
   const { state, dispatch }  = useContext(EditContext);

   const { title, author,  category } = state
  return (
    <Modal>
      <div className="editBookContainer">
       <header>Edit book item</header>
      <div className="editBookWrapper">
       
        <h3> TITLE : {title}</h3>
        <h4> AUTHOR: {author}</h4>
        <h4> CATEGORY: {category}</h4>
        <div>
          <h4>AMOUNT :</h4>
          <input type="number" defaultValue='5' />
        </div>
        
      </div>
      <button >Submit</button>
      <button id="doneBtn" onClick={() => dispatch({type: 'REMOVE'})}>Done</button>
    </div>
    </Modal>
    
  );
}

export default EditBookItem;
