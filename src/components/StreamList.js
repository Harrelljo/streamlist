import React, { useState } from "react";
import "../styles.css"; // Correct import path for global styles

function StreamList() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Input:", input);
    setInput("");
  };

  return (
    <div>
      <h1>StreamList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a movie or program"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default StreamList;
