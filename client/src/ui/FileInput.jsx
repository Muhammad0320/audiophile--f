import styled from "styled-components";
import { clampBuilder } from "../styles/clampFunction";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: ${() => clampBuilder(320, 1200, 1, 1.6)};

  /* opacity: 0; */

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: ${() => clampBuilder(320, 1200, 0.5, 0.8)};
    ${() => clampBuilder(320, 1200, 1, 1.5)};
    border: none;
    color: var(--color-primary);
    background-color: transparent;
    cursor: pointer;
    transition: color 0.2s;

    text-decoration: underline;
    text-underline-offset: 7px;

    &:hover {
      color: var(--color-primary-light);
    }
  }
`;

export default FileInput;
