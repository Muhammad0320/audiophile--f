import { HiChevronLeft } from "react-icons/hi2";
import { css, styled } from "styled-components";
import { clampBuilder } from "../styles/clampFunction";

const Button = styled.button`
  border: none;
  color: var(--color-dark);
  opacity: 0.7;
  background-color: transparent;
  font-size: ${() => clampBuilder(350, 1200, 1, 1.5)};

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  transition: all 0.3s ease-in;

  ${(props) =>
    props.kind === "back" &&
    css`
      margin-bottom: 7rem;
    `}

  ${(props) =>
    props.password === "true" &&
    css`
      color: var(--color-primary);

      font-weight: 500;

      text-align: center;

      transition: color 0.2s ease;

      &:hover {
        color: var(--color-primary-light);
      }
    `}
`;

function SmallButton({ children, onClick, type, password }) {
  return (
    <Button onClick={onClick} password={password}>
      {" "}
      {type ? (
        <span> {children} </span>
      ) : (
        <>
          {" "}
          <HiChevronLeft /> <span> {children} </span>{" "}
        </>
      )}
    </Button>
  );
}

export default SmallButton;
