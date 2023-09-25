import styled from "styled-components";
import { Heading } from "../features/details/ProductDetails";
import LoginForm from "../features/Authentication/LoginForm";

import SVG from "react-inlinesvg";
import { IconLogo } from "../ui/Icons";

const StyledSignupContainer = styled.div`
  display: grid;
  width: 80%;
  justify-content: center;
  align-items: center;

  background-color: var(--color-white-2);

  row-gap: 3rem;
`;

const styledSVG = styled.div`
  & svg {
    fill: var(--color-dark);
    transition: all 0.3s;

    &:hover {
      fill: var(--color-dark-1);
    }
  }

  &.active:link svg,
  &.active:visited svg {
    fill: var(--color-dark);
  }
`;

function LoginPage() {
  return (
    <StyledSignupContainer>
      <Heading> Log in to your account </Heading>
      <styledSVG>
        <SVG src={IconLogo} />
      </styledSVG>
      <LoginForm />
    </StyledSignupContainer>
  );
}

export default LoginPage;
