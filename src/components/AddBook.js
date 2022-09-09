import "./AddBook.css";

const AddBook = () => {

  return (
    <div className="addContainer">
      <div className="addWrapper">
        <h2>Add New Book</h2>
        <form>
          <input type="text" placeholder="Book title "  />
          <input type="text" placeholder="Authors Name " />
          <input type="number" placeholder="Amount " />
          <label for="cars">Select category:</label>
          <select name="books" id="books">
            <option value="Novel">Novel</option>
            <option value="Revision book">Revision Book</option>
            <option value="Course Work">Course Work</option>
        
          </select>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
