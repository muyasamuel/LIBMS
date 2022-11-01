import './SearchFilter.css';
import BookItem from './BookItem';
import { booksAvailable } from './data/Data';
import { useState } from 'react';
import EditModal from './EditModal';
import { useContext } from 'react'
import { EditContext } from '../store/editContext'
import { AnimatePresence } from 'framer-motion';


function SearchFilter() {
    const { state } = useContext(EditContext);
    
    const { editCartSeen } = state;

  


  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
   
    if (searchInput !== '') {
        const filteredData = booksAvailable.filter((item) => {
            return Object.values(item.category).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData);
        console.log('rendered')
    }
    else{
        setFilteredResults(booksAvailable);
    }
}
   





  return (
    <div className='searchContainer'>
        <AnimatePresence
           initial={false}
           exitBeforeEnter
           onExitComplete={() => null}>
               {editCartSeen && <EditModal    />} 
        </AnimatePresence>
        
       
        <div className='wrapper'>
          
             <h1 className='editTitle'> Search Available Books and Edit... </h1>

            <div className='inputDiv'> 
            
            <input type='text'  placeholder='Search by category..'  onChange={(e) => searchItems(e.target.value)}/>
            </div>
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
  )
}

export default SearchFilter;
