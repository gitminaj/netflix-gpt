import { useEffect, useState } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constant"; 
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Browse = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
  };

  const[nowPlayingMovie,setNowPlayingMovie] = useState()

  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    setNowPlayingMovie(json);
  
  };

  
  useEffect(()=>{
    nowPlayingMovies();
  },[]);


  return (
    <div>
      <Header></Header>
      <div className="m-6">
        <h1 className="font-bold p-6">Latest Movie</h1>

        <div >
          <Slider {...settings} className="text-black" >
            {
              nowPlayingMovie?.results?.map( (movies,index)=>{
                return(
      
                    <MovieCard key={movies.id} movies={movies}/>

                )
              })
            }
          </Slider>

        </div>
      </div>

      
    </div>
  );
};

export default Browse;

