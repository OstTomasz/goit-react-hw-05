import { useEffect, useState } from "react";
import { fetchMovies } from "../API/API";

export const useGetMovies = () => {
  const [moviesList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const Movies = await fetchMovies();
        setMovieList(Movies);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return moviesList;
};
