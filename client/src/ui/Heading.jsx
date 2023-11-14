import styled, { css } from "styled-components";
import { clampBuilder } from "../styles/clampFunction";

export const Heading = styled.h4`
  font-size: ${() => clampBuilder(320, 1200, 2, 4.5)};
  font-weight: 600;

  margin-bottom: ${() => clampBuilder(320, 1200, 1.5, 3)};

  text-transform: uppercase;

  background-color: var(--color-primary-light-dark);

  background-image: var(--color-gradient-dark);

  text-shadow: var(--text-shadow);

  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;

  ${(props) =>
    props.type === "review" &&
    css`
      text-align: center;
      margin-bottom: ${() => clampBuilder(320, 1200, 3.5, 6)};
      font-size: ${() => clampBuilder(320, 1200, 2.2, 4)};
    `}

  ${(props) =>
    props.type === "error" &&
    css`
      text-align: center;

      margin-bottom: ${() => clampBuilder(320, 1200, 0.3, 1)};
      font-size: ${() => clampBuilder(320, 1200, 1.4, 3)};
    `}

  ${(props) =>
    props.type === "login" &&
    css`
      margin: 0;
      font-size: ${() => clampBuilder(320, 1200, 1.5, 3)};
      font-weight: 700;
    `}

    ${(props) =>
    props.type === "others" &&
    css`
      text-align: center;
      margin-bottom: ${() => clampBuilder(320, 1200, 2, 3)};
    `}

    @media (max-width: 920px) {
    ${(props) =>
      props.type === "inTheBox" &&
      css`
        margin-bottom: ${() => clampBuilder(320, 920, -1, -2)};
      `}
  }
`;
