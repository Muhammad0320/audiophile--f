import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { clampBuilder } from "../styles/clampFunction";

const StyledAuthMethod = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;

  font-size: ${() => clampBuilder(320, 1200, 1.2, 1.6)};

  color: var(--color-dark);

  &:has(a) a {
    color: var(--color-primary);
    transition: color 0.2s ease-in;

    &:hover {
      color: var(--color-primary-light);
    }
  }

  & > span {
    font-size: ${() => clampBuilder(320, 1200, 1, 1.5)};
  }
`;

function OtherAuthmethod({ authMethod }) {
  const message =
    authMethod !== "sign in" ? "I don't have an accout" : "I have an account";

  const to = authMethod === "sign in" ? "/login" : "/signup";

  return (
    <StyledAuthMethod>
      <span> {message} </span>

      <NavLink to={to}> {authMethod} </NavLink>
    </StyledAuthMethod>
  );
}

export default OtherAuthmethod;
