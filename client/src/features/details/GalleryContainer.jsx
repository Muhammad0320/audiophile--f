import styled from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";

export const GalleryContainer = styled.div`
  margin-bottom: ${() => clampBuilder(320, 1200, 8, 15)};
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: repeat(2, 1fr);
  gap: ${() => clampBuilder(320, 1200, 1.4, 3)};

  @media (max-width: 420px) {
    grid-template-columns: none;
    grid-template-rows: repeat(2, 1fr) 1.5fr;
  }

  & > * {
    box-shadow: var(--box-shadow-light);
  }

  & > img:first-of-type {
    grid-row: 1 / 2;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    grid-column: 1 / 2;

    @media (max-width: 420px) {
      grid-row: 1 / 2;
    }
  }

  & > img:nth-of-type(2) {
    grid-row: 2 / -1;
    grid-column: 1 / 2;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 420px) {
      grid-row: 2 / 3;
    }
  }

  & > img:last-of-type {
    grid-row: 1 / -1;
    grid-column: 2 / -1;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 420px) {
      grid-row: 3 / -1;
    }
  }
`;
