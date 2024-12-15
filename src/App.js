// src/App.js
import React from 'react';
import Navbar from './components/Navbar';  // Adjust the import path
import StreamList from './components/StreamList';  // Adjust the import path

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <StreamList />
    </div>
  );
};

export default App;
