import { css, styled } from "styled-components";

const variations = {
  primary: css`
    background-color: var(--color-primary);
    color: var(--color-white);
    transition: background-color 0.3s;
    border: none;

    &:hover {
      background-color: var(--color-primary-light);
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
  padding: 1rem 1.4rem;
  font-size: 1.3rem;
  border: none;

  ${(props) => variations[props.variation]}
  ${(props) =>
    props.size === "large" &&
    css`
      padding: 1.4rem 2.4rem;
      font-size: 1.5rem;
    `}

    ${(props) =>
    props.withspinner === "true" &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 1.5rem;
    `}
`;

export default Button;

Button.defaultProps = {
  variation: "primary",
};
