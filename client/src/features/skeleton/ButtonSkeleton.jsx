import { styled, css } from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";

export const ButtonSkeleton = styled.div`
  height: ${() => clampBuilder(320, 1200, 2, 3.5)};
  width: ${() => clampBuilder(320, 1200, 5, 7.5)};
  border-radius: ${() => clampBuilder(320, 1200, 0.4, 1)};

  ${(props) =>
    props.center === "true" &&
    css`
      margin-inline: auto;
    `}

  ${(props) =>
    props.type === "other" &&
    css`
      margin-bottom: 2rem;
      height: ${() => clampBuilder(320, 1200, 2.5, 5)};
      width: ${() => clampBuilder(320, 1200, 5, 12.5)};
    `}
`;

// muhammawwal@005
