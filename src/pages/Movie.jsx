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
    <div className="w-11/12 m-auto bg-stone-100 mt-10 xs:max-lg:py-0 py-8 rounded-lg">
      <div className="flex xs:max-lg:flex-col items-center justify-between xs:max-lg:gap-4 gap-12">
        <div className="flex xs:max-lg:flex-col xs:max-lg:px-4 px-16 xs:max-lg:gap-8 gap-16 my-8">
          <div className="w-full">
            <span>
              <img
                className="min-w-64 "
                src={
                  movie?.image?.medium ? movie?.image?.medium : "/img/empty.png"
                }
                alt=""
              />
            </span>
          </div>
          <div className="flex xs:max-lg:w-full flex-col xs:max-lg:gap-3 gap-6">
            <span className="text-4xl xs:max-lg:text-2xl text-[#4c3336] tracking-wider font-semibold ">
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
        <div className="w-[1px] xs:max-lg:hidden bg-slate-500 lg:max-2xl:h-80"></div>
        <div className="lg:max-2xl:w-[25rem]  xs:max-lg:px-4 lg:max-2xl:mr-20 flex flex-col justify-center">
          <div className="mb-8 ">
            <h2 className="text-3xl xs:max-lg:text-xl font-bold tracking-wider text-[#4c3336]">
              Summary
            </h2>
            <p className="text-lg xs:max-lg:text-sm tracking-wide">
              {movie?.summary?.replace(/(<([^>]+)>)/gi, "")?.substring(0, 300)}
            </p>
          </div>
          <div className="w-full h-[1px] bg-slate-500"></div>
          <div className="text-lg tracking-wider xs:max-md:mt-4 mt-8">
            <h2 className="text-3xl xs:max-lg:text-xl  text-[#4c3336] font-bold tracking-wider xs:max-md:mb-1 mb-4">
              Schedule
            </h2>
            <div className="md:max-lg:text-sm xs:max-md:text-sm">
              <span>Days:</span>
              {movie?.schedule?.days?.map((day) => (
                <span className="lg:max-2xl:text-xl ms:max-lg:text-lg  tracking-wide">
                  {day}
                </span>
              ))}
              <br />
              <span>Time:</span>
              {movie?.schedule?.time}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
