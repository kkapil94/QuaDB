import React from "react";

export default function MovieCard({ movie }) {
  const { image, name, genres, runtime, language, rating } = movie?.show;
  return (
    <div className="w-full rounded-lg relative cursor-pointer hover:scale-105 xs:max-lg:hover:scale-100 transition-all duration-150 ease-in">
      <div>
        <span className="absolute xs:max-md:text-xs flex items-center xs:max-md:right-1 right-4 xs:max-md:h-4 h-6 top-2 text-center border-[1px] border-solid xs:max-md:px-1 px-2 rounded-lg text-slate-50 bg-slate-800">
          <img
            className="w-4 xs:max-md:w-3 inline-block"
            src="/img/star.png"
            alt=""
          />
          <span>{rating?.average ? rating?.average + "/10" : "- /10"}</span>
        </span>
      </div>
      <div>
        <span>
          <img
            className="w-full rounded-t-xl object-cover"
            src={image?.medium ? image?.medium : "/img/empty.png"}
            alt=""
          />
        </span>
      </div>
      <div className="py-3 border-[1px] border-solid pl-2 border-slate-300 bg-[#eddfdf] rounded-b-xl">
        <span className="xs:max-md:text-lg text-xl">{name}</span>
        <div className="flex items-center xs:max-md:gap-1 gap-2">
          <span className="border-[1px] xs:max-md:border-0 inline-block xs:max-md:min-w-6 min-w-12 border-solid xs:max-md:px-0 border-violet-950 px-1 text-center xs:max-md:text-xs text-md rounded-xl">
            {genres[0]}
          </span>
          <span className="border-[1px] xs:max-md:border-0 inline-block xs:max-md:min-w-6 border-solid min-w-12 xs:max-md:px-0 border-violet-950 px-1 text-center xs:max-md:text-xs text-md rounded-xl">
            {language}
          </span>
          <span className="border-[1px] xs:max-md:border-0 inline-block xs:max-md:min-w-6 border-solid min-w-12 xs:max-md:px-0 border-violet-950 px-1 xs:max-md:text-xs text-center text-md rounded-xl">
            {runtime ? runtime : "-"} mins
          </span>
        </div>
      </div>
    </div>
  );
}
