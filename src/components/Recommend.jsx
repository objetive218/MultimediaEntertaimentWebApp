import { useEffect } from "react";
import Movie from "./Movie";
import { usePagesMovies } from "../hooks/usePagesMovies";

const Recommend = () => {
    const {movies, getMovies} = usePagesMovies()
    useEffect(() => {
        getMovies("car")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    console.log(movies)
    return (
        <section className="recommend">
                <h2>Recommended for you </h2>
                <ul>
                {
                    movies?.map((e) =>   
                    <li key={e.id}>
                        <Movie  data={e}/>
                    </li>  
                    )
                }
                </ul>
            </section>
    );
}

export default Recommend;
