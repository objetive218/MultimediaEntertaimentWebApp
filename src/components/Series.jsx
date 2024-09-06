import { useSections } from "../hooks/useSections";
import Movie from "./Movie";
import { useEffect } from "react";

const Series = () => {
    const {movies, getSection} = useSections();

    useEffect(() => {
        getSection("series")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <section>
            <h2>Series </h2>
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

export default Series;
