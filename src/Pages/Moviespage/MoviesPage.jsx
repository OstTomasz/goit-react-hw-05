import { useSearch } from "../../Hooks/useSearch";
import { Searcher } from "../../components/Searcher/Searcher";
import { MovieList } from "../../components/MovieList/MovieList";

export const MoviesPage = () => {
  const { search, loading, error, searchMovie } = useSearch();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: Failked ro load resources</p>;
  }

  return (
    <div>
      <Searcher searchMovie={searchMovie} />
      <MovieList moviesList={search} />
    </div>
  );
};
