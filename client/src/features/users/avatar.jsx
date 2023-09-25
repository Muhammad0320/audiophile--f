import styled from "styled-components";
import { useLogin } from "../Authentication/useLogin";
import { useUser } from "./useUser";
import Spinner from "../../ui/Spinner";

const StyledAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const ImageContainer = styled.img`
  display: block;
  height: 2rem;
  width: 2rem;

  border-radius: 50%;
  box-sizing: content-box;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: 2px solid var(--color-primary);
  }
`;

function Avatar() {
  const { user = {}, isLoading } = useUser();

  console.log(user);

  if (isLoading) return <Spinner />;

  return (
    <StyledAvatar>
      <ImageContainer />
      <span> Muhammad </span>
    </StyledAvatar>
  );
}

export default Avatar;
