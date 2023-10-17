import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { clampBuilder } from "../../styles/clampFunction";
import { useViewport } from "../context/ViewPort";

const StyledAvatar = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-right: ${() => clampBuilder(400, 1200, 0.8, 1.5)};
  align-items: center;
  color: var(--color-white);
  font-size: ${() => clampBuilder(700, 1200, 1, 1.5)};
  text-transform: uppercase;

  transition: color 0.2s ease;

  &:hover {
    color: var(--color-primary-muted);
  }
`;

const ImageContainer = styled.img`
  display: block;
  height: 4rem;
  width: 4rem;
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

  const { viewportWidth } = useViewport();

  return (
    <StyledAvatar to="/settings">
      <ImageContainer src={`/assets/users/${photo}`} alt="user-avatar" />

      {viewportWidth >= 700 && <span> {firstname} </span>}
    </StyledAvatar>
  );
}

export default Avatar;
