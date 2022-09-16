export const EditReducer = (state, action) => {
    if(action.type === 'EDIT'){
        return {
            ...state, author: action.payload.author
        }

    }
}