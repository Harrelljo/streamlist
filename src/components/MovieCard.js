import React from "react";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`; // Get the full-size poster image from TMDB

  return (
    <div className="movie-card">
      {/* Display poster image if available */}
      {movie.poster_path ? (
        <img src={posterUrl} alt={movie.title} />
      ) : (
        <p>No poster available</p>
      )}
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p> {/* Show a brief description of the movie */}
    </div>
  );
};

export default MovieCard;
