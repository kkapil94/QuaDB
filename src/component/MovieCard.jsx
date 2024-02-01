import React from "react";

export default function MovieCard({ movie }) {
  const { image, name, genres, runtime, language, rating } = movie?.show;
  return (
    <div className="w-full rounded-lg relative cursor-pointer hover:scale-105 transition-all duration-150 ease-in">
      <div>
        <span className="absolute flex items-center right-4 h-6 top-2 text-center border-[1px] border-solid px-2 rounded-lg text-slate-50 bg-slate-800">
          <img className="w-4 inline-block" src="/img/star.png" alt="" />
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
        <span className="text-xl">{name}</span>
        <div className="flex items-center gap-2">
          <span className="border-[1px] inline-block min-w-12 border-solid border-violet-950 px-1 text-center text-md rounded-xl">
            {genres[0]}
          </span>
          <span className="border-[1px] inline-block border-solid min-w-12 border-violet-950 px-1 text-center text-md rounded-xl">
            {language}
          </span>
          <span className="border-[1px] inline-block border-solid min-w-12 border-violet-950 px-1 text-center text-md rounded-xl">
            {runtime ? runtime : "-"}
          </span>
        </div>
      </div>
    </div>
  );
}
