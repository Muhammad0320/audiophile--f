import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { clampBuilder } from "../styles/clampFunction";

export const HamburgerContainer = styled.button`
  outline: transparent;
  background: transparent;
  border: none;

  padding: ${() => clampBuilder(700, 1200, 1.2, 2)};

  translate: 0 -5px;

  &:hover > *::before {
    top: -1rem;
  }

  &:hover > *::after {
    top: 1rem;
  }

  ${(props) =>
    props.clicked === "true" &&
    css`
      & > :first-child {
        background-color: transparent;
      }

      & > :first-child::before {
        transform: rotate(125deg);
        top: 0;
      }

      & > :first-child::after {
        transform: rotate(-125deg);
        top: 0;
      }
    `}
`;

export const HamburgerIcon = styled(NavLink)`
  align-self: self-start;

  position: relative;
  &,
  &::before,
  &::after {
    height: 2px;
    width: ${() => clampBuilder(400, 920, 2, 3)};
    background-color: var(--color-white);
    display: inline-block;
  }

  ${(props) =>
    props.color === "black" &&
    css`
      background-color: var(--color-dark-3);
    `}

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::after {
    top: 0.8rem;
  }

  &::before {
    top: -0.8rem;
  }
`;
