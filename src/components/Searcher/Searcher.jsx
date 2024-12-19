import { useState } from "react";
// import { useSearch } from "../../Hooks/useSearch";
import css from "./Searcher.module.css";

export const Searcher = () => {
  const [query, setQuery] = useState();
  // const search = useSearch(query);

  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        // onChange={handleChange}
        type="text"
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};
