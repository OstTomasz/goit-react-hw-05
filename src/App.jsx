import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navigation } from "./components/navigation/Navigation.jsx";

const LazyHomePage = lazy(() =>
  import("./Pages/HomePage").then((module) => ({ default: module["HomePage"] }))
);
const LazyMoviesPage = lazy(() =>
  import("./Pages/MoviesPage").then((module) => ({
    default: module["MoviesPage"],
  }))
);
const LazyMovieDetailsPage = lazy(() =>
  import("./Pages/MovieDetailsPage/MovieDetailsPage.jsx").then((module) => ({
    default: module["MovieDetailsPage"],
  }))
);
const LazyNotFoundPage = lazy(() =>
  import("./Pages/NotFoundPage.jsx").then((module) => ({
    default: module["NotFoundPage"],
  }))
);
const LazyMovieCast = lazy(() =>
  import("./components/MovieCast/MovieCast.jsx").then((module) => ({
    default: module["MovieCast"],
  }))
);
const LazyMovieReview = lazy(() =>
  import("./components/MovieReview/MovieReview.jsx").then((module) => ({
    default: module["MovieReview"],
  }))
);

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LazyHomePage />} />
          <Route path="/movies" element={<LazyMoviesPage />} />
          <Route path="/movies/:id" element={<LazyMovieDetailsPage />}>
            <Route path="cast" element={<LazyMovieCast />} />
            <Route path="reviews" element={<LazyMovieReview />} />
          </Route>
          <Route path="*" element={<LazyNotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
