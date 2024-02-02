import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { Link } from "react-router-dom";
import MoviesListShimmerUi from "./MoviesListShimmerUi";

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
      <div className="bg-stone-100 xs:max-md:mt-2 mt-10 py-8 xs:max-md:pb-1 rounded-lg">
        <h1 className="mb-8 text-center xs:max-md:text-2xl text-4xl">
          Recommended Movies
        </h1>

        {!movies.length ? (
          <MoviesListShimmerUi />
        ) : (
          <div className="grid xs:max-md:grid-cols-2 md:max-lg:grid-cols-3 grid-cols-4 md:max-lg:gap-4 xs:max-md:gap-3 gap-8 mb-8 xs:max-md:px-2 xs:max-lg:px-4 px-8">
            {movies &&
              movies.map((movie) => (
                <Link to={`/movie/${movie?.show?.id}`} key={movie?.show?.id}>
                  <MovieCard movie={movie} />
                </Link>
              ))}
          </div>
        )}
      </div>
    </>
  );
}
