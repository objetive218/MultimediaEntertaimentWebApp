import { useContext } from "react";
import BookMarksContext from "../context/bookMarksContext";

/* eslint-disable react/prop-types */
const Movie = ({data, typeStyle}) => {
    const {handleBookMarks} = useContext(BookMarksContext)
    const typeData = data.type === "movie" ? "./movie_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" : "./tv_gen_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
    return (
       <>
            <img src={data.image} alt="content banner"  className="bannerMovie"/>
            <div className="infoMovie">
            <p className="yearMovie">{data.year}</p>
            
            <img src={typeData} alt="type content" />
             <p>{data.type}</p>
            </div>
            <h1 className="titleMovie" >{data.title}</h1>
            <img onClick={() => handleBookMarks(data) } src="./bookmark_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="bookMark"  className="bookMarkMovie"/>
       </>
    );  
}

export default Movie;
