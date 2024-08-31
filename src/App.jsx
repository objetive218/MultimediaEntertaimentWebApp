import { useCallback, useReducer, useState } from 'react'
import './App.css'
import Movie from './components/Movie'
import { useMovies } from './hooks/useMovies'
import NavBar from './components/NavBar';
import { useSearch } from './hooks/useSearch';
import debounce from 'just-debounce-it';
import Trending from './components/Trending';
import Recommend from './components/recommend';


function App() {
  const {search, setSearch, error} = useSearch();
  const {movies, getMovies} = useMovies({search})

  /*Form component */
  const debouncedGetMovies = useCallback(debounce(search => {
    console.log('search', search)
    getMovies(search);
  },300), [getMovies])

  const handleSearch = (e) => {
    const newSearch = e.target.value 
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  }
  /*reducer nav */
  const [actualPagestate, setActualPagestate] = useState("home");
  function setPage(actualPage, action){
    switch (actualPage) {
      case "home":
        
        break;
      case "movies":
        
        break;
      case "series":
        
        break;
      case "bookMarks":
        
        break;
      default:
        break;
    }
  }
  const [actualPage, getPage] = useReducer(setPage, "home")

  return (
    <main>
      <NavBar page={actualPagestate} changePage={setActualPagestate}/>
      <form action="#" className='searchForm'>
        <img src="./search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="lupa" />
        <input type="text" value={search} onChange={handleSearch} placeholder='Search for movies or TV series'/>
      </form>
      {actualPagestate === "home" && <Trending/>}
      {actualPagestate === "home" && <Recommend/>}
      {/*search render */}

      <ul>
        { 
          movies?.map((e) => 
            <li key={e.id}>
            <Movie data={e}/>
            </li>
          ) 
        }
        </ul>
        </main>
  )
}

export default App
