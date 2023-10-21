import { css, styled } from "styled-components";
import { clampBuilder } from "../styles/clampFunction";

const StyledContainerLayout = styled.div`
  display: grid;

  grid-template-columns: minmax(8rem, 1fr) 80dvw minmax(8rem, 1fr);

  ${(props) =>
    props.page === "checkout" &&
    css`
      grid-template-columns: minmax(6rem, 8rem) 85dvw minmax(6rem, 8rem);
    `}

  @media (max-width: 920px) {
    grid-template-columns: minmax(${() => clampBuilder(320, 1200, 2, 4)}, 1fr) 95dvw minmax(
        ${() => clampBuilder(320, 1200, 2, 4)},
        1fr
      );
  }
`;

function ContainerLayout({ children, page }) {
  return (
    <StyledContainerLayout page={page}> {children} </StyledContainerLayout>
  );
}

export default ContainerLayout;
