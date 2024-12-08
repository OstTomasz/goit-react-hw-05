import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => {
  return isActive ? "active" : "";
};

export const Navigation = () => {
  return (
    <nav>
      <NavLink className={setActive} to="/">
        Home
      </NavLink>
      <NavLink className={setActive} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};
