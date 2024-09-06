import { useCallback, useState } from "react";
import { searchSections } from "../services/searchSections";

export function useSections() {
  const [movies, setmovies] = useState([]);
  const getSection = useCallback(async (type) => {
    try {
      const results = await searchSections({ type });
      setmovies(results);
    } catch (error) {
      throw new Error(error);
    }
  }, []);
  return { movies, getSection };
}
