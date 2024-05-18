import React from 'react';

function Adminhome() {
  // Retrieve user data from local storage
  const users = JSON.parse(localStorage.getItem('user')) || []; // Initialize as an empty array

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='w-50 bg-white rounded p-3'>
        <div className='p-2'>
          <h2 className='fst-italic'>User Details</h2>
          <table className='table table-hover table-responsive'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {users.map((userData, index) => (
                <tr key={index}>
                  <td>{userData.name}</td>
                  <td>{userData.email}</td>
                  <td>{userData.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Adminhome;
