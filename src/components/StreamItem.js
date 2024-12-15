// src/components/StreamItem.js

import React from 'react';

function StreamItem({ stream }) {
  return (
    <div className="stream-item">
      <h2>{stream.title}</h2>
      <p>{stream.description}</p>
      {/* You can display other details, like image, link, etc. */}
    </div>
  );
}

export default StreamItem;
