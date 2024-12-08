import axios from "axios";

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmRmNDQ0NGJjOWRlYTdmMmQxODQ5N2M4MmQ2Yzg1YSIsIm5iZiI6MTczMzE2MDM1Ny4yNzIsInN1YiI6IjY3NGRlZGE1NDU1OGRhZTQ0OTNkZTFkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FHDzc5VcdWw0t3zRbJvU79A-lbYChURD8rMINLu9spM",
  },
};
export const fetchMovies = async () => {
  const response = await axios
    .get(`/trending/movie/day`, options)
    .catch((err) => console.error(err));
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios
    .get(`/search/movie?query=${query}`, options)
    .catch((err) => console.error(err));
  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios
    .get(`/movie/${id}`, options)
    .catch((err) => console.error(err));
  return response.data;
};

export const fetchMovieCredits = async (id) => {
  const response = await axios
    .get(`/movie/${id}/credits`, options)
    .catch((err) => console.error(err));
  return response.data;
};

export const fetchMovieReviews = async (id) => {
  const response = await axios
    .get(`/movie/${id}/reviews`, options)
    .catch((err) => console.error(err));
  return response.data.results;
};

export const fetchMovieImg = async (id) => {
  const response = await fetchMovieDetails(id).catch((err) =>
    console.error(err)
  );
  return `https://image.tmdb.org/t/p/w500/${response.poster_path}`;
};
