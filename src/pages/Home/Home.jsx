import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
useEffect(()=>{
  const loggedinUser = localStorage.getItem("user");
  if (!loggedinUser) {
    navigate('/');
  }
},[])
  

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user"); // Remove the user from local storage
    navigate("/");
  };

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='card'>
            <div className='card-body'>
              <h2 className='card-title text-center mb-4'>Welcome to User Home</h2>
              <div className='my-4 d-flex justify-content-center'>
                <button className='btn btn-info' onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
