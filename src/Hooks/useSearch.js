import { useEffect, useState } from "react";
import { searchMovies } from "../API/API";

export const useSearch = (query) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const searchMovie = async () => {
      try {
        const movies = await searchMovies(query);
        setSearch(movies);
      } catch (error) {
        console.log(error);
      }
    };
    searchMovie();
  }, []);

  return search;
};
