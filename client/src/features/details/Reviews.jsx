import styled from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";

export const StyledReviewCard = styled.div`
  display: grid;

  grid-auto-flow: column;

  grid-auto-columns: 27%;

  padding: 0 ${() => clampBuilder(320, 1200, 0.3, 1)};

  column-gap: ${() => clampBuilder(320, 1200, 2.5, 4)};

  overflow-x: auto;

  scroll-snap-type: x mandatory;

  margin-top: ${() => clampBuilder(320, 1200, 1.3, 2)};

  scroll-padding: ${() => clampBuilder(320, 1200, 2.5, 4)};

  padding-bottom: ${() => clampBuilder(320, 1200, 2, 4)};
  margin-bottom: ${() => clampBuilder(320, 1200, 2.8, 5.5)};

  @media (max-width: 920px) {
    grid-auto-columns: 39%;
  }

  @media (max-width: 500px) {
    grid-auto-columns: 43%;
  }

  position: relative;
`;

export const StyledAddReview = styled.span`
  --color-gradient-dark-1: linear-gradient(
    145deg,
    rgb(217, 126, 74, 0.5),
    rgba(0, 0, 0, 0.25)
  );

  padding-inline: ${() => clampBuilder(320, 1200, 0.8, 1.2)};

  padding-block: ${() => clampBuilder(320, 1200, 0.5, 1)};

  color: var(--color-primary);

  background-image: var(--color-gradient-dark-1);

  background-position: bottom left;

  background-repeat: no-repeat;

  cursor: pointer;

  font-weight: 500;

  background-size: 0% 1.5px;

  transition: all 0.3s ease-in;

  font-size: ${() => clampBuilder(320, 1200, 0.6, 1.3)};

  display: flex;

  justify-content: flex-end;
  row-gap: ${() => clampBuilder(320, 1200, 0.4, 1)};

  width: fit-content;

  align-items: center;

  &:hover {
    color: var(--color-primary-light);
    background-size: 100% 1.5px;
  }
`;
