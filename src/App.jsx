// src/App.jsx
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Adminhome from './pages/Admin/Adminhome';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Login/> } />
        <Route  path="/register" element={<Register/> } />
        <Route path='/home' element={<Home/>}/>
        <Route path='/admin' element={<Adminhome/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
