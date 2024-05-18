import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Adminhome() {
  const navigate = useNavigate();
  const arraydata = JSON.parse(localStorage.getItem("users"));

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('admin');
    if (!adminLoggedIn) {
      navigate('/');
    }
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('admin');
    navigate('/');
  };

  return (
    <div className='container mt-5 '>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='card'>
            <div className='card-body'>
              <h2 className='card-title text-center mb-4'>User Details</h2>
              <div className='table-responsive'>
                <table className='table table-hover'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Password</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arraydata.map((userData, index) => (
                      <tr key={index}>
                        <td>{userData.name}</td>
                        <td>{userData.email}</td>
                        <td>{userData.password}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                className='btn btn-danger btn-block'
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminhome;
