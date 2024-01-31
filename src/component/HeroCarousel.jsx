import axios from "axios";
import React, { useEffect } from "react";

export default function HeroCarousel() {
  const [heroImg, setHeroImg] = React.useState([]);
  const fetchHeroImg = async () => {
    const { data } = await axios.get(
      "https://api.tvmaze.com/search/shows?q=all"
    );
    console.log(data.splice(0, 5));
    setHeroImg(data.splice(0, 5));
  };
  useEffect(() => {
    fetchHeroImg();
  }, []);
  return <>{}</>;
}
