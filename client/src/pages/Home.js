import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, login } from "../redux/actions";
import ProductCard from "../components/ProductCard";
import Signup from "./Signup";
import Login from "./Login";
import { USER_LOGIN_SUCCESS } from "../redux/types";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [islogin, setIslogin] = useState(false);
  useEffect(() => {
    try {
      let data = localStorage.getItem("userInfo");
      console.log("dss", data);
      if (data == null) {
        setIslogin(false);
      } else {
        setIslogin(true);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      }
    } catch (err) {
      console.log(err, "error in initila");
    }
  }, [dispatch]);

  useEffect(() => {
    let data = localStorage.getItem("userInfo");
    console.log("dss", data);
    if (data != null) {
      dispatch(fetchProducts());

    }
  }, [dispatch]);



  return (
    <div className="container mx-auto p-4">
        {islogin ? (
          <>
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
      </div>
          </>
        ) : (
          <div  className="container mx-auto p-4">
            <Login />
          </div>
        )}
    </div>
  );
};

export default Home;
