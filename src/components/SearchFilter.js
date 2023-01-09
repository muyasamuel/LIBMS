import './SearchFilter.css';
import BookItem from './BookItem';
import { useState } from 'react';
import EditModal from './EditModal';
import { useContext } from 'react'
import { EditContext } from '../store/editContext'
import { AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { useEffect } from 'react';




function SearchFilter() {

const { state } = useContext(EditContext);
const { editCartSeen } = state;


  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [booksAvailable, setBooksAvailable ] = useState([]);


  useEffect(() => {
        fetchData()
  },[])

  const fetchData = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/books/book-list/")
      .then((res) => {
        if (res.status === 200) {
          const books = res.data.books;
          console.log(books);
          setBooksAvailable(books);
          
        }
      
      })
      .catch((err) => {
        console.log("Error :" + err);
  });
  };


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
   





  return (
    <div className='searchContainer'>
        <AnimatePresence
           initial={false}
        //    exitBeforeEnter ={}
           onExitComplete={() => null}>
               {editCartSeen && <EditModal    />} 
        </AnimatePresence>
        
       
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
                            <BookItem  key={item.id} {...item}  />
                        )
                    })
                ) : (
                    booksAvailable.map((item) => {
                        return (
                           <BookItem  key={item.id} {...item}  />
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

export default SearchFilter;
