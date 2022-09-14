import "./EditBookItem.css";

function EditBookItem({ onRemoveCart }) {
  return (
    <div className="editBookContainer">
      <div className="editBookWrapper">
        <h2>Edit book item</h2>
        <h3>River and the Sourse</h3>
        <h4> Margaret Ogola</h4>
        <h4> Novel</h4>

        <input type="number" defaultValue="5" />
      </div>
      <button>Submit</button>
      <button onClick={() => onRemoveCart()}>Done</button>
    </div>
  );
}

export default EditBookItem;
