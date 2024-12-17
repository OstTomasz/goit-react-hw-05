import { useEffect, useState } from "react";
import { fetchMovies } from "../API/API";

export const useGetMovies = () => {
  const [moviesList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const Movies = await fetchMovies();
        setMovieList(Movies);
        setError(false);
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  return { moviesList, error, loading };
};
