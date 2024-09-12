import { useCallback, useState } from 'react'
import './App.css'
import { useMovies } from './hooks/useMovies'
import NavBar from './components/NavBar';
import { useSearch } from './hooks/useSearch';
import debounce from 'just-debounce-it';
import Trending from './components/Trending';
import Recommend from './components/recommend';
import Search from './components/Search';
import Movies from './components/Movies';
import BookMarks from './components/BookMarks';
import Series from './components/Series';
import SearchResults from './components/SearchResults';
import CreateUser from './components/CreateUser';
import Login from './components/Login';


function App() {
  const {search, setSearch, error} = useSearch();
  const {movies, getMovies} = useMovies({search})
  const [actualPagestate, setActualPagestate] = useState("home");
  const [loginView, setLoginView]= useState({step: false, visibility: false});

  const handleLoginView = () => {
    if(loginView.step){setLoginView({ step:false, visibility: false})}
    else{setLoginView({step:true, visibility: false})}
  }
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
      <NavBar page={actualPagestate} changePage={setActualPagestate} setSearch={setSearch} handleLoginView={handleLoginView}/>
      <Search search={search} handleSearch={handleSearch}/>
      {actualPagestate === "home" && search.length < 3 && <Trending/>}
      {actualPagestate === "home" && search.length < 3 && <Recommend/>}
      {actualPagestate === "movies" && search.length < 3 && <Movies />}
      {actualPagestate === "series" && search.length < 3 && <Series/>}
      {actualPagestate === "bookMarks" && search.length < 3 && <BookMarks />}
      {search.length > 3 && <SearchResults movies={movies} search={search}/>}
      {loginView.step === true &&
      <>
      {loginView.visibility === false && <Login step={loginView} setStep={setLoginView} />}
      {loginView.visibility === true && <CreateUser step={loginView} setStep={setLoginView}/>}
      </> 
      }
      
    </main>
  )
}

export default App
