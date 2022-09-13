import { createContext, useState } from "react";

const EditContext = createContext();

const EditProvider = ({children}) => {
   const [ editCartSeen, setEditCartSeen] =  useState(false);

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
            removeEditCart

        }}>
            {children}
        </EditContext.Provider>
    )
};

export { EditContext, EditProvider}