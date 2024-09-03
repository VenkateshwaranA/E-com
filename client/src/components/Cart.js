import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="text-blue-500">Go back</Link></p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems.map((item) => (
            <div key={item.product._id} className="bg-white shadow-md rounded-lg p-4">
              <img src={item.product.imageUrl} alt={item.product.name} className="w-full h-32 object-cover mb-4" />
              <h2 className="text-lg font-semibold">{item.product.name}</h2>
              <p className="text-gray-600">${item.product.sellingPrice} x {item.quantity}</p>
              <button onClick={() => handleRemoveFromCart(item.product._id)} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <Link to="/checkout" className="block mt-4 bg-green-500 text-white py-2 px-4 rounded">
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default Cart;
