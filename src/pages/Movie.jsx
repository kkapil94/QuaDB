import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookTicketModal from "../component/BookTicketModal";

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const fetchMovieDetails = async () => {
    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    console.log(data);
    setMovie(data);
  };
  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <div className="w-11/12 m-auto bg-stone-100 mt-10 py-8 rounded-lg">
      <div className="flex items-center justify-between gap-12">
        <div className="flex items-center px-16 gap-16 my-8">
          <div>
            <span>
              <img
                className="w-64"
                src={
                  movie?.image?.medium ? movie?.image?.medium : "/img/empty.png"
                }
                alt=""
              />
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-4xl text-[#4c3336] tracking-wider font-semibold ">
              {movie?.name}
            </span>
            <span className="flex items-center justify-center text-xl bg-slate-800 text-gray-100 rounded-xl">
              <img className="w-4 inline-block" src="/img/star.png" alt="" />
              <span>
                {movie?.rating?.average
                  ? movie?.rating?.average + "/10"
                  : "- /10"}
              </span>
            </span>
            <span className="text-lg">Language: &nbsp; {movie?.language}</span>
            <span className="text-lg">
              Genre: &nbsp;
              {movie?.genres?.map((genre) => (
                <span className="brounded-xl">{genre}</span>
              ))}
            </span>
            <span className="text-lg">
              Runtime &nbsp; {movie?.runtime}mins.
            </span>
            <BookTicketModal movie={movie} />
          </div>
        </div>
        <div className="w-[1px] bg-slate-500 h-80"></div>
        <div className="w-[25rem] mr-20 flex flex-col justify-center">
          <div className="mb-8 ">
            <h2 className="text-3xl font-bold tracking-wider text-[#4c3336]">
              Summary
            </h2>
            <p className="text-lg tracking-wide">
              {movie?.summary?.replace(/(<([^>]+)>)/gi, "")}
            </p>
          </div>
          <div className="w-full h-[1px] bg-slate-500"></div>
          <div className="text-lg tracking-wider mt-8">
            <h2 className="text-3xl text-[#4c3336] font-bold tracking-wider mb-4">
              Schedule
            </h2>
            <div>
              <span>Days:</span>
              {movie?.schedule?.days?.map((day) => (
                <span className="text-xl tracking-wide">{day}</span>
              ))}
              <br />
              <span>Time</span>
              {movie?.schedule?.time}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
