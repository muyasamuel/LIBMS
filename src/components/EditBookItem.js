import { useContext } from "react";
import { EditContext } from "../store/editContext";
import "./EditBookItem.css";

function EditBookItem() {
   const { state, dispatch }  = useContext(EditContext);

   const { title, author,  category } = state
  return (
    <div className="editBookContainer">
      <div className="editBookWrapper">
        <h2>Edit book item</h2>
        <h3>{title}</h3>
        <h4> {author}</h4>
        <h4>{category}</h4>

        <input type="number" defaultValue='5' />
      </div>
      <button >Submit</button>
      <button onClick={() => dispatch({type: 'REMOVE'})}>Done</button>
    </div>
  );
}

export default EditBookItem;
