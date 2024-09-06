import BookMarksContext from "../context/bookMarksContext";
import Movie from "./Movie";
import { useContext } from "react";

const BookMarks = () => {
    const {bookMarks}= useContext(BookMarksContext);   
    return (
        <section className="SearchResults">
            <h2 className="section_title">BookMarks </h2>
                <ul className="section_ul_results">
                {
                    bookMarks?.map((e) =>   
                    <li key={e.id} className="section_li">
                        <Movie  data={e}/>
                    </li>  
                    )
                }
                </ul>
        </section>
    );
}

export default BookMarks;
