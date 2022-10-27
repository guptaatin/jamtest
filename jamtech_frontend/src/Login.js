import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleSubmit = () => {
        fetch("http://localhost:8080/api/auth/signin",
    {
      method: "POST",
    headers: {
      'Content-Type':'application/json',
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      "username": username,
    "password": password
    })
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      navigate(`/home/${json.username}/${json.role}`);
    })
    }
  return (
    <div>
    Login
    <input type="text" placeholder='username' value={username} onChange={e => setUsername(e.target.value)} />
    <input type="text" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
    <button onClick={handleSubmit}>Submit</button>
    <Link to="/signup">Not Registered? SignUp</Link>
    </div>
  )
}
