const API_KEY = "fb254aaf";

export const searchMovies = async ({ search }) => {
  if (search === "") return null;

  try {
    const pet = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const json = await pet.json();
    const movies = json.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster,
      type: movie.Type,
    }));
  } catch (e) {
    throw new Error("Error searching movies");
  }
};
