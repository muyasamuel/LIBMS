
export const EditReducer = (state, action) => {
    if(action.type === 'EDIT'){
        return {
            id: action.payload.id,
            author: action.payload.author,
            category: action.payload.book_category,
            title: action.payload.title,
            amount: action.payload.amount,
            editCartSeen: true,
    
        }

    }
    if(action.type === 'REMOVE'){
        return {
            ...state,
            editCartSeen: false,
        }
    }
}
