import { useEffect, useState } from "react";
import { searchMovies } from "../API/API";
import { useSearchParams } from "react-router-dom";

export const useSearch = () => {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();

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

  useEffect(() => {
    if (searchParams.get("search") !== null) {
      searchMovie(searchParams.get("search"));
    }
  }, [searchParams]);

  return { search, loading, error, searchMovie };
};
