import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} - {item.price * item.quantity}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
