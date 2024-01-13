import { styled } from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";

export const ButtonSkeleton = styled.div`
  height: 4.5rem;
  width: 7.5rem;
  border-radius: ${() => clampBuilder(320, 1200, 0.4, 1)};
`;
