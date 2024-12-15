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
  const response = await axios.get(`/trending/movie/day`, options);
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`/search/movie?query=${query}`, options);
  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`/movie/${id}`, options);
  return response.data;
};

export const fetchMovieCredits = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`, options);
  return response.data.cast;
};

export const fetchMovieReviews = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`, options);
  return response.data.results;
};

export const fetchMovieImg = async (id) => {
  const response = await fetchMovieDetails(id);
  return `https://image.tmdb.org/t/p/w342/${response.poster_path}`;
};
