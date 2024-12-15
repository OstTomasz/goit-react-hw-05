import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const setActive = ({ isActive }) => {
  return isActive ? `${css.navlink} ${css.active}` : `${css.navlink}`;
};

export const Navigation = () => {
  return (
    <div>
      <nav className={css.navbar}>
        <NavLink className={setActive} to="/">
          Home
        </NavLink>
        <NavLink className={setActive} to="/movies">
          Movies
        </NavLink>
      </nav>
    </div>
  );
};
