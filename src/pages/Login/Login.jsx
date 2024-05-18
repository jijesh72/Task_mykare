import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const usersData = { email: 'admin@gmail.com', password: 'admin' };

  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const arrayuser = JSON.parse(localStorage.getItem('users')) ?? [];
    const inputUser = arrayuser?.find((u) => u.email === input.email);

    if (usersData.email === input.email && usersData.password === input.password) {
      localStorage.setItem('admin', true);
      navigate('/admin');
    } else if (!inputUser) {
      alert('Email does not exist');
      return;
    } else if (inputUser.password !== input.password) {
      alert('Invalid password');
      return;
    } else {
      localStorage.setItem('user', true);
      navigate('/home');
    }
  };

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='card'>
            <div className='card-body'>
              <h2 className='card-title text-center mb-4'>Welcome to User Home</h2>
              <form onSubmit={handleLogin} className='login-form'>
                <div className='my-4'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='form-control'
                    required
                    onChange={(e) => setInput({ ...input, email: e.target.value })}
                  />
                </div>
                <div className=''>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='form-control'
                    required
                    onChange={(e) => setInput({ ...input, password: e.target.value })}
                  />
                </div>
                <div className='my-4 d-flex justify-content-between align-items-center'>
                  <button type='submit' className='btn btn-success'>
                    Login
                  </button>
                  <Link to='/register'>
                    New user? Register!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
