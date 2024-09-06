import { createContext, useState } from "react";

const BookMarksContext = createContext(null);
const BookProvider = function ({ children }) {
  const [bookMarks, setBookMarks] = useState([{
            "Title": "The Lord of the Rings: The Fellowship of the Ring",
            "Year": "2001",
            "imdbID": "tt0120737",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
        }]);
  const handleBookMarks = (e) => {
    if(bookMarks.find()){}
  }

  return (
    <BookMarksContext.Provider value={{bookMarks, setBookMarks}}>
      {children}
    </BookMarksContext.Provider>
  );
};
export { BookProvider };
export default BookMarksContext;