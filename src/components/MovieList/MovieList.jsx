import { Link, useLocation } from "react-router-dom";
import { useGetMovies } from "../../Hooks/useGetMovies";
import { useSearch } from "../../Hooks/useSearch";

import css from "./MovieList.module.css";
import { useState } from "react";

export const MovieList = () => {
  const [renderSource, setrenderSource] = useState(null);
  const { search, loading: searchLoading, error: searchError } = useSearch();

  const { moviesList, error, loading } = useGetMovies();

  const location = useLocation();

  if (loading || searchLoading) {
    return <p>Loading...</p>;
  }
  if (error || searchError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ul>
      {moviesList.map(({ id, title }) => (
        <li key={id}>
          <Link
            className={css["movie-link"]}
            state={{ from: location }}
            to={`/movies/${id}`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
