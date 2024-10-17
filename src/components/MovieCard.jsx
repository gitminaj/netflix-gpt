import { MOVIE_POSTER_URL } from "../utils/constant";


const MovieCard = (props) =>{
    const { title,poster_path,release_date } = props.movies
    return(
        <div className="">
            <img className="rounded-md h-3/4" src={MOVIE_POSTER_URL + poster_path}/>
            <h1>{title}</h1>
            <h3>{release_date}</h3>
        </div>
    )
}

export default MovieCard;