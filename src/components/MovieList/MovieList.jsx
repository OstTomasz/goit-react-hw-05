import { Link, useLocation } from "react-router-dom";
import { useGetMovies } from "../../Hooks/useGetMovies";

import css from "./MovieList.module.css";

export const MovieList = () => {
  const { moviesList, error, loading } = useGetMovies();

  const location = useLocation();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
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
