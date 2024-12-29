import { useSearch } from "../Hooks/useSearch";
import { Searcher } from "../components/Searcher/Searcher";
import { MovieList } from "../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

export const MoviesPage = () => {
  const { search, loading, error, searchMovie } = useSearch();
  const [searchParams] = useSearchParams();

  const shouldRender = () => {
    if (search.length > 0) {
      return <MovieList moviesList={search} />;
    }
    if (search.length === 0 && searchParams.size > 0) {
      return <p>Movies not found.</p>;
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: Failed to load resources</p>;
  }

  return (
    <div>
      <Searcher searchMovie={searchMovie} />
      {shouldRender()}
    </div>
  );
};
