import styled from "styled-components";
import SVG from "react-inlinesvg";

import { clampBuilder } from "../styles/clampFunction";
import { IconLogo } from "../ui/Icons";
import { Heading } from "../ui/Heading";
import ResetPasswordForm from "../features/Authentication/ResetPasswordForm";

const Container = styled.section`
  height: 100dvh;

  display: grid;
  place-items: center;
`;

const PasswordResetContainer = styled.div`
  display: grid;
  padding-block: ${() => clampBuilder(320, 1200, 2.5, 3.5)};

  padding-inline: ${() => clampBuilder(320, 1200, 1.6, 3)};
  border-radius: ${() => clampBuilder(320, 1200, 0.7, 1.5)};
  background-color: var(--color-white-1);
  background-image: var(--color-gradient-light);
  row-gap: ${() => clampBuilder(320, 1200, 1.4, 2.5)};

  box-shadow: var(--box-shadow-light);
`;

const StyledSVG = styled.div`
  justify-self: center;
  text-align: center;

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

function PasswordResetPage() {
  return (
    <Container>
      <PasswordResetContainer>
        <StyledSVG>
          <SVG src={IconLogo} />
        </StyledSVG>

        <Heading type="login"> Reset your password</Heading>

        <ResetPasswordForm />
      </PasswordResetContainer>
    </Container>
  );
}

export default PasswordResetPage;
