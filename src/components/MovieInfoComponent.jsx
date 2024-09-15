import React, { useEffect, useState } from "react";
import Axios from "axios";


const MovieInfoComponent = (props) => {

  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 text-white p-6 justify-center border-b border-gray-700 fade-in">
      {movieInfo ? (
        <>
          <img src={movieInfo?.Poster} alt={movieInfo?.Title} className="h-80 object-cover rounded-md" />
          <div className="flex flex-col ml-8">
            <span className="text-2xl font-bold">
              {movieInfo?.Type}: <span className="font-light">{movieInfo?.Title}</span>
            </span>
            <span className="mt-2">IMDB Rating: <span className="font-light">{movieInfo?.imdbRating}</span></span>
            <span className="mt-2">Year: <span className="font-light">{movieInfo?.Year}</span></span>
            <span className="mt-2">Language: <span className="font-light">{movieInfo?.Language}</span></span>
            <span className="mt-2">Rated: <span className="font-light">{movieInfo?.Rated}</span></span>
            <span className="mt-2">Released: <span className="font-light">{movieInfo?.Released}</span></span>
            <span className="mt-2">Runtime: <span className="font-light">{movieInfo?.Runtime}</span></span>
            <span className="mt-2">Genre: <span className="font-light">{movieInfo?.Genre}</span></span>
            <span className="mt-2">Director: <span className="font-light">{movieInfo?.Director}</span></span>
            <span className="mt-2">Actors: <span className="font-light">{movieInfo?.Actors}</span></span>
            <span className="mt-2">Plot: <span className="font-light">{movieInfo?.Plot}</span></span>
            <button
              onClick={() => props.onMovieSelect()}
              className="self-start mt-4 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default MovieInfoComponent;
