
import './EditBookItem.css'

function EditBookItem({onRemoveCart}) {
 
  return (
    <div className='editBookContainer'>
        <h2>Edit book item</h2>
        <button onClick={() => onRemoveCart()} >Remove</button>


    </div>
  )
}

export default EditBookItem;