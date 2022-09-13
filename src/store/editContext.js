import { createContext } from "react";

const editContext = createContext();

const EditProvider = ({children}) => {
    return (
        <editContext.Provider>
            {children}
        </editContext.Provider>
    )
};

export { editContext, EditProvider}