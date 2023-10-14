import { css, styled } from "styled-components";

const Input = styled.input`
  border: 2px solid var(--color-dark-2);
  background-color: transparent;
  padding: 1rem 1.6rem;
  caret-color: var(--color-primary);
  color: var(--color-dark);
  border-radius: 1rem;
  margin-bottom: 2rem;
  position: relative;
  &::-webkit-input-placeholder {
    color: var(--color-dark);
    opacity: 0.7;
  }

  ${(props) =>
    props.account === "true" &&
    css`
      font-size: 1.8rem;
      margin-bottom: 2rem;
    `}

  ${(props) =>
    props.error &&
    css`
      border: 1px solid red;
    `}
`;

export default Input;
