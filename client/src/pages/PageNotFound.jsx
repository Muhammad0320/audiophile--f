import { useNavigate } from "react-router-dom";
import Error from "../ui/Error";
import SmallButton from "../ui/SmallButton";
import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  const moveBack = useMoveBack();

  const ExtraUI = <SmallButton onClick={moveBack}> Go back </SmallButton>;

  return <div style={{ border: "1px solid red" }}>I can see you</div>;
}

export default PageNotFound;
