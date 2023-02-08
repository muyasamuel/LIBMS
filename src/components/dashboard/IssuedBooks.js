import './IssuedBooks.css';
import { useState } from 'react';
import IssuedBookItem from './IssuedBookItem';
import axios from 'axios';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

function IssuedBooks() {
 const [input , setInput] = useState('');
 const [ filteredResults, setFilteredResults] = useState([]);
 const [issuedBooks, setIssuedBooks] = useState([]);


// const modifiedBookObject = (issuedBooks) => {
    
//   issuedBooks.map((book) => {
//     const newReturnDate = book.issue_date.Slice(0,5)
//     return {
//       ...book,
//       return_date: newReturnDate
//     }
//    });
  
// }


 const fetchData = async () => {
  await axios
    .get("http://localhost:8000/api/books/issue-book/")
    .then((res) => {
      if (res.status === 200) {
        const books = res.data.books;
        const convertedBooks = books.map((book) => {
        
          return {
                  ...book,
                  issue_date: book.issue_date.slice(0,16).replace(/T/g, " T") +  " Hrs",
                  return_date: book.return_date.slice(0,16).replace(/T/g, " T") +  " Hrs",
                }
        });
        console.log(convertedBooks);
        setIssuedBooks(convertedBooks);
       
        
      }
    
    })
    .catch((err) => {
      console.log("Error :" + err);
});
};

 
useEffect(()=> {
  fetchData();
},[]);
 




 const searchDate = (date) => {
   setInput(date);
   
 
   if(input !== "" ){
  
     const filteredDates = issuedBooks.filter((item) => {
    return Object.values(item.return_date).join('').toLowerCase().includes(input);
   
   });
 
  
   setFilteredResults(filteredDates);
   }else{
    setFilteredResults(issuedBooks);
   }


 }
  return (
    <>
    <Navbar />
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
    </>
  )
}

export default IssuedBooks;