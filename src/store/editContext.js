import { createContext, useState, useReducer } from "react";
import { EditReducer } from "../reducers/EditReducer";

const EditContext = createContext();

const defaultState = {
    title: 'Rio',
    author: "kamikaze",
    category: 'novel',
    amount: 5

   
}

const EditProvider = ({children}) => {
   const [ editCartSeen, setEditCartSeen] =  useState(false);
   const [state , dispatch] = useReducer(EditReducer, defaultState);

   const showEditCart = () => {
    setEditCartSeen(true);
   };

   const removeEditCart = () => {
    setEditCartSeen(false);
   }
 


  
    return (
        <EditContext.Provider value={{
            editCartSeen,
            showEditCart,
            removeEditCart,
            dispatch,
            state

        }}>
            {children}
        </EditContext.Provider>
    )
};

export { EditContext, EditProvider}