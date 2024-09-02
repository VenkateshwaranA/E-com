import React from 'react';

const OrderSummary = ({ order }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-2">
      <h2 className="text-lg font-semibold mb-2">Order ID: {order._id}</h2>
      <p>Total Price: ${order.totalPrice}</p>
      <p>Items:</p>
      <ul className="list-disc ml-4">
        {order.products.map((item) => (<>
          <li key={item.product._id}>{item.product.product} x {item.quantity}</li>
         
        </>
        ))}
      </ul>
    </div>
  );
};

export default OrderSummary;
