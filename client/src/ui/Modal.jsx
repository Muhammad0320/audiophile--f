import { createPortal } from "react-dom";
import { css, styled } from "styled-components";
import { useViewport } from "../context/ViewPort";
import { clampBuilder } from "../styles/clampFunction";
import { useClickOutside } from "../hooks/useClickOutside";
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const StyledModal = styled.div`
  border-radius: 1rem;
  max-width: 50%;
  position: fixed;
  top: 30%;
  right: 20%;
  transform: translate(40%, -35%);
  margin-right: ${() => clampBuilder(1000, 1200, 3, 4)};
  @media (max-width: 1000px) {
    margin-inline-end: ${() => clampBuilder(320, 1000, 5, 3)};
  }
`;

const StyledModalMobile = styled.div`
  height: 100dvh;
  display: grid;
  place-items: center;

  margin-inline: ${() => clampBuilder(400, 1200, 5, 25)};

  ${(props) =>
    props.type === "menu" &&
    css`
      width: 90dvw;
      margin-inline: auto;
    `}
`;

const StyledModalMenu = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 40%;

  z-index: 2;

  transition: all 0.5s;

  padding-left: 0;

  @media (max-width: 500px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 100%;
    overflow-y: auto;
  }

  ${(props) =>
    props.type === "details" &&
    css`
      width: 70%;
    `}
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

  useEffect(() => {
    if (openModal) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      document.querySelector("html").style.overflow = "auto";
    }
  }, [openModal]);

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

  const { viewportWidth } = useViewport();

  if (openModal !== name) return null;

  return createPortal(
    <OverLay>
      {!page && (
        <>
          {viewportWidth >= 450 ? (
            <StyledModal ref={ref}>
              {cloneElement(children, { onClose: () => close() })}
            </StyledModal>
          ) : (
            <StyledModalMobile ref={ref}>
              {cloneElement(children, { onClose: () => close() })}
            </StyledModalMobile>
          )}
        </>
      )}

      {page && (
        <StyledModalMenu ref={ref} type={page}>
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
