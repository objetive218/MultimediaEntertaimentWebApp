/* eslint-disable react/prop-types */
const Movie = ({data, typeStyle}) => {
    const typeData = data.type === "movie" ? "./movie_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" : "./tv_gen_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
    return (
       <>
            <h1 style={{color:"blue"}}>{data.title}</h1>
            <p>{data.year}</p>
            <p><img src={typeData} alt="type content" /> {data.type}</p>
            <img src={data.image} alt="content banner" />
            <img src="./bookmark_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="bookMark" />
       </>
    );  
}

export default Movie;
