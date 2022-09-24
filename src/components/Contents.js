import './Contents.css';
import { FaAdn , FaSearch, FaBoxTissue, FaClone} from "react-icons/fa";


function Contents() {

  return (
    <div className='contentsContainer'>
        <div className='contentsWrapper'>
            <div  className='addContentDiv'>
            <FaAdn className='icon' />
            <h2>AddBook</h2>
            <h3> here you are given the privilege to add new book that never existed</h3>
        </div>
        <div className='searchContentDiv'>
            <FaSearch className='icon' />
            <h2>SearchFilter</h2>
            <h3> here you are given the privilege to add new book that never existed</h3>
        </div>
        <div className='issueContentDiv'>
            <FaBoxTissue className='icon'  />
            <h2>Issue Book</h2>
            <h3> here you are given the privilege to add new book that never existed</h3>
        </div>
         <div className='issuedContentDiv'>
          <FaClone className='icon' />
            <h2>Issued Books</h2>
            <h3> here you are given the privilege to add new book that never existed</h3>
        </div>
        </div>
        
    </div>
  )
}

export default Contents;