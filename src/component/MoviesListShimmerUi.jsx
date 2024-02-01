import React from "react";
import MoviesListShimmerCard from "./MoviesListShimmerCard";

export default function MoviesListShimmerUi() {
  return (
    <>
      <div className="w-11/12 mt-10 gap-8 grid grid-cols-4 m-auto">
        <MoviesListShimmerCard />
        <MoviesListShimmerCard />
        <MoviesListShimmerCard />
        <MoviesListShimmerCard />
        <MoviesListShimmerCard />
        <MoviesListShimmerCard />
        <MoviesListShimmerCard />
      </div>
    </>
  );
}
