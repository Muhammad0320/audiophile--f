import { createContext, useState } from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  position: fixed;
  z-index: 10;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow-light);
  border-radius: 1rem;

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledToggle = styled.button`
  background: none;

  border: none;
  border-radius: 0;

  padding: 0.7rem 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-white-2);
  }

  & > svg {
    color: var(--color-dark);
    height: 5rem;
    width: 5rem;
  }
`;

const StyledButton = styled.button`
  background: none;

  border: none;

  border-radius: 0;

  font-size: 1.5rem;

  padding: 1.3rem;

  gap: 2.1rem;

  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: var(--color-white-2);
  }

  & > svg {
    height: 1.5rem;
    width: 1.5rem;

    margin-right: 1rem;

    color: currentColor;

    transition: all 0.2s;
  }
`;

const MenuContext = createContext();

const Menu = ({ children }) => {
  const [isOpen, setIsOpen] = useState("");

  const [position, setPosition] = useState({});

  const open = setIsOpen;

  const close = setIsOpen("");

  return (
    <MenuContext.Provider
      value={{ isOpen, position, setPosition, open, close }}
    >
      {" "}
      {children}{" "}
    </MenuContext.Provider>
  );
};

export default Menu;
