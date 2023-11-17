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
  position: fixed;
  max-width: 50%;
  top: 30%;
  right: 20%;
  transform: translate(40%, -35%);
  margin-right: ${() => clampBuilder(1000, 1200, 3, 4)};
  @media (max-width: 1000px) {
    margin-inline-end: ${() => clampBuilder(320, 1000, 5, 3)};
  }
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

  padding-left: 0;

  @media (max-width: 500px) {
    width: 100%;
    height: 100dvh;
    overflow-y: auto;
  }
`;

const StyledModalMobile = styled.div`
  height: 100dvh;
  display: grid;
  justify-content: center;
  align-content: center;

  margin-inline: ${() => clampBuilder(400, 1200, 5, 25)};

  ${(props) =>
    props.type === "menu" &&
    css`
      width: 90dvw;
      margin-inline: auto;
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
        <StyledModalMobile ref={ref} type={page}>
          {cloneElement(children, { onClose: () => close() })}
        </StyledModalMobile>
      )}
    </OverLay>,

    document.body
  );
};

Modal.Open = Open;

Modal.Window = Window;

export default Modal;
