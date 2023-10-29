import styled from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";

export const FeatureBox = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: 1.5fr 1fr;
  column-gap: ${() => clampBuilder(920, 1200, 8, 10)};
  margin: ${() => clampBuilder(320, 1200, 7, 15)} 0;

  @media (max-width: 920px) {
    grid-template-columns: none;
    grid-template-rows: 2fr 1fr;
    row-gap: ${() => clampBuilder(320, 920, 1.4, 3)};

    margin-inline-end: ${() => clampBuilder(320, 920, 2.5, 6)};
  }
`;

export const FeatureText = styled.p`
  font-size: ${() => clampBuilder(920, 1200, 1.5, 2.2)};

  color: var(--color-dark-3);

  @media (max-width: 920px) {
    font-size: ${() => clampBuilder(350, 920, 1.3, 2)};
  }
`;

export const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: ${() => clampBuilder(500, 1200, 1, 1.5)};
`;

export const InTheBox = styled.div`
  display: flex;

  column-gap: ${() => clampBuilder(320, 1200, 1, 2)};

  align-items: flex-start;
`;

export const IntheBoxAndHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InTheBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${() => clampBuilder(320, 1200, 1.5, 2)};

  @media (max-width: 920px) {
    align-self: flex-end;
    margin-inline-end: ${() => clampBuilder(320, 920, 4, 10)};
  }

  @media (max-width: 420px) {
    margin-top: 3rem;
    align-self: flex-start;
  }
`;

export const Quantity = styled.span`
  font-size: ${() => clampBuilder(320, 1200, 1.2, 2.5)};
  font-weight: 600;
  color: var(--color-primary);
`;
