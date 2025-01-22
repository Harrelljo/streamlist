import React from "react";

function SearchBar({ query, setQuery, fetchMovies }) {
  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
