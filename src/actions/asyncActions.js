import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, FETCH_USERS_REQUEST} from "./actionTypes";
const axios = require("axios");

//loading data
export const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

//action creators

export const fetchUsers = () => {
  return function (dispatch){
    dispatch(fetchUserRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) =>{
      const users = res.data.map((user => user.id))
      dispatch(fetchUserSuccess(users))
    })
    .catch((error) =>{
      dispatch(fetchUserFailure(error.message))
      //error.message
    })
  }
};

