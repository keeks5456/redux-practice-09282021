import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//redux things
import { createStore, applyMiddleware, compose } from "redux";
import allReducers from './reducers'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk' 
//logger
// const reduxLogger = require('redux-logger')
import logger from "redux-logger";

import { composeWithDevTools } from "redux-devtools-extension";


// let store = createStore(allReducers, compose(applyMiddleware(logger),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//   ) //the create store will pass in a reducer, middleware, and redux tool extention

//middleware with thunk
// let store = createStore(allReducers, compose(applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//   ) //the create store will pass in a reducer, middleware, and redux tool extention


let store = createStore(allReducers, composeWithDevTools(applyMiddleware(logger))) 
//this is how we can utilize the redux devtools without calling the extension



ReactDOM.render(
  <Provider store={store}>
 
    <App />
    </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*

/STORE -> globalized state
//let store = createStore(reducer) //the create store will pass in a reducer as a param


// ACTION -> describes what you want to do --> ex) INCREMENT
// -----> an action is a function that returns and object
const increment = () =>{
  return {
    type: 'INCREMENT'
  }
}

const decrement = () =>{
  return {
    type: 'DECREMENT'
  }
}

const counter = (state = 0, action) =>{
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1
  }
}

let store = createStore(counter)

// REDUCER -> how actions transform state into new state  (thing of it as setState?)
//         modifies the STORE

//display in console
store.subscribe(() =>console.log(store.getState()))
// DISPATCH --> execute action

*/