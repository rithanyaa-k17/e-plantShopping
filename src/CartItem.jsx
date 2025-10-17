import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.name} className="cart-item">
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} style={{ width: '100px' }} />
            <p>Price: ${item.cost}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleDecrement(item)}>-</button>
            <button onClick={() => handleIncrement(item)}>+</button>
            <button onClick={() => dispatch(removeItem(item.name))}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartItems;