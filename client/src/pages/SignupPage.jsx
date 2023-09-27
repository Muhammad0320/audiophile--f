import styled from "styled-components";
import { Heading } from "../features/details/ProductDetails";

import SVG from "react-inlinesvg";
import { IconLogo } from "../ui/Icons";
import SignupForm from "../features/Authentication/SignupForm";
import OtherAuthmethod from "../ui/OtherAuthmethod";

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
  box-shadow: var(--box-shadow-light);
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

function SignupPage() {
  return (
    <PageContainer>
      <StyledSignupContainer>
        <StyledSVG>
          <SVG src={IconLogo} />
        </StyledSVG>
        <Heading type="login"> Log in to your account </Heading>
        <SignupForm />
        <OtherAuthmethod authMethod="sign in" />
      </StyledSignupContainer>
    </PageContainer>
  );
}

export default SignupPage;
