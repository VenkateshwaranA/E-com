import React from 'react';
import { useSelector } from 'react-redux';
import OrderSummary from '../components/OrderSummary';
import { useDispatch } from 'react-redux';
import { placeOrder,removeFromCart} from "../redux/actions"
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  let dispatch =useDispatch()
  const navigate =useNavigate()
  const { cartItems } = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.product.sellingPrice * item.quantity, 0);
const checkOut=()=>{
 let userData= localStorage.getItem("userInfo")
 let {product} =cartItems[0]
  console.log("place clic",cartItems,totalPrice,product,)
  let obj ={
    products:[{

      "product": product._id,
      "quantity": product.quantity
    }
    ],
    totalPrice
  }
  dispatch(placeOrder(JSON.stringify(obj)))
  toast.success("Product added successfully");

  dispatch(removeFromCart(product._id));
  navigate("/")
    
}
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
      <OrderSummary order={{ products: cartItems, totalPrice }} />
      <button onClick={checkOut}  disabled={cartItems.length> 0 ? false : true}  className={`mt-4 ${cartItems.length > 0 ? "bg-green-500" :  "bg-green-300"} text-white py-2 px-4 rounded`}>Place Order</button>
    </div>
  );
};

export default Checkout;
