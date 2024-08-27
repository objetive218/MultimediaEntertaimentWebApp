import { useEffect } from "react";
import { useMovies } from "../hooks/useMovies";
import Movie from "./Movie";

const Trending = () => {
   const {movies, getMovies} = useMovies("advent")
    useEffect(() => {
        getMovies("advent")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (  
            <section className="trending">
                <h2>Trending</h2>
                <ul>
                {
                    movies?.map((e,i) => 
                    i < 5 ?
                    <li key={i}>
                        <Movie  data={e}/>
                    </li> : ""  
                    )
                }
                </ul>
            </section>
    );
}

export default Trending;
