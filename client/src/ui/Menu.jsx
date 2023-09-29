import { createContext, useState } from "react";

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
