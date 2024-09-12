/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const BookMarksContext = createContext(null);
const BookProvider = function ({ children }) {
  const [bookMarks, setBookMarks] = useState([{
            id: "tt0120737",
            title: "The Lord of the Rings: The Fellowship of the Ring",
            year: "2001",
            image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
            type: "movie",
        }]);
  const handleBookMarks = (e) => {
    if(bookMarks.includes(e))
      return 
    
    else{
      setBookMarks([...bookMarks, e])
    }
  }

  return (
    <BookMarksContext.Provider value={{bookMarks, setBookMarks, handleBookMarks}}>
      {children}
    </BookMarksContext.Provider>
  );
};
export { BookProvider };
export default BookMarksContext;