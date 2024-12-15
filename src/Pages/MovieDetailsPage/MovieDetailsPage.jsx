import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useGetMovieDetails } from "../../Hooks/useGetMovieDetalis";
import { useGetPoster } from "../../Hooks/useGetPoster";
import { GoBackButton } from "../../components/BackBtn/BackBtn";

import css from "./MovieDetailsPage.module.css";

export const MovieDetailsPage = () => {
  const { id } = useParams();

  const { movieDetails, movieGenres } = useGetMovieDetails(id);

  const poster = useGetPoster(id);

  const genres = movieGenres.map((genre) => genre.name);

  const location = useLocation();
  console.log(location);

  if (movieDetails === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className={css.wrapper}>
      <GoBackButton />
      <div className={css.movie}>
        <img src={poster} alt={`${movieDetails.title} poster`} />
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
            <span>{genres.join(" ")}</span>
          </section>
        </div>
      </div>
      <section className={css.information}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={`/movies/${id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${id}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </div>
  );
};
