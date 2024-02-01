import React from "react";

export default function MoviesListShimmerCard() {
  return (
    <>
      <div className="w-full h-[22rem] bg-[#C7C8CC] rounded-lg relative cursor-pointer hover:scale-105 transition-all duration-150 ease-in">
        <div>
          <span className="min-h-[23rem]">
            <img className="w-full rounded-t-xl object-cover" alt="" />
          </span>
        </div>
        <div className="py-3 border-[1px] border-solid pl-2 mt-[20rem] border-slate-300 bg-[#B4B4B8] rounded-b-xl">
          <span className="text-xl"></span>
          <div className="flex items-center gap-2">
            <span className="border-[1px] inline-block min-w-12 border-solid px-1 text-center text-md rounded-xl"></span>
            <span className="border-[1px] inline-block border-solid min-w-12  px-1 text-center text-md rounded-xl"></span>
            <span className="border-[1px] inline-block border-solid min-w-12 text-center text-md rounded-xl"></span>
          </div>
        </div>
      </div>
    </>
  );
}
