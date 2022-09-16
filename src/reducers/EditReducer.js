export const EditReducer = (state, action) => {
    if(action.type === 'EDIT'){
      
        return {
            editCartSeen: true,
    
        }

    }
    if(action.type === 'REMOVE'){
        return {
            editCartSeen: false,
        }
    }
}

