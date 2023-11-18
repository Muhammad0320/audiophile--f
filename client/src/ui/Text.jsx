import styled, { css } from "styled-components";
import { clampBuilder } from "../styles/clampFunction";

export const Text = styled.p`
  color: var(--color-dark-3);
  font-size: ${() => clampBuilder(350, 1200, 1.2, 2)};

  @media (max-width: 920px) {
    ${(props) =>
      props.type === "product" &&
      css`
        text-align: center;
        font-size: ${() => clampBuilder(320, 920, 1.2, 2)};
      `}
  }

  ${(props) =>
    props.type === "avatar" &&
    css`
      color: var(--color-white);
      margin-right: auto;
    `}

  ${(props) =>
    props.type === "details" &&
    css`
      color: var(--color-primary-light-dark);

      font-size: ${() => clampBuilder(320, 1200, 1, 1.5)};
    `}


  ${(props) =>
    props.type === "review" &&
    css`
      align-self: flex-start;
      text-align: justify;
      margin-block: auto;
      line-height: 1.3;

      font-size: ${() => clampBuilder(320, 920, 1, 1.4)};
    `}
`;
