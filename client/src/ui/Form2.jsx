import styled from "styled-components";
import { clampBuilder } from "../styles/clampFunction";

const StyledForm = styled.form`
  display: flex;

  flex-flow: column;

  row-gap: ${() => clampBuilder(320, 1200, 1.2, 2)};

  background-color: transparent;

  color: var(--color-dark);
`;

function Form2({ onSubmit, children }) {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
}

export default Form2;
