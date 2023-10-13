import { HiChevronLeft } from "react-icons/hi2";
import { css, styled } from "styled-components";

const Button = styled.button`
  border: none;
  color: var(--color-dark);
  opacity: 0.7;
  background-color: transparent;
  font-size: 1.5rem;

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

function SmallButton({ children, onClick }) {
  return (
    <Button onClick={onClick}>
      {" "}
      <HiChevronLeft /> {children}
    </Button>
  );
}

export default SmallButton;
