import { MovieList } from "../components/MovieList/MovieList";
import { Searcher } from "../components/Searcher/Searcher";

export const MoviesPage = () => {
  return (
    <div>
      <Searcher />
      <MovieList />
    </div>
  );
};
