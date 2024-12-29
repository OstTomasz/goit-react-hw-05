import { useParams } from "react-router-dom";
import { useGetMovieReviews } from "../../Hooks/useGetMovieReviews";

import css from "./MovieReview.module.css";

export const MovieReview = () => {
  const { id } = useParams();
  const { movieReviews, loading, error } = useGetMovieReviews(id);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (movieReviews.length === 0) {
    return <p>There is no reviews for this movie.</p>;
  }

  if (error) {
    return <p>Error: Failed to load movie reviews</p>;
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
