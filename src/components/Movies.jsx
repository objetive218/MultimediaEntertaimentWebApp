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
        <section className="SearchResults">
            <h2 className="section_title">Movies </h2>
                <ul className="section_ul_results">
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

export default Movies;
