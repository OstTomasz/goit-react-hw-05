import { useGetMovies } from "../Hooks/useGetMovies";

export const MovieList = () => {
  const moviesList = useGetMovies();
  console.log(moviesList);
  return (
    <div>
      <p>lalala</p>
      {moviesList.map(({ id, title }) => {
        <div key={id}>
          <p>{title}</p>;
        </div>;
      })}
    </div>
  );
};
