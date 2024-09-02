import axios from "axios";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  SET_PRODUCTS,
  SET_ORDERS,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAIL,
} from "./types";

export const login = (email, password) => async (dispatch) => {
  const { data } = await axios.post(
    process.env.REACT_APP_API_END_POINT + "/api/auth/login",
    { email, password }
  );
  console.log("login", data);
  dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

  localStorage.setItem("userInfo", JSON.stringify(data));
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  window.location.reload();
  dispatch({ type: USER_LOGOUT });
};

export const addToCart = (product, quantity) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: { product, quantity },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART, payload: id });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const fetchProducts = () => async (dispatch) => {
  const { data } = await axios.get(
    process.env.REACT_APP_API_END_POINT + "/api/products"
  );
  dispatch({ type: SET_PRODUCTS, payload: data });
};

export const fetchOrders = () => async (dispatch, getState) => {
  const userInfo = getState().auth["userInfo"];
  console.log("uss", userInfo, getState(), JSON.parse(userInfo).token);

  const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(userInfo).token}`,
    },
  };
  const { data } = await axios.get(
    process.env.REACT_APP_API_END_POINT + "/api/orders/myorders",
    config
  );
  dispatch({ type: SET_ORDERS, payload: data });
};

export const placeOrder = (orderData) => async (dispatch, getState) => {
  try{
    const userInfo = getState().auth["userInfo"];
    let data = localStorage.getItem("userInfo");
    console.log("userInfo", userInfo, orderData, JSON.parse(data).token);
  
    let url = `${process.env.REACT_APP_API_END_POINT}/api/orders`,headers= {
      Accept: '*/*',
      'Access-Control-Allow-Origin' :"*",
      Authorization:`Bearer ${JSON.parse(data).token}`,
      'Content-Type': 'application/json'
    }
    var options = {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Access-Control-Allow-Origin' :"*",
        Authorization:`Bearer ${JSON.parse(data).token}`,
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(orderData)
      
    };
  
    console.log('optionsss',options
    );
    
    // let oderplaced = await axios(options);
    let oderplaced = await axios.post(url, orderData,{headers} );
  
    console.log("oderplaced", oderplaced);

  }catch(error){
console.error("error in place order",error);
  }
  // dispatch({type})
};
