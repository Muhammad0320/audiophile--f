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
  padding: 4rem auto;
  background-color: var(--color-white-2);

  row-gap: 3rem;
`;

const StyledSVG = styled.div`
  justify-self: center;
  /* height: 5rem;
  width: 15rem; */
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
      <StyledSVG>
        <SVG src={IconLogo} />
      </StyledSVG>
      <Heading type="login"> Log in to your account </Heading>
      <LoginForm />
    </StyledSignupContainer>
  );
}

export default LoginPage;
