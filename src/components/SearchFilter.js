import './SearchFilter.css';
import BookItem from './BookItem';
import { booksAvailable } from './Data'

function SearchFilter() {
  return (
    <div className='searchContainer'>
       
        <div className='wrapper'>
            <div className='inputDiv'> <input type='text'  placeholder='search..'/></div>
            
            <div className='content'> 
            {booksAvailable.map((item) => {
                return  <BookItem key={item.id} {...item} />
            })}
     
            
            </div>
        </div>
        

    </div>
  )
}

export default SearchFilter;
