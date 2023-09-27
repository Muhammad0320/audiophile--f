import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledAuthMethod = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;

  font-size: 1.6rem;

  color: var(--color-dark);

  &:has(a) a {
    color: var(--color-primary);
  }
`;

function OtherAuthmethod({ authMethod }) {
  const message =
    authMethod === "sign in" ? "I have no accout" : "I have an account";

  return (
    <StyledAuthMethod>
      <span> {message} </span>

      <NavLink> {authMethod} </NavLink>
    </StyledAuthMethod>
  );
}

export default OtherAuthmethod;
