import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import App component
import "./styles/styles.css"; // Import global CSS
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
