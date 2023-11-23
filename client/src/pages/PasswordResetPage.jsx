import styled from "styled-components";

import { clampBuilder } from "../styles/clampFunction";

const Container = styled.section`
  height: 100dvh;
  background-color: var(--color-white-2);

  display: grid;
  place-items: center;

  padding-block: ${() => clampBuilder(320, 1200, 2.5, 4.5)};

  padding-inline: ${() => clampBuilder(320, 1200, 1.6, 3)};

  background-color: var(--color-white-1);
  background-image: var(--color-gradient-light);

  row-gap: ${() => clampBuilder(320, 1200, 1.4, 3)};
  box-shadow: var(--box-shadow-light);
`;

function PasswordResetPage() {
  return <Container></Container>;
}

export default PasswordResetPage;
