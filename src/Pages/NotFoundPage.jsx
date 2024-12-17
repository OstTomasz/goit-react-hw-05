import { NavLink } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <p>Page not found!</p>
      <NavLink to="/">Home Page</NavLink>
    </div>
  );
};
