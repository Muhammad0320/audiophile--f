import styled from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";

export const OthersContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr max-content;
  color: var(--color-dark);
`;

export const OtherItemContainer = styled.div`
  display: flex;
  margin-top: ${() => clampBuilder(320, 1200, 3, 7)};
  column-gap: ${() => clampBuilder(320, 1200, 3, 7)};

  @media (max-width: 500px) {
    flex-direction: column;

    row-gap: ${() => clampBuilder(320, 500, 4, 3)};
  }
`;

export const OtherImageContainer = styled.div`
  text-align: center;
  background-color: var(--color-white-2);
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  grid-row: 1 / 2;
`;

export const OtherTextBox = styled.div`
  display: flex;
  grid-row: 2 / -1;
  flex-direction: column;
  column-gap: ${() => clampBuilder(320, 1200, 1.2, 2)};
  align-items: center;
  font-size: ${() => clampBuilder(320, 1200, 1.3, 3.5)};
  font-weight: 500;
`;
