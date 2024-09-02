import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    SET_PRODUCTS,
    SET_ORDERS,
 
  } from './types';
  
  export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const item = action.payload;
        const existItem = state.cartItems.find((x) => x.product._id === item.product._id);
        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.product._id === existItem.product._id ? item : x
            ),
          };
        } else {
          return { ...state, cartItems: [...state.cartItems, item] };
        }
      case REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.product._id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export const authReducer = (state = {}, action) => {
    console.log("reducer",state, action)
    switch (action.type) {
      case USER_LOGIN_SUCCESS:
        return { userInfo: action.payload };
      case USER_LOGOUT:
        return {};
      default:
        return state;
    }
  };
  
  export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case SET_PRODUCTS:
        return { products: action.payload };
      default:
        return state;
    }
  };
  
  export const orderReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
      case SET_ORDERS:
        return { orders: action.payload };
      default:
        return state;
    }
  };
  