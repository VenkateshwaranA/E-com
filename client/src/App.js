import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import { ToastContainer } from "react-toastify";

  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
       <ToastContainer position="top-center" theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default App;
