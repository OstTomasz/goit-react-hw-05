import { Route, Routes } from "react-router-dom";

import { Navigation } from "./components/navigation/Navigation.jsx";
import { HomePage } from "./Pages/HomePage.jsx";
import { MovieDetailsPage } from "./Pages/MovieDetailsPage/MovieDetailsPage.jsx";
import { MoviesPage } from "./Pages/MoviesPage.jsx";
import { NotFoundPage } from "./Pages/NotFoundPage.jsx";
import { MovieCast } from "./components/MovieCast/MovieCast.jsx";
import { MovieReview } from "./components/MovieReview/MovieReview.jsx";

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReview />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
