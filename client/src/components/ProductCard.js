import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import { toast } from "react-toastify";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product, 1));
    toast.success("item added to the cart")
  
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-green-600">${product.sellingPrice}</p>
        <button onClick={handleAddToCart} className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
