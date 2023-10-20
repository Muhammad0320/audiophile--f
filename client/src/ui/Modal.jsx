import { cloneElement, createContext, useContext, useState } from "react";
import { styled } from "styled-components";
import { useClickOutside } from "../hooks/useClickOutside";
import { createPortal } from "react-dom";
import { clampBuilder } from "../styles/clampFunction";

const StyledModal = styled.div`
  border-radius: 1rem;
  position: fixed;

  top: 35%;
  right: 20%;
  transform: translate(50%, -35%);
`;

const StyledModalMenu = styled.div`
  position: fixed;

  top: ${() => clampBuilder(300, 500, 6, 9)};
  padding-inline: ${() => clampBuilder(320, 920, 1, 1.5)};
  z-index: 2;
  background: var(--color-white-vivid);
  background-image: var(--color-gradient-light);
  box-shadow: var(--bos-shadow-light);
  transition: all 0.5s;

  @media (max-width: 500px) {
    width: 100%;
    height: 100dvh;
    overflow-y: auto;
  }
`;

const OverLay = styled.div`
  inset: 0;
  position: fixed;

  z-index: 100;
  background-color: var(--color-dark-3);
  backdrop-filter: blur(2.5px);
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
