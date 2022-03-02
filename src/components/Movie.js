import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="movie">
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <h2>{movie.Title}</h2>
      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;
