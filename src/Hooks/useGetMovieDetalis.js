import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../API/API";

export const useGetMovieDetails = (id) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieGenres, setMovieGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const details = await fetchMovieDetails(id);
        setMovieDetails(details);
        setMovieGenres(details.genres);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  return { movieDetails, movieGenres, loading, error };
};
