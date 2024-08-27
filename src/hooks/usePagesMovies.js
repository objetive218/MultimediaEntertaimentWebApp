import { useCallback, useState } from "react";
import { seachPagesMovies } from "../services/seachPagesMovies";

export function usePagesMovies() {
  const [movies, setmovies] = useState([]);
  const getMovies = useCallback(async (recommendType) => {
        try {
            const resultsPage1 = await seachPagesMovies(recommendType, 1);
            const resultsPage2 = await seachPagesMovies(recommendType, 2);
            const total = resultsPage2.concat(resultsPage1);
            setmovies(total);
        } catch (error) {
            throw new Error(error);
        }
    }, []);
  return { movies, getMovies };
}
