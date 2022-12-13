import "./Contents.css";
import { FaAdn, FaSearch, FaBoxTissue, FaClone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Contents() {
  const navigate = useNavigate();
 

  useEffect(() => {
    const token =  localStorage.getItem('user');

    if(!token){
      navigate('/login');
    }


  },[navigate])





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
    <AnimatePresence>
      <div className="contentsContainer">
        <div className="contentsWrapper">

          <motion.div
            onClick={navigateToAddbook}
            className="addContentDiv"
            initial={{ y: "-50vw", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
              damping: 25,
              stiffness: 500,
            }}
            whileHover={{ scale: 0.95}}
          >
            <FaAdn className="icon" />
            <h2> AddBook </h2>
            <h3>
             
              Here you are given the privilege to add new book that never
              existed before
            </h3>
          </motion.div>


          <motion.div onClick={navigateToEdit} className="searchContentDiv"
          initial={{ x: "50vw", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
          }}
          whileHover={{ scale: 0.95}} >
            <FaSearch className="icon" />
            <h2>SearchFilter</h2>
            <h3>
            
              Search for whatever book that you think its available and given an
              option of editing or deleting respective books{" "}
            </h3>
          </motion.div>


          <motion.div onClick={navigateToIssueBook} className="issueContentDiv"
           initial={{ x: "-50vw", opacity: 0 }}
           animate={{ x: "0", opacity: 1 }}
           transition={{
             
             duration: 0.1,
             type: "spring",
             damping: 25,
             stiffness: 500,
           }}
          
           whileHover={{ scale: 0.95}}>
            <FaBoxTissue className="icon" />
            <h2>Issue Book</h2>
            <h3>
              {" "}
              Whenever a book is issued to a student all relevant details are
              noted done against the book issued
            </h3>
          </motion.div>



          <motion.div onClick={navigateToIssuedBooks} className="issuedContentDiv"
          initial={{ y: "50vw", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            damping: 25,
            stiffness: 500,
          }}
          whileHover={{ scale: 0.95}}>
            <FaClone className="icon" />
            <h2>Issued Books</h2>
            <h3> A list of all issued books with the student details </h3>
          </motion.div>


        </div>
      </div>
    </AnimatePresence>
  );
}

export default Contents;
