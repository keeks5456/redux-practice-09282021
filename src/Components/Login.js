import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formData, auth } from "../actions";

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);


  const handleChange = (e) =>{
    console.log(e.target)
    dispatch(formData({
      username: e.target.name,
      password: e.target.name
    }))
  }


  return (
    <div>
      <form>
        <label>Name:</label>
        <input onChange={(e) => handleChange(e)} type="name" placeholder="username" name="username"></input>
        <br />
        <br />
        <label>Password:</label>
        <input onChange={(e) => handleChange(e)} type="password" placeholder="password" name="password"></input>
      </form>
      <p>{auth ? 'logged in' : 'log in'}</p>
    </div>
  );
};

export default Login;
