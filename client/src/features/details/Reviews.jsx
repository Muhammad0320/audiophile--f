import styled from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";

export const StyledReviewCard = styled.div`
  display: grid;

  grid-auto-flow: column;

  grid-auto-columns: 27%;

  padding: 0 1rem;

  column-gap: ${() => clampBuilder(320, 1200, 2.5, 4)};

  overflow-x: auto;

  scroll-snap-type: x mandatory;

  scroll-padding: ${() => clampBuilder(320, 1200, 2.5, 4)};

  padding-bottom: ${() => clampBuilder(320, 1200, 2, 4)};
  margin-bottom: ${() => clampBuilder(320, 1200, 2.8, 5.5)};

  @media (max-width: 920px) {
    grid-auto-columns: 39%;
  }

  @media (max-width: 500px) {
    grid-auto-columns: 43%;
  }
`;
