import { Link } from "react-router-dom";
import { useGetMovies } from "../Hooks/useGetMovies";

export const MovieList = () => {
  const moviesList = useGetMovies();

  return (
    <ul>
      {moviesList.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
