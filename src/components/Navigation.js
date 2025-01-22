import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaCartPlus, FaInfoCircle } from "react-icons/fa"; // Import the icons
import "./../styles/navigation.css"; // Import the CSS for styling

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FaHome size={24} /> Home
          </Link>
        </li>
        <li>
          <Link to="/search">
            <FaSearch size={24} /> Search
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <FaCartPlus size={24} /> Cart
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaInfoCircle size={24} /> About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
