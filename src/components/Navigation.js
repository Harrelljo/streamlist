import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css"; // Import the styles for Navigation

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/search">
            <i className="fas fa-search"></i> Search
          </Link>
        </li>
        <li>
          <Link to="/movies">
            <i className="fas fa-film"></i> Movies
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i> Cart
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="fas fa-info-circle"></i> About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
