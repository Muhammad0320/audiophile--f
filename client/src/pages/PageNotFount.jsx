import { useNavigate } from "react-router-dom";
import Error from "../ui/Error";

function PageNotFount() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <Error
      type="pageNotFound"
      message="The page you are looking for could not be found! 🧐"
      onClick={handleClick}
    />
  );
}

export default PageNotFount;
