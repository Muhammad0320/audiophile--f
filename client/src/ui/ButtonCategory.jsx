import { styled } from "styled-components";
import SVG from "react-inlinesvg";
import { IconArrowRight } from "./Icons";

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  font-weight: 400;
  column-gap: 0.8rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: black;
  background-color: transparent;
  transition: all 0.3s;

  &:hover {
    color: var(--color-primary);

    column-gap: 1.2rem;
  }
`;

const ButtonCategory = ({ children, onClick }) => {
  return (
    <Button onClick={onClick}>
      {children}
      <SVG src={IconArrowRight} />
    </Button>
  );
};

export default ButtonCategory;
