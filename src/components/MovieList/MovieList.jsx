import { Link, useLocation } from "react-router-dom";

import css from "./MovieList.module.css";

export const MovieList = ({ moviesList }) => {
  const location = useLocation();

  console.log(location);

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
