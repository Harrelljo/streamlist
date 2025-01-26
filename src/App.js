import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route from react-router-dom
import Navigation from "./components/Navigation"; // Import Navigation component
import MovieSearch from "./pages/MovieSearch"; // Import MovieSearch component
import Cart from "./pages/Cart"; // Import Cart page component
import "./styles/styles.css"; // Import global CSS

function App() {
  const [cart, setCart] = useState([]); // Manage the cart state
  const [paymentStatus, setPaymentStatus] = useState(""); // Manage payment status

  // Add movie to cart
  const addToCart = (movie) => {
    setCart((prevCart) => [...prevCart, movie]); // Add movie to cart
  };

  // Handle checkout (simulated payment process)
  const checkout = () => {
    setPaymentStatus("Thank you! Your purchase is successful.");
    setCart([]); // Clear the cart after successful purchase
  };

  return (
    <div>
      <Navigation /> {/* Render the Navigation component */}
      <Routes>
        <Route
          path="/"
          element={<MovieSearch addToCart={addToCart} />} // Pass addToCart to MovieSearch
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} checkout={checkout} />} // Pass cart and checkout to Cart
        />
      </Routes>
      {paymentStatus && <p>{paymentStatus}</p>} {/* Display payment status */}
    </div>
  );
}

export default App;
