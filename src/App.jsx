import React, { useState } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilm } from '@fortawesome/free-solid-svg-icons';
import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/MovieInfoComponent";


function App() {
  
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

  const [searchQuery, updateSearchQuery] = useState("");
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();
  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect("");
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <div className="flex flex-col font-sans bg-black min-h-screen">
      <header className="flex items-center justify-between bg-black text-white p-4 shadow-md">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faFilm} className="text-blue-500 w-8 h-8" />
          <h1 className="text-2xl font-bold">React Movie App</h1>
        </div>
        <div className="flex items-center bg-white text-black rounded-md w-full lg:w-1/2 p-2">
          <FontAwesomeIcon icon={faSearch} className="text-black w-6 h-6" />
          <input
            type="text"
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
            className="flex-grow ml-2 bg-transparent border-none outline-none"
          />
        </div>
      </header>
      {selectedMovie && (
        <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />
      )}
      <div className="flex flex-wrap justify-center p-6 gap-6">
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
              index={index}
            />
          ))
        ) : (
          <FontAwesomeIcon icon={faFilm} className="text-blue-500 w-32 h-32 opacity-50 mt-32" />
        )}
      </div>
    </div>
  );
}

export default App;
