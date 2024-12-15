// src/components/StreamList.js

import React from 'react';
import StreamItem from './StreamItem';  // Importing StreamItem

const streams = [
  { id: 1, title: 'Stream 1', description: 'This is stream 1.' },
  { id: 2, title: 'Stream 2', description: 'This is stream 2.' },
  { id: 3, title: 'Stream 3', description: 'This is stream 3.' },
];

function StreamList() {
  return (
    <div>
      <h1>Stream List</h1>
      <div className="stream-list">
        {streams.map(stream => (
          <StreamItem key={stream.id} stream={stream} />
        ))}
      </div>
    </div>
  );
}

export default StreamList;
