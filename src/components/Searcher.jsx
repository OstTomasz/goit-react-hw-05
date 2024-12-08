import { useState } from "react";
import { useSearch } from "../Hooks/useSearch";

export const Searcher = () => {
  const search = useSearch(query);
  const [query, setQuery] = useState();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text"></input>
      <button type="submit">Search</button>
    </form>
  );
};
