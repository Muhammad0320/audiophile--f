import { css, styled } from "styled-components";

const Button = styled.button`
  border: none;
  color: var(--color-dark);
  opacity: 0.7;
  background-color: transparent;
  font-size: 1.5rem;

  ${(props) =>
    props.kind === "back" &&
    css`
      margin-bottom: 7rem;
    `}

  transition: color 0.3s;

  &:hover {
    color: var(--color-primary);
  }
`;

function SmallButton({ children, onClick }) {
  return <Button onClick={onClick}> {children}</Button>;
}

export default SmallButton;
