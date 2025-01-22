import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route from react-router-dom
import Navigation from "./components/Navigation"; // Import Navigation component
import MovieSearch from "./pages/MovieSearch"; // Import MovieSearch component
import "./styles/styles.css"; // Import global CSS

function App() {
  return (
    <div>
      <Navigation /> {/* Render the Navigation component */}
      <Routes>
        <Route path="/" element={<MovieSearch />} /> {/* Main page with search */}
      </Routes>
    </div>
  );
}

export default App;
