import { useState } from "react";
import { searchMovies } from "../API/API";

export const useSearch = () => {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchMovie = async (query) => {
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

  return { search, loading, error, searchMovie };
};
