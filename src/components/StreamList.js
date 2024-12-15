import React, { useState } from 'react';

function StreamList() {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <h1>Stream List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={input} 
          onChange={handleInputChange} 
          placeholder="Enter your stream" 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StreamList;
