import styled from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding-block: ${() => clampBuilder(320, 1200, 2.2, 3.5)};

  padding-inline: ${() => clampBuilder(320, 1200, 1, 3)};

  background-color: var(--color-white-1);
  background-image: var(--color-gradient-light);
  border-radius: 1.5rem;

  box-shadow: var(--box-shadow-light);
`;

function ForgorPassword() {
  return <Container></Container>;
}

export default ForgorPassword;
