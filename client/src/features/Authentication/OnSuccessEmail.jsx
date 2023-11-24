import SVG from "react-inlinesvg";
import styled from "styled-components";
import { IconLogo } from "../../ui/Icons";
import { clampBuilder } from "../../styles/clampFunction";

const Container = styled.div`
  height: 100dvh;

  display: grid;

  justify-content: center;

  padding-block: ${() => clampBuilder(320, 1200, 3, 7)};
`;

const TextContainer = styled.div`
  margin-inline: auto;
  width: 50%;

  display: flex;

  flex-flow: column;

  color: var(--color-dark-4);

  background: var(--color-white-2);

  background-image: var(--color-gradient-dark-muted);

  box-shadow: var(--box-shadow-dark);

  border-radius: ${() => clampBuilder(320, 1200, 0.7, 1.2)};

  padding-block: ${() => clampBuilder(320, 1200, 1, 2)};
  padding-inline: ${() => clampBuilder(320, 1200, 1, 2.3)};

  height: fit-content;

  /* margin-inline: ${() => clampBuilder(320, 1200, 5, 20)}; */

  row-gap: ${() => clampBuilder(320, 1200, 1.6, 3)};

  & > em {
    font-size: ${() => clampBuilder(320, 1200, 1.2, 2.5)};

    text-align: center;
  }
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

function OnSuccessEmail() {
  return (
    <Container>
      <TextContainer>
        <StyledSVG>
          <SVG src={IconLogo} />
        </StyledSVG>
        <em>
          A password reset email was sent to the your email address. Please
          click on the password reset button to reset your password.
        </em>
      </TextContainer>
    </Container>
  );
}

export default OnSuccessEmail;
