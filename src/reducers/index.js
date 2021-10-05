//you can give these any names you want ex: counerReducer === counter
//loggedReducer === logged

import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import formData from "./formData";
import { cakeIceCream } from "./cakeIceCreamReducer";
import userReducer from "./userReducer";


import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  auth: loggedReducer,
  formData: formData,
  cakeIceCream: cakeIceCream,
  users: userReducer
})

export default allReducers