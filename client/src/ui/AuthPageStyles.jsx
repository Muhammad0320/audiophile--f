import styled from "styled-components";
import { clampBuilder } from "../styles/clampFunction";

export const PageContainer = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: grid;
  justify-content: center;
  align-items: center;
  padding-block: ${() => clampBuilder(320, 1200, 3, 6)};
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const StyledAuthContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: ${() => clampBuilder(320, 1200, 2.5, 4.5)};
  ${() => clampBuilder(320, 1200, 1.3, 2.5)};
  background-color: var(--color-white-1);
  background-image: var(--color-gradient-light);
  border-radius: 1.5rem;
  row-gap: ${() => clampBuilder(320, 1200, 1.4, 3)};
  box-shadow: var(--box-shadow-light);
`;

export const StyledSVG = styled.div`
  justify-self: center;

  & svg {
    fill: var(--color-dark);
    transition: all 0.3s;

    &:hover {
      fill: var(--color-dark-1);
    }
  }

  &.active:link svg,
  &.active:visited svg {
    fill: var(--color-dark);
  }
`;
