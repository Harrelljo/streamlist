// src/components/StreamItem.js
import React from 'react';

const StreamItem = ({ stream }) => {
  return (
    <div className="stream-item">
      <h2>{stream.title}</h2>
      <p>{stream.description}</p>
    </div>
  );
};

export default StreamItem;
