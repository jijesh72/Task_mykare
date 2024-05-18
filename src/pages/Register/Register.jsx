import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [input,setInput]=useState([{
        name:"",
        email:"",
        password:""
    }])
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        localStorage.setItem('user',JSON.stringify(input))
        console.log(input);
        navigate("/")

    }
  return (
    <div>
    <form onSubmit={handleSubmit} >
      <h2>Register</h2>
      <input type='text' name='name' placeholder='Name' required onChange={e=>setInput({...input,name:e.target.value})}></input>
      <br></br>
      <input type='email' name='email' placeholder='Email' required onChange={e=>setInput({...input,email:e.target.value})}></input>
      <br></br>
      <input type='password' name='password' placeholder='Password' required onChange={e=>setInput({...input,password:e.target.value})}></input>
      <br />
      <button type='submit'>Register</button>

    </form>
  </div>
  )
}

export default Register
