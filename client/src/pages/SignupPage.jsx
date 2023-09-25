import styled from "styled-components";
import { Heading } from "../features/details/ProductDetails";
import LoginForm from "../features/Authentication/LoginForm";

import SVG from "react-inlinesvg";
import { IconLogo } from "../ui/Icons";
import SignupForm from "../features/Authentication/SignupForm";

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const StyledSignupContainer = styled.div`
  width: 110%;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background-color: var(--color-white-1);
  border-radius: 1.5rem;
  row-gap: 3rem;
  box-shadow: 0 5px 5px 5px rgba(16, 16, 16, 0.3);
`;

const StyledSVG = styled.div`
  justify-self: center;

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
    <PageContainer>
      <StyledSignupContainer>
        <StyledSVG>
          <SVG src={IconLogo} />
        </StyledSVG>
        <Heading type="login"> Log in to your account </Heading>
        <SignupForm />
      </StyledSignupContainer>
    </PageContainer>
  );
}

export default LoginPage;
