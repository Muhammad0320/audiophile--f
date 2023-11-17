import { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { HiEllipsisVertical } from "react-icons/hi2";
import { useClickOutside } from "../hooks/useClickOutside";
import { clampBuilder } from "../styles/clampFunction";

const StyledList = styled.ul`
  position: fixed;
  z-index: 10;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow-light);
  border-radius: 1rem;

  overflow: hidden;
  padding: 0;
  /* height: 10rem; */
  width: ${() => clampBuilder(320, 1200, 9, 13)};
  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledToggle = styled.button`
  background: none;

  border: none;
  border-radius: 0;
  display: inline-block;
  padding: ${() => clampBuilder(320, 1200, 0.4, 0.7)};
  ${() => clampBuilder(320, 1200, 0.6, 1)};
  transition: background-color 0.2s;
  line-height: 1;
  margin-inline-start: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &:hover {
    background-color: var(--color-white-2);
  }

  & > svg {
    color: var(--color-dark-3);
    font-size: ${() => clampBuilder(320, 1200, 2.2, 4)};
  }
`;

const StyledButton = styled.button`
  background: none;

  border: none;
  overflow: hidden;

  white-space: nowrap;

  color: var(--color-dark-4);

  width: 100%;
  height: 100%;

  text-align: left;

  border-radius: 0;

  font-size: ${() => clampBuilder(320, 1200, 0.8, 1.3)};

  padding: ${() => clampBuilder(320, 1200, 0.9, 1.3)};

  display: flex;

  column-gap: ${() => clampBuilder(320, 1200, 0.5, 1)};

  /* gap: ${() => clampBuilder(320, 1200, 1, 2)}; */

  align-items: center;

  transition: background-color 0.3s ease-out, color 0.2s ease-in;

  &:hover {
    background-color: var(--color-white-2);

    color: var(--color-primary);
  }

  & > svg {
    height: ${() => clampBuilder(320, 1200, 1.2, 1.5)};
    width: ${() => clampBuilder(320, 1200, 1.2, 1.5)};

    margin-right: ${() => clampBuilder(320, 1200, 0.6, 1)};

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
      //   x: window.innerWidth - rect.x - rect.width,
      y: rect.y + rect.height - 30,
    });
  };

  useEffect(() => {
    openId && document.querySelector("body").style.overflowY = 'hidden';
  }, []);

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
      <i> {icon}</i> <span> {children} </span>{" "}
    </StyledButton>
  );
};

Menu.Button = Button;

Menu.List = List;

Menu.Toggle = Toggle;

export default Menu;
