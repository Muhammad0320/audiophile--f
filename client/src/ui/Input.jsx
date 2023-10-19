import { css, styled } from "styled-components";
import { clampBuilder } from "../styles/clampFunction";

const Input = styled.input`
  border: 1.5px solid var(--color-dark-2);
  background-color: transparent;
  padding: ${() => clampBuilder(320, 1200, 0.6, 1)};
  ${() => clampBuilder(320, 1200, 0.8, 1.6)};
  caret-color: var(--color-primary);
  color: var(--color-dark-3);
  border-radius: 1rem;
  margin-bottom: ${() => clampBuilder(320, 1200, 1.2, 2)};
  position: relative;
  &::-webkit-input-placeholder {
    color: var(--color-dark-3);
    opacity: 0.7;
    font-size: ${() => clampBuilder(320, 1200, 1.2, 2)};
  }

  ${(props) =>
    props.account === "true" &&
    css`
      font-size: ${() => clampBuilder(320, 1200, 1.1, 1.8)};
      margin-bottom: ${() => clampBuilder(320, 1200, 1.2, 2)};
    `}

  ${(props) =>
    props.error &&
    css`
      border: 1px solid red;
    `}
`;

export default Input;
