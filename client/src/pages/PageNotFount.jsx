import { useNavigate } from "react-router-dom";
import Error from "../ui/Error";
import SmallButton from "../ui/SmallButton";
import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFount() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  const moveBack = useMoveBack();

  const extraUI = <SmallButton onClick={moveBack}> Go back </SmallButton>;

  return (
    <Error
      type="pageNotFound"
      message="The page you are looking for could not be found! 🧐"
      onClick={handleClick}
      extraConfig={extraUI}
    />
  );
}

export default PageNotFount;
