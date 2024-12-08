import { Link, useLocation } from "react-router-dom";
import { useGetMovies } from "../Hooks/useGetMovies";

export const MovieList = () => {
  const moviesList = useGetMovies();

  const location = useLocation();

  return (
    <ul>
      {moviesList.map(({ id, title }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`/movie/${id}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
