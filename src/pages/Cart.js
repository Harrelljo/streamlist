// src/pages/Cart.js
import React from "react";

const Cart = ({ cart, checkout }) => {
  return (
    <div>
      <h1>Cart Page</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h2>Items in your Cart:</h2>
          <ul>
            {cart.map((movie, index) => (
              <li key={index}>
                <strong>{movie.title}</strong> ({movie.release_date})
              </li>
            ))}
          </ul>
          <button onClick={checkout}>Submit Payment</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
