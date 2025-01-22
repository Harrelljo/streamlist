import React, { useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard"; // Your MovieCard component for displaying each movie

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState(""); // To store the search term
  const [movies, setMovies] = useState([]); // To store the list of movies from the API
  const [loading, setLoading] = useState(false); // To manage loading state

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY; // Your API key from .env file
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`;

  // Handle search and fetch data
  const handleSearch = () => {
    if (searchTerm.trim()) {
      setLoading(true);
      axios
        .get(API_URL)
        .then((response) => {
          setMovies(response.data.results); // Store results
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  };

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term
        placeholder="Search for a movie"
      />
      <button onClick={handleSearch}>Search</button>

      {/* Loading Indicator */}
      {loading && <p>Loading...</p>}

      {/* Display Movies */}
      <div>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
