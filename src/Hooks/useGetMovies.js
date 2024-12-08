import { useEffect, useState } from "react";
import { fetchMovies } from "../API/API";

export const useGetMovies = () => {
  const [moviesList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const Movies = await fetchMovies();

      setMovieList(Movies);
    };
    getMovies();
  }, []);

  return moviesList;
};
