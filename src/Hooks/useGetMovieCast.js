import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../API/API";

export const useGetMovieCredits = (id) => {
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const cast = await fetchMovieCredits(id);
        setMovieCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [id]);

  return movieCast;
};
