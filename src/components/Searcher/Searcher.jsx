import { Field, Form, Formik } from "formik";
import css from "./Searcher.module.css";
import { useSearchParams } from "react-router-dom";

export const Searcher = ({ searchMovie }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialValues = {
    search: "",
  };
  const handleSubmit = (values, actions) => {
    if (values.search) {
      searchMovie(values.search.trim());
      setSearchParams({ search: values.search.trim() });
      console.log(`search params: ${searchParams}`);
      actions.resetForm({ values: { search: "" } });
    } else {
      console.log("enter smth");
      setSearchParams();
    }
  };
  return (
    <Formik initialValues={{ initialValues }} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <Field
          className={css.input}
          name="search"
          type="text"
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};
