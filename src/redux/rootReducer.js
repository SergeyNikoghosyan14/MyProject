import { combineReducers } from "redux"; // sranov menq miacnum enq
import { likesReducer } from "./about/reducer";
// bolor reducernery mer komponentneri;

const rootReducer = combineReducers({//aystex menq grelu enq bolor reducernery
       text: likesReducer,
       likes: likesReducer,
       comments: likesReducer,
       
       
})

export default rootReducer