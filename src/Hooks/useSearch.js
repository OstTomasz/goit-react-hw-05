import { useEffect, useState } from "react";
import { searchMovies } from "../API/API";

export const useSearch = (query) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const searchMovie = async () => {
      try {
        setLoading(true);
        const movies = await searchMovies(query);
        setSearch(movies);
        setError(false);
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    searchMovie();
  }, []);

  return { search, loading, error };
};
