import { css, styled } from "styled-components";
import { clampBuilder } from "../styles/clampFunction";

const variations = {
  primary: css`
    background-color: var(--color-primary);
    background-image: var(--color-gradient-dark);
    color: var(--color-white);
    transition: background-color 0.3s;
    border: none;

    &:hover {
      background-color: var(--color-primary-light);
      background-image: var(--color-gradient-dark-1);
    }
  `,

  transparent: css`
    background-color: transparent;
    color: var(--color-dark);
    border: 1px solid var(--color-dark);
    transition: all 0.3s;

    &:hover {
      background-color: var(--color-dark);
      color: var(--color-white);
    }
  `,

  dark: css`
    background-color: var(--color-dark);
    color: var(--color-white);
    border: 1px solid var(--color-dark);

    transition: all 0.3s;

    &:hover {
      background-color: var(--color-dark-3);
      color: var(--color-white);
      border: 1px solid var(--color-dark-3);
    }
  `,

  danger: css`
    background-color: var(--color-red-dark);
    color: var(--color-white);
    border: 1px solid var(--color-red-dark);

    transition: all 0.3s;

    &:hover {
      background-color: var(--color-red-light);
      color: var(--color-white);
      border: 1px solid var(--color-red-light);
    }
  `,
};

const Button = styled.button`
  text-transform: uppercase;
  padding: ${() => clampBuilder(320, 1200, 0.8, 1)};
  ${() => clampBuilder(320, 1200, 1.1, 1.4)};
  font-size: ${() => clampBuilder(320, 1200, 1, 1.3)};
  border: none;

  ${(props) => variations[props.variation]}
  ${(props) =>
    props.size === "large" &&
    css`
      padding: ${() => clampBuilder(320, 1200, 1, 1.4)}
        ${() => clampBuilder(320, 1200, 1.7, 2.5)};
      font-size: ${() => clampBuilder(320, 1200, 1.1, 1.5)};
    `}

    ${(props) =>
    props.withspinner === "true" &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: ${() => clampBuilder(320, 1200, 1.2, 1.5)};
    `}
`;

export default Button;

Button.defaultProps = {
  variation: "primary",
};
