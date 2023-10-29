import styled from "styled-components";
import { clampBuilder } from "../styles/clampFunction";

export const Container = styled.div`
  display: grid;
  padding: 2rem 1.5rem;

  margin-bottom: 3rem;

  grid-template-columns: repeat(2, 50%);

  column-gap: ${() => clampBuilder(920, 1200, 7, 10)};

  &:not(:last-child) {
    margin-bottom: ${() => clampBuilder(350, 1200, 6, 12)};
  }

  @media (max-width: 920px) {
    grid-template-columns: none;

    grid-template-rows: repeat(2, 50%);
    row-gap: ${() => clampBuilder(320, 920, 2.5, 4)};
  }
`;

export const ImageContainer = styled.div`
  background-color: var(--color-white-2);
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 920px) {
    grid-row: 1 / 2;
    width: 90%;
    height: 90%;
    object-fit: cover;

    & > img {
      width: 45%;
      box-shadow: var(--box-shadow-light);

      transition: scale 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &:hover {
        scale: 1.1;
      }
    }
  }
`;

export const DescriptionContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  row-gap: ${() => clampBuilder(320, 1200, 1.5, 3)};
  margin-inline-end: ${() => clampBuilder(920, 1200, 5, 10)};
  & > button {
    align-self: flex-start;
  }

  & > section {
    align-self: flex-start;
  }

  @media (max-width: 920px) {
    margin-inline-end: 0;
    grid-row: 2 / -1;
    align-items: center;
    padding-inline: ${() => clampBuilder(350, 920, 6, 10)};

    & > button {
      align-self: center;
    }
  }
`;

export const NewProduct = styled.div`
  letter-spacing: ${() => clampBuilder(350, 1200, 0.5, 1)};
  font-size: ${() => clampBuilder(350, 1200, 1, 1.4)};
  text-transform: uppercase;

  color: var(--color-primary);

  @media (max-width: 920px) {
    text-align: center;
  }
`;

export const ProductName = styled.p`
  color: var(--color-dark);
  font-size: ${() => clampBuilder(350, 1200, 3.0, 4.5)};
  line-height: 1.3;
  font-weight: 500;

  margin-block: 0;

  @media (max-width: 920px) {
    text-align: center;
    padding-inline: ${() => clampBuilder(350, 920, 5, 8)};
    margin-block: 0;
  }
`;

export const ProductPrice = styled.p`
  font-weight: 600;
  font-size: ${() => clampBuilder(320, 1200, 2, 3)};
  color: var(--color-dark);
  margin: 0;
`;
