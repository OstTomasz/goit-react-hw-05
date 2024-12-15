import { useLocation, useNavigate } from "react-router-dom";
import css from "./BackBtn.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";

export const GoBackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(location);
    navigate(
      location.state !== null || location.state.from.state !== null
        ? `/movies/${location.state.from.search}`
        : "/"
    );
  };
  return (
    <button className={css["back-btn"]} onClick={handleClick}>
      <IoIosArrowRoundBack />
      Go back
    </button>
  );
};
