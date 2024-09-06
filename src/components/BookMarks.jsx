import { useSections } from "../hooks/useSections";
import { useEffect } from "react";

const BookMarks = () => {
     const {movies, getSection} = useSections();

     useEffect(() => {
        getSection("movies")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <section>
            
        </section>
    );
}

export default BookMarks;
