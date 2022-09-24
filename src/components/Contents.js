import './Contents.css';
import { FaAdn , FaSearch, FaBoxTissue, FaClone} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



function Contents() {
     const navigate = useNavigate();

     const navigateToAddbook = () => {
      navigate('/contents/addbook')
     }

     const navigateToEdit = () => {
      navigate('/contents/edit')
     }

     const navigateToIssueBook = () => {
      navigate('/contents/issuebook')
     }

     const navigateToIssuedBooks = () => {
      navigate('/contents/issuedbooks')
     }
  return (
    <div className='contentsContainer'>
        <div className='contentsWrapper'>
            <div onClick={navigateToAddbook }  className='addContentDiv'>
            <FaAdn className='icon' />
            <h2> AddBook </h2>
            <h3> here you are given the privilege to add new book that never existed</h3>
        </div>
        <div onClick={navigateToEdit } className='searchContentDiv'>
            <FaSearch className='icon' />
            <h2>SearchFilter</h2>
            <h3> here you are given the privilege to add new book that never existed</h3>
        </div>
        <div onClick={navigateToIssueBook } className='issueContentDiv'>
            <FaBoxTissue className='icon'  />
            <h2>Issue Book</h2>
            <h3> here you are given the privilege to add new book that never existed</h3>
        </div>
         <div onClick={navigateToIssuedBooks } className='issuedContentDiv'>
          <FaClone className='icon' />
            <h2>Issued Books</h2>
            <h3> here you are given the privilege to add new book that never existed</h3>
        </div>
        </div>
        
    </div>
  )
}

export default Contents;