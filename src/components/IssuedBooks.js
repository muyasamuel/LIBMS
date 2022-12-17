import './IssuedBooks.css';
import { issuedBooks } from './data/Data';
import IssuedBookItem from './IssuedBookItem';
import { useState } from 'react';

function IssuedBooks() {
 const [input , setInput] = useState('');
 const [ filteredResults, setFilteredResults] = useState([]);
 

 const searchDate = (date) => {
   setInput(date);
   
 
   if(input !== "" ){
  
     const filteredDates = issuedBooks.filter((item) => {
    return Object.values(item.returnDate).join('').toLowerCase().includes(input);
   
   });
 
  
   setFilteredResults(filteredDates);
   }else{
    setFilteredResults(issuedBooks);
   }


 }
  return (
    <div className='booksContainer'>
        <div className='issuedBooksWrapper'>
        <div className='heading'><h2> Filter to latest Return Date...</h2></div> 
        <div className='inputDiv'> <input type='text' placeholder='Search by the return date..' value={input}  onChange={(e) => searchDate(e.target.value)}  /></div>
        <div className='mainContentDiv'>
        <div className='issuedTableHeader'>
                <p>Students Name</p>
                <p>Students Email</p>
                <p>Book Title</p>
                <p>Issued Date</p>
                <p>Return Date</p>
        </div>
        <div className='issuedBookList'>
        {input !== "" ? (
                    filteredResults.map((item) => {
                        return (
                            <IssuedBookItem  key={item.id} {...item}/>
                        )
                    })
                ) : (
                    issuedBooks.map((item) => {
                        return (
                           <IssuedBookItem  key={item.id} {...item}/>
                        )
                    })
                )
                
                }
            
        </div>
            
        </div>
       
        </div>
    </div>
  )
}

export default IssuedBooks;