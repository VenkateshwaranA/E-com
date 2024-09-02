import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions";
import { USER_LOGIN_SUCCESS } from "../redux/types";

const Navbar = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const handleLogout = () => {
    dispatch(logout());
  };
  const [islogin, setIslogin] = useState(false);
  // useState,useEffect
  useEffect(() => {
    try {
      let data = localStorage.getItem("userInfo");
      console.log("dss", data);
   
      if (data == null) {
        setIslogin(false);
      } else {
        // dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        setIslogin(true);
      }
    } catch (err) {
      console.log(err, "error in initila");
    }
  }, []);
  // Calculate total number of items in the cart
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl">
          E-Commerce
        </Link>
        <div className="space-x-4">
          {islogin ? (
            <>
              <Link to="/orders" className="text-gray-300">
                My Orders
              </Link>
              <button onClick={handleLogout} className="text-gray-300">
                Logout
              </button>
              <div className="relative inline-block">
            <Link to="/cart" className="text-gray-300 flex items-center">
              Cart
            </Link>
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1 transform translate-x-1/2 -translate-y-1/2">
                {totalItems}
              </span>
            )}
          </div>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-300">
                Login
              </Link>
              <Link to="/signup" className="text-gray-300">
                Sign Up
              </Link>
            </>
          )}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
