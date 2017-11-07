import {combineReducers} from "redux";

import cartReducer from "./cartReducer";

let rootReducer = combineReducers({
    cartItems: cartReducer
})

export default rootReducer;