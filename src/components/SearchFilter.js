import './SearchFilter.css';
import BookItem from './BookItem';
import { booksAvailable } from './Data'
import { useState } from 'react';


function SearchFilter() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = booksAvailable.filter((item) => {
            return Object.values(item.category).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData);
        console.log('rendered')
    }
    else{
        setFilteredResults(booksAvailable)
    }
}
   





  return (
    <div className='searchContainer'>
       
        <div className='wrapper'>
            <div className='inputDiv'> <input type='text'  placeholder='search..'  onChange={(e) => searchItems(e.target.value)}/></div>
            
            <div className='content'> 
            {searchInput.length > 0 ? (
                    filteredResults.map((item) => {
                        return (
                            <BookItem  key={item.id} {...item}/>
                        )
                    })
                ) : (
                    booksAvailable.map((item) => {
                        return (
                           <BookItem  key={item.id} {...item}/>
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
