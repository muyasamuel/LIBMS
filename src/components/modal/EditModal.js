import { useContext, useState } from "react";

import styles from "./EditModal.module.css";
import { motion } from "framer-motion";
import { EditContext } from "../../store/editContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function EditModal() {
  const { state, dispatch } = useContext(EditContext);
  const [inputAmount, setInputAmount] = useState("");


  const baseUrl = process.env.REACT_APP_BASE_URL;

  

  const { title, author, category, amount } = state;

  const onRemove = () => dispatch({ type: "REMOVE" });

  const editAmount = async (state) => {

    await axios
      .patch(`${baseUrl}/api/books/edit-book/`, {
        id: state.id,
        title: state.title,
        author: state.author,
        amount: inputAmount,
        book_category: state.book_category,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Successfully Updated Book");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("This didn't work.Something Went Wrong...");
      });
  };

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
    },
  };

 

  return (
       
     
   
     <div className={styles.backdrop} onClick={onRemove}>
      <Toaster />
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className={styles.modal}
      >
        <div className={styles.editBookWrapper}>
          <div className={styles.editDiv}>
            <label className={styles.label}>Book Title :</label>
            {title}
          </div>
          <div className={styles.editDiv}>
            <label className={styles.label}>Book Author :</label>
            {author}
          </div>
          <div className={styles.editDiv}>
            <label className={styles.label}>Book Category :</label>
            {category}
          </div>

          <div className={styles.editDiv}>
            <label className={styles.label}>Book Amount :</label>
            {amount}
          </div>

          <form onSubmit={() => editAmount(state)} className={styles.form}>
            <h4> CHANGE AMOUNT :</h4>
            <input
              type="number"
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
            />
            <button>Submit</button>
          </form>
        </div>

        <button className={styles.btn} onClick={onRemove}>
          Done
        </button>
      </motion.div>
     </div>
     
    );  
};
export default EditModal;
