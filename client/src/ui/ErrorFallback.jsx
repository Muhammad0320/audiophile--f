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

  row-gap: ${() => clampBuilder(320, 1200, 1, 2)};
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Box>
          <Heading> Something went wrong! 😟😔 </Heading>

          <span>{error}</span>
          <Button size="large" onClick={resetErrorBoundary}>
            {" "}
            Go Back{" "}
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default ErrorFallback;
