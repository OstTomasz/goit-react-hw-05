import { Field, Form, Formik } from "formik";
import css from "./Searcher.module.css";

export const Searcher = ({ searchMovie }) => {
  const initialValues = {
    search: "",
  };
  const handleSubmit = (values, actions) => {
    actions.resetForm({ values: { search: "" } });
    searchMovie(values.search.trim());
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
