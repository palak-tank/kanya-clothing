// Combines all the states of application together

import {combineReducers} from 'redux';
import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer
})