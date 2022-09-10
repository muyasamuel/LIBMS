import "./AddBook.css";
import { useState } from 'react';

const AddBook = () => {
   const [title , setTitle ] = useState('');
   const [author , setAuthor ] = useState('')
   const [amount , setAmount ] = useState(0);
   const [category , setCategory ] = useState('');


   const submitHandler = (e) =>{
    e.preventDefault();

    const newEntry = {
      title,
      author,
      amount,
      category
    }

    console.log(newEntry);
   }

  return (
    <div className="addContainer">
      <div className="addWrapper">
        <h2>Add New Book</h2>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Book title "  value={title} onChange={(e)=> setTitle(e.target.value)} />
          <input type="text" placeholder="Authors Name " value={author} onChange={(e)=> setAuthor(e.target.value)}  />
          <input type="number" placeholder="Amount " value={amount} onChange={(e)=> setAmount(e.target.value)}  />
          <label htmlFor="category ">Select category:</label>
          <select name="books" id="books" value={category} onChange={(e) => setCategory(e.target.value)}>
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
