import SVG from "react-inlinesvg";
import styled from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";
import { IconLogo } from "../../ui/Icons";

const Container = styled.div`
  height: 100dvh;

  display: grid;

  justify-content: center;

  padding-block: ${() => clampBuilder(320, 1200, 3, 7)};
`;

const TextContainer = styled.div`
  width: 60%;

  display: flex;

  flex-flow: column;

  row-gap: ${() => clampBuilder(320, 1200, 1.6, 3)};

  & > em {
    font-size: ${() => clampBuilder(320, 1200, 1.5, 3)};

    text-align: center;
  }
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

function OnSuccessEmail() {
  return (
    <Container>
      <TextContainer>
        <StyledSVG>
          <SVG src={IconLogo} />
        </StyledSVG>
        <em>
          A password reset token email was sent to the your email address please
          click on the password reset button to reset your password.
        </em>
      </TextContainer>
    </Container>
  );
}

export default OnSuccessEmail;
