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
