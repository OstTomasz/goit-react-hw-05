import { Navigation } from "./components/Navigation";
import { HomePage } from "./Pages/HomePage";
import { MovieDetailsPage } from "./Pages/MovieDetailsPage";
import { MoviesPage } from "./Pages/MoviesPage";
import { NotFoundPage } from "./Pages/NotFoundPage";

export const App = () => {
  return (
    <div>
      <Navigation />
      <HomePage />
      <MovieDetailsPage />
      <MoviesPage />
      <NotFoundPage />
    </div>
  );
};
