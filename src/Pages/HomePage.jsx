import { MovieList } from "../components/MovieList/MovieList";

export const HomePage = () => {
  return (
    <div>
      <h1>Trending today</h1>

      <MovieList />
    </div>
  );
};
