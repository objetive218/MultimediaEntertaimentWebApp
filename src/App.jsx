import { useCallback } from 'react'
import './App.css'
import Movie from './components/Movie'
import { useMovies } from './hooks/useMovies'
import NavBar from './components/NavBar';
import { useSearch } from './hooks/useSearch';
import debounce from 'just-debounce-it';


function App() {
  const {search, setSearch, error} = useSearch();
  const {movies, getMovies} = useMovies({search})

  const debouncedGetMovies = useCallback(debounce(search => {
    console.log('search', search)
    getMovies(search);
  },300), [getMovies])

  const handleSearch = (e) => {
    const newSearch = e.target.value 
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  }

  return (
    <section>
      <NavBar/>
      <form action="#">
        <img src="./search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="lupa" />
        <input type="text" value={search} onChange={handleSearch} placeholder='Search for movies or TV series'/>
      </form>
      <ul>
        { 
          movies?.map((e, i) => 
            <li key={i}>
            <Movie data={e}/>
            </li>
          ) 
        }
        </ul>
        </section>
  )
}

export default App
