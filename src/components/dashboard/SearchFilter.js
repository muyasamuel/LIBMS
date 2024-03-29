import './SearchFilter.css';
import BookItem from './BookItem';
import { useState } from 'react';
import { useContext } from 'react'
import { EditContext } from '../../store/editContext'
import { AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { useEffect } from 'react';
import EditModal from '../modal/EditModal';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../Navbar/Navbar';




function SearchFilter() {

const baseUrl = process.env.REACT_APP_BASE_URL;

const { state } = useContext(EditContext);
const { editCartSeen } = state;


  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [booksAvailable, setBooksAvailable ] = useState([]);

  const fetchData = async () => {
    await axios
      .get(`${baseUrl}/api/books/book-list/`)
      .then((res) => {
        if (res.status === 200) {
          const books = res.data.books;
         
          setBooksAvailable(books);
          
        }
      
      })
      .catch((err) => {
        console.log("Error :" + err);
  });
  };



  useEffect(() => {
        fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  

 
 


  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
   
    if (searchInput !== '') {
        const filteredData = booksAvailable.filter((item) => {
            return Object.values(item.book_category).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData);
      
    }
    else{
        setFilteredResults(booksAvailable);
    }
}
   

  const deleteBook =  (id, e) => {
    e.preventDefault();
    axios.delete(`${baseUrl}/api/books/delete-book/${id}`)
    .then(response => {
      if(response.status === 204){
        
        toast.success('Successfully Deleted Book');
        const remainingBooks = booksAvailable.filter((book) => book.id !== id)
        setBooksAvailable(remainingBooks)
    }
    
        console.log("Delete",response) }
      );
    
  }





  return (
    <>
    <Navbar />
    <div className='searchContainer'>
       
        <AnimatePresence
           initial={false}
           onExitComplete={() => null}>
               {editCartSeen && <EditModal  />} 
        </AnimatePresence>
        <Toaster />
        
       
        <div className='wrapper'>
          
             <h1 className='editTitle'> Search Available Books and Edit... </h1>

            <div className='inputDiv'> 
            
            <input type='text'  placeholder='Search by category..'  onChange={(e) => searchItems(e.target.value)}/>
            </div>

            <div className='subWrapper'>
            <div className='tableHeader'>
                <p>Book Title</p>
                <p>Author</p>
                <p>Amount</p>
                <p>Book Category</p>
                <p>Actions</p>
            </div>
            <div className='content'> 
          
            {searchInput.length > 0 ? (
                    filteredResults.map((item) => {
                        return (
                            <BookItem  key={item.id} {...item} deleteBook={deleteBook}  />
                        )
                    })
                ) : (
                    booksAvailable.map((item) => {
                        return (
                           <BookItem  key={item.id} {...item} deleteBook={deleteBook}    />
                        )
                    })
                )
                
                }
            
            </div>

            </div>
           
        </div>
        

    </div>
    </>
  );
}

export default SearchFilter;
