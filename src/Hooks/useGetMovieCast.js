import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../API/API";

export const useGetMovieCredits = (id) => {
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const cast = await fetchMovieCredits(id);
        setMovieCast(cast);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [id]);

  return { movieCast, loading, error };
};
