/* eslint-disable react/prop-types */

import Movie from "./Movie";

const SearchResults = ({movies, search}) => {
    return (
        <section className="SearchResults">
            <h2 className="section_title">Found {movies?.length} results for {`'${search}'`} </h2>
            <ul className="section_ul_results">
        { 
          movies?.map((e) => 
            <li key={e.id} className="section_li">
            <Movie data={e}/>
            </li>
          ) 
        }
       </ul>
        </section>
    );
}

export default SearchResults;
