import {
    INCREMENT,
    DECREMENT,
    INPUT_TEXT,
    COMMENT_CREATE,
    COMMENT_DELETE
} from './types'

export function inputText(text){
    return{
        type: INPUT_TEXT,
        text,
    }
}

export function incrementLikes(){
    return{
        type: INCREMENT,
    }
}

export function decrementLikes(){
    return{
        type: DECREMENT,
    }
}

export function commentCreate(text,id){
    return{
        type: COMMENT_CREATE,
        data: {text,id},       
    }
}
export default function commentDelete(id) {
    return {
        type: COMMENT_DELETE,
        id,
    }
}