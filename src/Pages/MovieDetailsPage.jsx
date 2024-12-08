import { Link, useParams } from "react-router-dom";
import { useGetMovieDetails } from "../Hooks/useGetMovieDetalis";
import { useGetPoster } from "../Hooks/useGetPoster";

export const MovieDetailsPage = () => {
  const { id } = useParams();
  const { movieDetails, movieGenres } = useGetMovieDetails(id);
  const poster = useGetPoster(id);
  const genres = movieGenres.map((genre) => genre.name);

  if (movieDetails === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={poster} alt={`${movieDetails.title} poster`} />
      <h2>{`${movieDetails.title} (${movieDetails.release_date.slice(
        0,
        4
      )})`}</h2>
      <span>User score: </span>
      <span>{Math.ceil(movieDetails.popularity)}%</span>
      <h3>Overwiew</h3>
      <p>{movieDetails.overview}</p>
      <h3>Genres</h3>
      <p>{genres.join(" ")}</p>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to={`/movie/${id}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movie/${id}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
};
