import { useCallback, useRef, useState } from "react";
import { searchMovies } from "../services/searchMovies";

export function useMovies({ search }) {
  const [movies, setmovies] = useState([]);
  const previousSearch = useRef(search);

  const getMovies = useCallback(async (search) => {
    if (search === previousSearch.current) return

    try {
      previousSearch.current = search;
      const results = await searchMovies({ search });
      setmovies(results);
    } catch (error) {
      throw new Error(error);
    }
  }, []);
  return { movies, getMovies };
}
