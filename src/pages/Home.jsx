import React from "react";
import MoviesList from "../component/MoviesList";
// import HeroCarousel from "../component/HeroCarousel";

export default function Home() {
  return (
    <>
      <main className="w-11/12 m-auto">
        <MoviesList />
      </main>
    </>
  );
}
