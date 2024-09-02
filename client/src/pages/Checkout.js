import React from 'react';
import { useSelector } from 'react-redux';
import OrderSummary from '../components/OrderSummary';
import { useDispatch } from 'react-redux';
import { placeOrder} from "../redux/actions"
import { toast } from "react-toastify";
// import { placeOrder } from '../../../server/controller/orderController';

const Checkout = () => {
  let dispatch =useDispatch()
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
    
}
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
      <OrderSummary order={{ products: cartItems, totalPrice }} />
      <button onClick={checkOut}  disabled={cartItems.length> 0 ? false : true} className="mt-4 bg-green-500 text-white py-2 px-4 rounded">Place Order</button>
    </div>
  );
};

export default Checkout;
