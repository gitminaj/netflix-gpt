import { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constant";

const Browse = () => {
  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json)
  };

  useEffect(()=>{
    nowPlayingMovies();
  },[]);

  return (
    <div>
      <Header></Header>

      <p className="p-4"> coming soon be curious byy.....</p>
    </div>
  );
};

export default Browse;
