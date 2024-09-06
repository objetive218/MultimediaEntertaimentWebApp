export const searchSections = async ({type}) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_API_KEY
      }&s=car&type=${type}`
    );
    const json = await response.json();
    const movies = json.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster,
      type: movie.Type,
    }));
  } catch (e) {
    throw new Error(e);
  }
};
