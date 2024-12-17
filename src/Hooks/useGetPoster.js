import { useEffect, useState } from "react";
import { fetchMovieImg } from "../API/API";

export const useGetPoster = (id) => {
  const [poster, setPoster] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPoster = async () => {
      try {
        setLoading(true);
        const details = await fetchMovieImg(id);
        setPoster(details);
        setError(false);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getPoster();
  }, []);

  return { poster, loading, error };
};
