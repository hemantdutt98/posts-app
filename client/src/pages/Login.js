import React, { useState } from 'react'
import axios from 'axios';
import '../stylesheets/Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const data = {username:username, password: password};
    axios.post("http://localhost:3001/auth/login", data).then((res) => {
      if(res.data.error) alert(res.data.error);
      else sessionStorage.setItem("accessToken", res.data);
      navigate("/");
    })
  }

  return (
    <div className='loginContainer'>
      <label>Username:</label>
      <input type="text" onChange={(event) => setUsername(event.target.value)} />
      <label>Password:</label>
      <input type="password" onChange={(event) => setPassword(event.target.value)} />
      <button type='submit' onClick={login}>Login</button>
    </div>
  )
}

export default Login