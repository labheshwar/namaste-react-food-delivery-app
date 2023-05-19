import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeItem } from '../Redux/Slices/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className='px-4 py-8 bg-teal-50 h-screen w-full'>
      <div className='container mx-auto'>
        <h1 className='text-3xl font-bold mb-4'>Cart</h1>
        {cartItems.length === 0 ? (
          <p className='text-lg'>Your cart is empty.</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className='bg-teal-600 text-white p-4 rounded-lg shadow-md relative h-48'
              >
                <h3 className='text-xl font-bold mb-2'>{item.name}</h3>
                <p className='text-lg mb-2'>Quantity: {item.quantity}</p>
                <p className='text-lg'>
                  Total Price: Rs. {item.price * item.quantity}/-
                </p>
                <button
                  className='absolute bottom-4 right-4 bg-teal-800 text-white py-2 px-4 rounded-md hover:bg-teal-900'
                  onClick={() => handleRemoveItem(item)}
                >
                  Remove from Cart
                </button>
              </div>
            ))}
          </div>
        )}
        {cartItems.length > 0 && (
          <div className='flex justify-end mt-4'>
            <button
              className='bg-gray-300 text-gray-800 py-2 px-4 rounded-md mr-4 hover:bg-gray-400'
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
