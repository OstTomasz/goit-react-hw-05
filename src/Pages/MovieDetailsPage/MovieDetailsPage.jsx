import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useGetMovieDetails } from "../../Hooks/useGetMovieDetalis";
import { useGetPoster } from "../../Hooks/useGetPoster";
import { GoBackButton } from "../../components/BackBtn/BackBtn";

import css from "./MovieDetailsPage.module.css";

export const MovieDetailsPage = () => {
  const { id } = useParams();

  const location = useLocation();

  const { movieDetails, movieGenres, loading, error } = useGetMovieDetails(id);

  const {
    poster,
    loading: loadingPoster,
    error: posterError,
  } = useGetPoster(id);
  const displayPoster = () => {
    if (loadingPoster) {
      return <p>Loading poster...</p>;
    }
    if (posterError) {
      return <p>Error: Failed to load movie poster.</p>;
    }
    return <img src={poster} alt={`${movieDetails.title} poster`} />;
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: Failed to load movie details.</p>;
  }
  const genres = movieGenres.map((genre) => genre.name).join(" ");

  if (movieDetails === null) {
    return <p>Loading...</p>;
  }

  const backLink = location.state?.from || "/";

  return (
    <div className={css.wrapper}>
      <GoBackButton />
      <div className={css.movie}>
        {displayPoster()}
        <div className={css["movie-details"]}>
          <h2 className={css.header}>{`${
            movieDetails.title
          } (${movieDetails.release_date.slice(0, 4)})`}</h2>
          <section>
            <span>Average vote: </span>
            <span>{movieDetails.vote_average}/10</span>
          </section>
          <section className={css.section}>
            <h3 className={css.header}>Overwiew</h3>
            <span>{movieDetails.overview}</span>
          </section>
          <section className={css.section}>
            <h3 className={css.header}>Genres</h3>
            <span>{genres}</span>
          </section>
        </div>
      </div>
      <section className={css.information}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLink }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLink }}>
              Reviews
            </Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </div>
  );
};
