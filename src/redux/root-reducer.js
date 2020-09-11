// Combines all the states of application together

import {combineReducers} from 'redux';
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
    user: userReducer,
    cart:cartReducer
})