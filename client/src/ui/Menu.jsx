import { createContext, useContext, useState } from "react";
import styled from "styled-components";

import { HiEllipsisVertical } from "react-icons/hi2";
import { useClickOutside } from "../hooks/useClickOutside";

const StyledList = styled.ul`
  position: fixed;
  z-index: 10;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow-light);
  border-radius: 1rem;

  overflow: hidden;

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
  overflow: hidden;

  width: 100%;
  height: 100%;

  text-align: center;

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
  const [openId, setOpenId] = useState("");

  const [position, setPosition] = useState({});

  const open = setOpenId;

  const close = () => setOpenId("");

  return (
    <MenuContext.Provider
      value={{ openId, position, setPosition, open, close }}
    >
      {" "}
      {children}{" "}
    </MenuContext.Provider>
  );
};

const Toggle = ({ id }) => {
  const { close, open, openId, setPosition } = useContext(MenuContext);

  const handleToggle = (e) => {
    openId === "" && openId !== id ? open(id) : close();

    const rect = e.target?.closest("button").getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.x - rect.width,
      y: rect.y + 8 + rect.height,
    });
  };

  return (
    <StyledToggle onClick={handleToggle}>
      {" "}
      <HiEllipsisVertical />{" "}
    </StyledToggle>
  );
};

const List = ({ id, children }) => {
  const { openId, close, position } = useContext(MenuContext);

  const { ref } = useClickOutside(close);

  if (id !== openId) return null;

  return (
    <StyledList ref={ref} position={position}>
      {" "}
      {children}{" "}
    </StyledList>
  );
};

const Button = ({ icon, children, onClick }) => {
  const { close } = useContext(MenuContext);

  const handleClick = () => {
    close();

    onClick?.();
  };

  return (
    <StyledButton onClick={handleClick}>
      {" "}
      {icon} <span> {children} </span>{" "}
    </StyledButton>
  );
};

Menu.Button = Button;

Menu.List = List;

Menu.Toggle = Toggle;

export default Menu;
