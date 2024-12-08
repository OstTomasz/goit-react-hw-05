import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./Pages/HomePage";
import { MovieDetailsPage } from "./Pages/MovieDetailsPage";
import { MoviesPage } from "./Pages/MoviesPage";
import { NotFoundPage } from "./Pages/NotFoundPage";
import { MovieCast } from "./components/MovieCast";
import { MovieReviews } from "./components/MovieReviews";

export const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
