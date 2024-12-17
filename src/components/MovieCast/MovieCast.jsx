import { useParams } from "react-router-dom";
import { useGetMovieCredits } from "../../Hooks/useGetMovieCast";

import css from "./MovieCast.module.css";

export const MovieCast = () => {
  const { id } = useParams();
  const { movieCast, loading, error } = useGetMovieCredits(id);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: Failed to load movie cast</p>;
  }

  return (
    <ul className={css.list}>
      {movieCast.map(({ id, name, character, profile_path }) => (
        <li className={css.character} key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w154/${profile_path}`}
            alt={`${name} portrait`}
          />

          <p>{name}</p>
          <span>Character: {character}</span>
        </li>
      ))}
    </ul>
  );
};
