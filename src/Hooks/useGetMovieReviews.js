import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../API/API";

export const useGetMovieReviews = (id) => {
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviews = await fetchMovieReviews(id);
        setMovieReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [id]);

  return movieReviews;
};
