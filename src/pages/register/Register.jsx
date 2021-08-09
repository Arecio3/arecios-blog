import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try {
      const res = await axios.post('/auth/register', {
        username,
        email,
        password
      })
      res.data && window.location.replace('/login')
    } catch(err){
      setError(true)
    }  
  }
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter username.."
          onChange={e => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="example@gmail.com"
          onChange={e => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password"
          onChange={e => setPassword(e.target.value)}
        />
        <button className="registerButton" type='submit'>Register</button>
      </form>
      <button className="registerLoginButton">
      <Link className='link' to='/login'>Login</Link>
      </button>
     {error && <span style={{color:"rgb(255, 40, 0)", marginTop: 10}}>Something went horribly wrong</span>}
    </div>
  );
}
