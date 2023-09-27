import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const StyledAvatar = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  color: var(--color-white);
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const ImageContainer = styled.img`
  display: block;
  height: 4rem;
  width: 4rem;
  margin-right: 2rem;
  border-radius: 50%;
  box-sizing: content-box;
  transition: border 0.3s ease-in;

  &:hover {
    border: 2px solid var(--color-primary);
  }
`;

function Avatar({ user }) {
  const { name, photo } = user;

  const firstname = name?.split(" ")[0];

  return (
    <StyledAvatar to="/settings">
      <ImageContainer src={`/assets/users/${photo}`} alt="user-avatar" />
      <span> {firstname} </span>
    </StyledAvatar>
  );
}

export default Avatar;
