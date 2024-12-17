import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../API/API";

export const useGetMovieReviews = (id) => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setLoading(true);
        setError(false); // Reset error state if id changes
        const reviews = await fetchMovieReviews(id);
        setMovieReviews(reviews);
      } catch (error) {
        setError(true); // Set error state if an error occurs
        console.log(error);
      } finally {
        setLoading(false); // Set loading state to false after fetching data or error
      }
    };
    getReviews();
  }, [id]);

  return { movieReviews, loading, error };
};
