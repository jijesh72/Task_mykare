import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const usersarray = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = usersarray.some(u => u.email === input.email);

    if (userExists) {
      alert("Email already registered");
      navigate("/register");
    } else {
      usersarray.push(input);
      localStorage.setItem('users', JSON.stringify(usersarray));
      navigate("/");
    }
  };

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='card'>
            <div className='card-body'>
              <h2 className='card-title text-center mb-4'>Registration</h2>
              <form onSubmit={handleSubmit} className='login-form'>
                <div className='form-group'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    className='form-control'
                    required
                    onChange={e => setInput({ ...input, name: e.target.value })}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='form-control'
                    required
                    onChange={e => setInput({ ...input, email: e.target.value })}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='form-control'
                    required
                    onChange={e => setInput({ ...input, password: e.target.value })}
                  />
                </div>
                <button type='submit' className='btn btn-success btn-block'>
                  Register
                </button>
                <p className='mt-3 text-center'>
                  Already registered? <Link to='/'>Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
