import { useCallback, useState } from 'react'
import './App.css'
import Movie from './components/Movie'
import { useMovies } from './hooks/useMovies'
import NavBar from './components/NavBar';
import { useSearch } from './hooks/useSearch';
import debounce from 'just-debounce-it';
import Trending from './components/Trending';
import Recommend from './components/recommend';
import Search from './components/Search';
import Movies from './components/Movies';


function App() {
  const {search, setSearch, error} = useSearch();
  const {movies, getMovies} = useMovies({search})
  const [actualPagestate, setActualPagestate] = useState("home");
  const [bookMarks, setBookMarks] = useState([]);

  /*Form component */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetMovies = useCallback(debounce(search => {
    getMovies(search);
  },300), [getMovies])

  const handleSearch = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  }
  /*reducer nav */
  
  return (
    <main>
      <NavBar page={actualPagestate} changePage={setActualPagestate}/>
      <Search search={search} handleSearch={handleSearch}/>
      {actualPagestate === "home" && search.length < 3 && <Trending/>}
      {actualPagestate === "home" && search.length < 3 && <Recommend/>}
      {actualPagestate === "movies" && search.length < 3 && <Movies />}
      {actualPagestate === "series" && search.length < 3 && <Movies/>}
      {actualPagestate === "bookMarks" && search.length < 3 && <Movies/>}
      {/*search render */}
        <ul>
        { 
          movies?.map((e) => 
            <li key={e.id}>
            <Movie data={e} setBookMark={setBookMarks} bookMarks={bookMarks}/>
            </li>
          ) 
        }
       </ul>
    </main>
  )
}

export default App
