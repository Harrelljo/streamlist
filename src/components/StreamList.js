import React, { useState } from "react";
import "./styles.css";

function StreamList() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Input:", input);
    setInput(""); // Clear the input field
  };

  return (
    <div className="container">
      <h2>Welcome to StreamList</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a movie/program to your list"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default StreamList;
