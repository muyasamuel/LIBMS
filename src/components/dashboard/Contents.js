import "./Contents.css";
import { FaAdn, FaSearch, FaBoxTissue, FaClone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoutHeader from "./LogoutHeader";


const Contents =    () => {
  const navigate = useNavigate();

  const [isAuthenthicated, setIsAuthenticated] = useState(false);

  const isLoggedIn = async () => {
    const token = await localStorage.getItem("user");
    if(token !== null && token !== undefined ){
      setIsAuthenticated(true);
    }
    
  };

  isLoggedIn();


 

  const navigateToAddbook = () => {
    navigate("/contents/addbook");
  };

  const navigateToEdit = () => {
    navigate("/contents/edit");
  };

  const navigateToIssueBook = () => {
    navigate("/contents/issuebook");
  };

  const navigateToIssuedBooks = () => {
    navigate("/contents/issuedbooks");
  };

  return (
    isAuthenthicated &&
   
      <div>
        <LogoutHeader />
      <div className="contentsContainer">
        <div className="contentsWrapper">
          <div onClick={navigateToAddbook} className="addContentDiv">
            <FaAdn className="icon" />
            <h2> AddBook </h2>
            <h3>
              Here you are given the privilege to add new book that never
              existed before
            </h3>
          </div>


          
          <div onClick={navigateToEdit} className="searchContentDiv">
            <FaSearch className="icon" />
            <h2>SearchFilter</h2>
            <h3>
              Search for whatever book that you think its available and given an
              option of editing or deleting respective books{" "}
            </h3>
          </div>

          <div onClick={navigateToIssueBook} className="issueContentDiv">
            <FaBoxTissue className="icon" />
            <h2>Issue Book</h2>
            <h3>
              Whenever a book is issued to a student all relevant details are
              noted done against the book issued
            </h3>
          </div>

          <div onClick={navigateToIssuedBooks} className="issuedContentDiv">
            <FaClone className="icon" />
            <h2>Issued Books</h2>
            <h3> A list of all issued books with the student details </h3>
          </div>
        </div>
      </div>
     </div>
    
    
  );
};

export default Contents;
