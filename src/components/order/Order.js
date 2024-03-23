import React from 'react';
import { useOrder } from '../../context/OrderContext';

const Order = () => {
  const { orders } = useOrder();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Your Orders</h1>
      <div className="grid grid-cols-1 gap-4">
        {orders.map((order, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-md bg-primary">
            <h2 className="text-lg font-semibold mb-2">Order #{index + 1}</h2>
            <p className="text-gray-600 mb-2">Total Price: ${order.totalPrice.toFixed(2)}</p>
            <p className="text-gray-600 mb-4">Pickup Location: {order.pickupLocation}</p>
            <h3 className="text-md font-semibold mb-2">Items:</h3>
            <ul className="list-disc list-inside">
              {order.items.map((item, idx) => (
                <li key={idx} className="text-gray-700">{item.name} - Quantity: {item.quantity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
