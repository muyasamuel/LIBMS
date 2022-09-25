import { useContext } from "react";
import { EditContext } from "../store/editContext";
import styles from "./EditModal.module.css";
import { motion } from "framer-motion";

function EditModal() {
  const { state, dispatch } = useContext(EditContext);

  const { title, author, category, amount } = state;

  const onRemove = () => dispatch({ type: "REMOVE" });

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
      <motion.div 
      
      onClick={(e) => e.stopPropagation()}
       className={styles.modal}>
        <div className={styles.editBookWrapper}>
          <h3> TITLE : {title}</h3>
          <h4> AUTHOR: {author}</h4>
          <h4> CATEGORY: {category}</h4>
          <h4> AMOUNT: {amount}</h4>

          <form>
            <h4> CHANGE AMOUNT :</h4>
            <input type="number" />
            <button>Submit</button>
          </form>
        </div>

        <button onClick={onRemove}>Done</button>
      </motion.div>
    </div>
  );
}

export default EditModal;
