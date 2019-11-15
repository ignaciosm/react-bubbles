import React, {useState} from "react";
import axios from 'axios';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value 
    })
  }

  const handleLogin = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", user )
      .then(response => {
        console.log("response", response.data.payload);
        localStorage.setItem("token", response.data.payload );
        console.log('localStorage.getItem("token")',localStorage.getItem("token"))
      })
    
    console.log('user', user)
  }  

  // token: ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      {/* <p>Build a login page here</p> */}
      <form onSubmit={handleLogin} >
        <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} className=""/>
        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} className=""/>
        <button className="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
