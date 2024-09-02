import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { USER_LOGIN_SUCCESS } from "../redux/types";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const [islogin, setIslogin] = useState(false);

  const submitHandler =async (e) => {
    try {
      console.log("click");

      e.preventDefault();
     await dispatch(login(email, password));

      let data = localStorage.getItem("userInfo");
console.log('data,',data);

      if (data != null) {
        setTimeout(() => {
          console.log("data");
          window.location.reload();
        }, 900);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log("userInfo", userInfo);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
