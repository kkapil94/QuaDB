import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const { data } = await axios.get(
      "https://api.tvmaze.com/search/shows?q=all"
    );
    setMovies(data);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <div className="bg-stone-100 mt-10 py-8 rounded-lg">
        <h1 className="mb-8 text-center text-4xl">Recommended Movies</h1>
        <div className="grid grid-cols-4 gap-8 mb-8 px-8">
          {movies &&
            movies.map((movie) => (
              <Link to={`/movie/${movie?.show?.id}`} key={movie?.show?.id}>
                <MovieCard movie={movie} />
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
