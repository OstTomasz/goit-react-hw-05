import { MovieList } from "../components/MovieList/MovieList";
import { useGetMovies } from "../Hooks/useGetMovies";

export const HomePage = () => {
  const { moviesList, error, loading } = useGetMovies();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Trending today</h1>

      <MovieList moviesList={moviesList} />
    </div>
  );
};
