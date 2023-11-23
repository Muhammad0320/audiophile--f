import styled from "styled-components";

import LoginForm from "../features/Authentication/LoginForm";

import SVG from "react-inlinesvg";
import { IconLogo } from "../ui/Icons";
import OtherAuthmethod from "../ui/OtherAuthmethod";
import { clampBuilder } from "../styles/clampFunction";
import { Heading } from "../ui/Heading";

const PageContainer = styled.div`
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const StyledSignupContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding-block: ${() => clampBuilder(320, 1200, 2.5, 4.5)};

  padding-inline: ${() => clampBuilder(320, 1200, 1.6, 3)};

  background-color: var(--color-white-1);
  background-image: var(--color-gradient-light);
  border-radius: 1.5rem;
  row-gap: ${() => clampBuilder(320, 1200, 1.4, 3)};
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

function LoginPage() {
  return (
    <PageContainer>
      <StyledSignupContainer>
        <StyledSVG>
          <SVG src={IconLogo} />
        </StyledSVG>
        <Heading type="login"> Log in to your account </Heading>
        <LoginForm />
        <OtherAuthmethod authMethod="create one" />
      </StyledSignupContainer>
    </PageContainer>
  );
}

export default LoginPage;
