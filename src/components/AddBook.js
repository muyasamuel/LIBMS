import './AddBook.css'

const AddBook = () => {
  return (
    <div className='addContainer'>
        <h2>Add New Book</h2>
        <form>
            <input type='text'  placeholder='Book title '/>
            <input type='text'  placeholder='Authors Name '/>
            <input type='number'  placeholder='Amount '/>
            <input type='text'  placeholder='Category '/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default AddBook