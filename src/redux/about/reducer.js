import {
    INPUT_TEXT,
    INCREMENT,
    DECREMENT,
    COMMENT_CREATE,
    COMMENT_DELETE
} from './types'

const initialState = {
    text: '',
    likes: 0,
    comments: []
}


export const likesReducer = (state = initialState, action) => {
    console.log(action, 'action')
    switch (action.type) {
        case INPUT_TEXT:
            return {
                ...state,//կատարում ենք վիճակի կոպիան
                text: action.text, // թարմացնում ենք տեքստը
            };
        case INCREMENT:
            return {
                ...state,
                likes: state.likes + 1
            };
        case DECREMENT:
            return {
                ...state,
                likes: state.likes - 1
            };
        case COMMENT_CREATE: 
            return{
                ...state,
                comments: [ ...state.comments, action.data],
            };
        case COMMENT_DELETE:
            return(() => {
                const {id} = action
                const {comments} = state
                const itemIndex = comments.findIndex((res) => res.id === id)
                console.log(itemIndex,'itemIndex')
                
                const newComments = [
                    ...comments.slice(0,itemIndex),
                    ...comments.slice(itemIndex + 1),
                ];
                return {
                    ...state,
                    comments: newComments,
                }
            })()
        default:
            return state;
    }
}
