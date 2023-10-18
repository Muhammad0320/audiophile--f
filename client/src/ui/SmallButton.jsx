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

  &:hover {
    color: var(--color-primary);

    column-gap: 1rem;
  }
`;

function SmallButton({ children, onClick, type }) {
  return (
    <Button onClick={onClick}>
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
