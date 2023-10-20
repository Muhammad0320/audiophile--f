import { cloneElement, createContext, useContext, useState } from "react";
import { styled } from "styled-components";
import { useClickOutside } from "../hooks/useClickOutside";
import { createPortal } from "react-dom";

const StyledModal = styled.div`
  border-radius: 1rem;
  position: fixed;
  height: 60%;

  top: 35%;
  right: 20%;
  transform: translate(70%, -35%);
`;

const StyledModalMenu = styled.div`
  position: fixed;
  width: 100%;
  background-color: var(--color-white);

  box-shadow: var(--bos-shadow-light);
  transition: all 0.5s;
`;

const OverLay = styled.div`
  inset: 0;
  position: fixed;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  height: 100dvh;
  width: 100dvw;
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openModal, setOpenModal] = useState("");

  const open = setOpenModal;

  const close = () => setOpenModal("");

  return (
    <ModalContext.Provider value={{ open, openModal, close }}>
      {" "}
      {children}{" "}
    </ModalContext.Provider>
  );
}

const Open = ({ children, opens }) => {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(() => opens) });
};

const Window = ({ children, name, page }) => {
  const { openModal, close } = useContext(ModalContext);

  const { ref } = useClickOutside(close);

  if (openModal !== name) return null;

  return createPortal(
    <OverLay>
      {!page && (
        <StyledModal ref={ref}>
          {cloneElement(children, { onClose: () => close() })}
        </StyledModal>
      )}

      {page && (
        <StyledModalMenu ref={ref}>
          {cloneElement(children, { onClose: () => close() })}
        </StyledModalMenu>
      )}
    </OverLay>,

    document.body
  );
};

Modal.Open = Open;

Modal.Window = Window;

export default Modal;
