import { useParams } from "react-router-dom";
import { useGetMovieReviews } from "../../Hooks/useGetMovieReviews";

import css from "./MovieReview.module.css";

export const MovieReview = () => {
  const { id } = useParams();
  const movieReviews = useGetMovieReviews(id);

  if (movieReviews === null) {
    return <p>There is no reviews for this movie.</p>;
  }

  return (
    <ul className={css.list}>
      {movieReviews.map(({ id, author, content }) => (
        <li className="" key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
