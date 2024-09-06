import { useSections } from "../hooks/useSections";
import Movie from "./Movie";
import { useEffect } from "react";

const Movies = () => {
    const {movies, getSection} = useSections();

    useEffect(() => {
        getSection("movie")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <section>
            <h2>Movies </h2>
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

export default Movies;
