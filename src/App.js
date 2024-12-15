// src/App.js
import React from 'react';
import './styles.css'; // Import the CSS file here
import Navbar from './components/Navbar';
import StreamList from './components/StreamList';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <StreamList />
    </div>
  );
};

export default App;
