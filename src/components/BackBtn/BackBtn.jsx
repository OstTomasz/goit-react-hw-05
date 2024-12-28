import { useLocation, useNavigate } from "react-router-dom";
import css from "./BackBtn.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";

export const GoBackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    if (location.state.from.state) {
      navigate(location.state.from.state.from);
    } else {
      navigate(-1);
    }
  };

  return (
    <button className={css["back-btn"]} onClick={handleBack}>
      <IoIosArrowRoundBack />
      Go back
    </button>
  );
};
