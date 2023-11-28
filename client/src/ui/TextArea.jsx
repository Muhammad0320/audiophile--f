import styled from "styled-components";
import { clampBuilder } from "../styles/clampFunction";

export const TextArea = styled.textarea`
  border: 1px solid var(--color-dark-2);
  background-color: transparent;
  padding-block: ${() => clampBuilder(320, 1200, 0.8, 1.5)};

  padding-inline: ${() => clampBuilder(320, 1200, 0.8, 1.6)};

  caret-color: var(--color-primary);
  color: var(--color-dark-3);
  border-radius: 1rem;
  margin-bottom: ${() => clampBuilder(320, 1200, 1.2, 2)};
  position: relative;
  height: ${() => clampBuilder(320, 1200, 6, 10)};

  &:hover {
    border: 1.5px solid var(--color-primary);
  }

  outline: transparent;

  &::-webkit-input-placeholder {
    color: currentColor;
    opacity: 0.7;
    padding-top: 0;
    font-size: ${() => clampBuilder(320, 1200, 1, 2)};
  }

  resize: none;
`;
