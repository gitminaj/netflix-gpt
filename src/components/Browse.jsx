import { useEffect, useState } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constant"; 
import { CardMovie } from "./CardMovie"



const Browse = () => {

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
        <div>
          {
            nowPlayingMovie?.results?.map( (movies,index)=>{
              
              return(
                <h1> display </h1>
                // <MovieCard key={movies.results[index].id} movies={movies} />
              )
            })
          }
        </div>
      </div>

      
    </div>
  );
};

export default Browse;

