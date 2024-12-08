import { useEffect, useState } from "react";
import { fetchMovieImg } from "../API/API";

export const useGetPoster = (id) => {
  const [poster, setPoster] = useState(null);

  useEffect(() => {
    const getPoster = async () => {
      try {
        const details = await fetchMovieImg(id);
        setPoster(details);
      } catch (error) {
        console.log(error);
      }
    };
    getPoster();
  }, []);

  return poster;
};
