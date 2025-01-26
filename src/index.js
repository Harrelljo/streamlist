import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import App component
import "./styles/styles.css"; // Import global CSS
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Import service worker registration

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Register the service worker for PWA
serviceWorkerRegistration.register();
