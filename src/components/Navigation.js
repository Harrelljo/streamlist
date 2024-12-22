import React from 'react';
import '../styles/navigation.css';

const Navigation = () => {
  return (
    <nav>
      <div className="brand">StreamList</div>
      <div>
        <a href="#home">Home</a>
        <a href="#movies">Movies</a>
        <a href="#cart">Cart</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
};

export default Navigation;
