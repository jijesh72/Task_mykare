import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const usersData = { email: 'admin@gmail.com', password: 'admin' }
  ;

  const navigate=useNavigate()
  const [input,setInput]=useState({
    email:"",
    password:""
  })
  
  const handleLogin=(e)=>{
    e.preventDefault()
  const registerUser=JSON.parse(localStorage.getItem("user"))

  if(input.email===usersData.email&&input.password===usersData.password)
    {
      navigate("/admin")
    }

  else if(input.email===registerUser.email&&input.password===registerUser.password)
    {
      navigate("/home")
    }
    else
    alert("Not registered")
  }

  return (
    <div>
      <form onSubmit={handleLogin} >
        <h2>Login</h2>
        <input type='email' name='email' placeholder='Email' required onChange={e=>setInput({...input,email:e.target.value})}></input>
        <br></br>
        <input type='password' name='password' placeholder='Password' required onChange={e=>setInput({...input,password:e.target.value})}></input>
        <br />
        <button type='submit'>Login</button>
        <Link to="/register">Register</Link>

      </form>
    </div>
  )
}

export default Login
