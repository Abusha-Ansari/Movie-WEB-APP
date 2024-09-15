import React from "react";
import { useState, useEffect } from "react";

const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100 * props.index);
    return () => clearTimeout(timer);
  }, [props.index]);

  return (
    <div
      className={`flex flex-col bg-gray-800 p-4 rounded-lg shadow-lg w-64 cursor-pointer ${show ? 'fade-in' : ''}`}
      onClick={() => {
        props.onMovieSelect(imdbID);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img src={Poster} alt={Title} className="h-64 object-cover rounded-md" />
      <span className="text-white text-lg font-semibold mt-4">{Title}</span>
      <div className="flex justify-between mt-2 text-gray-400">
        <span>Year: {Year}</span>
        <span>Type: {Type}</span>
      </div>
    </div>
  );
};

export default MovieComponent;
