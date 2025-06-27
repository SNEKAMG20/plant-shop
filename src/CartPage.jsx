import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../redux/cartSlice';
import Header from '../components/Header';

function CartPage() {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = useSelector(state => state.cart.totalItems);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div style={{ padding: '20px' }}>
        <h2>Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty 😢</p>
        ) : (
          <div>
            {cartItems.map(item => (
              <div key={item.id} style={{
                display: 'flex', alignItems: 'center',
                marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px'
              }}>
                <img src={item.image} alt={item.name} width="100" style={{ borderRadius: '8px' }} />
                <div style={{ marginLeft: '20px', flexGrow: 1 }}>
                  <h3>{item.name}</h3>
                  <p>₹{item.price} x {item.quantity}</p>
                  <p><strong>Subtotal:</strong> ₹{item.price * item.quantity}</p>
                  <button onClick={() => dispatch(decrement(item.id))}>-</button>
                  <button onClick={() => dispatch(increment(item.id))}>+</button>
                  <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
                </div>
              </div>
            ))}

            <h3>Total Items: {totalItems}</h3>
            <h3>Total Price: ₹{totalPrice}</h3>

            <button onClick={() => alert('Coming Soon')} style={{ marginRight: '10px' }}>
              Checkout
            </button>

            <a href="/products">
              <button>Continue Shopping</button>
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default CartPage;
