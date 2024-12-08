import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../API/API";

export const useGetMovieDetails = (id) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieGenres, setMovieGenres] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const details = await fetchMovieDetails(id);
        setMovieDetails(details);
        setMovieGenres(details.genres);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return { movieDetails, movieGenres };
};
