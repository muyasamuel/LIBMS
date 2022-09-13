import { createContext, useState } from "react";

const editContext = createContext();

const EditProvider = ({children}) => {
   const [ editCartSeen, setEditCartSeen] =  useState(false);

   const showEditCart = () => {
    setEditCartSeen(true);
   };

   const removeEditCart = () => {
    setEditCartSeen(false);
   }


    return (
        <editContext.Provider value={{
            editCartSeen,
            showEditCart,
            removeEditCart

        }}>
            {children}
        </editContext.Provider>
    )
};

export { editContext, EditProvider}