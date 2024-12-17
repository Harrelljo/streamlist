import React from "react";
import "../styles.css"; // Correct import path for global styles

function Navigation() {
  return (
    <nav>
      <ul>
        <li><a href="/">StreamList</a></li>
        <li><a href="/movies">Movies</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
