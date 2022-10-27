import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const SignUp = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userType, setUserType] = useState("user");
    const navigate = useNavigate();
    const handleSubmit = () => {
        const data = {
            username: username,
            email: email,
            password: password,
            role: userType
        }
        fetch("http://localhost:8080/api/auth/signup",
    {
      method: "POST",
    headers: {
      'Content-Type':'application/json',
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      navigate(`/signup`);
    })
    }
  return (
    <div>
    Sign Up
    <input type="text" placeholder='username' value={username} onChange={e => setUsername(e.target.value)} />
    <input type="text" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
    <input type="text" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
    <select value={userType} onChange={e => setUserType(e.target.value)}>
        <option value="user">User</option>
        <option value="manager">Manager</option>
        <option value="admin">Admin</option>
    </select>
    <button onClick={handleSubmit}>Submit</button>
    <Link to="/">Already Registered? Login</Link>
    </div>
  )
}
