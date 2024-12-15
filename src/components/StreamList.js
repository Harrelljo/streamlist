// src/components/StreamList.js
import React from 'react';
import StreamItem from './StreamItem';

const StreamList = () => {
  const streams = [
    { id: 1, title: 'Stream 1', description: 'Description for Stream 1' },
    { id: 2, title: 'Stream 2', description: 'Description for Stream 2' },
  ];

  return (
    <div className="stream-list">
      {streams.map((stream) => (
        <StreamItem key={stream.id} stream={stream} />
      ))}
    </div>
  );
};

export default StreamList;
