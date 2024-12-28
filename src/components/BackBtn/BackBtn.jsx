import { Link, useLocation } from "react-router-dom";
import css from "./BackBtn.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";

export const GoBackButton = () => {
  const location = useLocation();

  return (
    <button className={css["back-btn"]}>
      <IoIosArrowRoundBack />
      <Link className={css.link} to={location.state.from}>
        Go back
      </Link>
    </button>
  );
};
