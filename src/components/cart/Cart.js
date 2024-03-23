import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useOrder } from '../../context/OrderContext';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const Cart = () => {
  const { cart, updateCart } = useCart();
  const { addOrder } = useOrder();
  const [pickupLocation, setPickupLocation] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State to control the display of the pop-up
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  // Decrement item quantity in cart
  const decrementQuantity = (index) => {
    const updatedCart = cart.map((item, i) => {
      if (i === index) {
        const updatedQuantity = Math.max(item.quantity - 1, 0); // Ensure quantity doesn't go below 0
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  // Increment item quantity in cart
  const incrementQuantity = (index) => {
    const updatedCart = cart.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  const placeOrder = () => {
    if (!pickupLocation) {
      alert('Please provide a pickup location.');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty. Add items to your cart before placing an order.');
      return;
    }

    const orderDetails = {
      items: cart,
      totalPrice,
      pickupLocation
    };
    addOrder(orderDetails);
    updateCart([]);
    setPickupLocation('');
    setShowPopup(true);
  };

  // Function to close the pop-up and navigate to the home page
  const closePopupAndNavigate = () => {
    setShowPopup(false);
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cart.map((item, index) => (
          <div key={index} className="bg-primary p-4 shadow-md rounded-md flex flex-col">
            <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-md mb-4" />
            <div>
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <IconButton onClick={() => decrementQuantity(index)} disabled={item.quantity === 1}>
                    <RemoveIcon />
                  </IconButton>
                  <span className="mx-2 text-xl font-semibold">{item.quantity}</span>
                  <IconButton onClick={() => incrementQuantity(index)}>
                    <AddIcon />
                  </IconButton>
                </div>
                <span className="text-gray-700 font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
            <IconButton onClick={() => removeFromCart(index)} className="mt-4 self-end">
              <CloseIcon />
            </IconButton>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8">
        <span className="text-gray-700 font-semibold text-lg">Total Price: ${totalPrice.toFixed(2)}</span>
        <button className="px-6 py-2 bg-stone-800 text-white rounded-md" onClick={placeOrder}>Place Order</button>
      </div>
      <div className="mt-8">
        <label htmlFor="pickupLocation" className="block text-gray-700 font-semibold mb-2">Pickup Location:</label>
        <input type="text" id="pickupLocation" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} className="w-full p-2 border rounded-md" />
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white p-8 rounded-md shadow-md text-center">
            <h2 className="text-xl font-semibold mb-4">Order Placed Successfully!</h2>
            <button className="px-4 py-2 bg-primary text-white rounded-md" onClick={closePopupAndNavigate}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
