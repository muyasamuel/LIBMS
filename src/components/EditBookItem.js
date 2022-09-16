import { useContext } from "react";
import { EditContext } from "../store/editContext";
import "./EditBookItem.css";

function EditBookItem({ onRemoveCart }) {
   const { state }  = useContext(EditContext);

const { title, author, category , amount }  =  state ;
  return (
    <div className="editBookContainer">
      <div className="editBookWrapper">
        <h2>Edit book item</h2>
        <h3>{title}</h3>
        <h4> {author}</h4>
        <h4>{category}</h4>

        <input type="number" defaultValue={amount} />
      </div>
      <button>Submit</button>
      <button onClick={() => onRemoveCart()}>Done</button>
    </div>
  );
}

export default EditBookItem;
