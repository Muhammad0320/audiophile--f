import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { clampBuilder } from "../styles/clampFunction";
import { Heading } from "./Heading";
import Button from "./Button";

const Container = styled.section`
  height: 100dvh;
  width: 100%;

  background-color: var(--color-white-1);

  background-image: var(--color-gradient-dark);

  display: grid;
  place-items: center;
`;

const Box = styled.div`
  background-color: var(--color-white);

  box-shadow: var(--box-shadow-light);

  overflow: hidden;
  border-radius: 5px;

  padding-block: ${() => clampBuilder(320, 1200, 1.2, 2)};

  padding-inline: ${() => clampBuilder(320, 1200, 1.8, 3)};

  display: flex;

  flex-direction: column;

  row-gap: ${() => clampBuilder(320, 1200, 1.5, 2.5)};

  span {
    color: var(--color-primary-dark);

    font-size: ${() => clampBuilder(320, 1200, 1, 1.8)};
    font-weight: bold;
  }
`;

function Error({ message, type }) {
  const buttonText = type === "boundary" ? " Try Again " : " Go Home ";

  return (
    <>
      <GlobalStyles />
      <Container>
        <Box>
          <Heading type="error"> Something went wrong!</Heading>

          <span> {message} </span>
          <Button size="large" onClick={[]}>
            {buttonText}
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Error;
