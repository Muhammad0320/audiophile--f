import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    border: none;
    color: var(--color-primary);
    background-color: transparent;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: var(--color-primary-light);
    }
  }
`;

export default FileInput;
