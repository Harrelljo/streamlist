import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route from react-router-dom
import Navigation from "./components/Navigation"; // Import Navigation component
import StreamList from "./components/StreamList"; // Import StreamList component
import Movies from "./components/Movies"; // Import Movies component
import Cart from "./components/Cart"; // Import Cart component
import About from "./components/About"; // Import About component
import "./styles/styles.css"; // Import global CSS

function App() {
  return (
    <div>
      <Navigation /> {/* Render the Navigation component */}
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
