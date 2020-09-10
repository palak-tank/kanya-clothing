// Function with two properties: state (last state or initial state),
// action (object with action type: string & payload: something can be used for updating the state)
 
import {UserActionTypes} from "./user.types"

const INITIAL_STATE = {
  currentUser: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
export default userReducer;