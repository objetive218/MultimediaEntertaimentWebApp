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
                <h2 className="section_title">Recommended for you </h2>
                <ul className="section_ul">
                {
                    movies?.map((e) =>   
                    <li key={e.id} className="section_li">
                        <Movie  data={e}/>
                    </li>  
                    )
                }
                </ul>
            </section>
    );
}

export default Recommend;
