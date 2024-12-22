import React from 'react';
import Navigation from './components/Navigation';
import StreamList from './components/StreamList';
import './styles/styles.css';

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <StreamList />
    </div>
  );
};

export default App;
