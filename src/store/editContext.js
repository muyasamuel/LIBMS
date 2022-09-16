import { createContext,  useReducer } from "react";
import { EditReducer } from "../reducers/EditReducer";

const EditContext = createContext();

const defaultState = {
    
        title: '',
        author: "",
        category: '',
        amount: 0,
        editCartSeen: false

    
    
   
}

const EditProvider = ({children}) => {

   const [state , dispatch] = useReducer(EditReducer, defaultState);





  
    return (
        <EditContext.Provider value={{
            dispatch,
            state

        }}>
            {children}
        </EditContext.Provider>
    )
};

export { EditContext, EditProvider}