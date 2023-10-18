import { css, styled } from "styled-components";
import { clampBuilder } from "../styles/clampFunction";

const StyledContainerLayout = styled.div`
  display: grid;

  ${(props) =>
    props.page === "checkout" &&
    css`
      background-color: var(--color-white-2);
    `}
  grid-template-columns: 


    minmax( 8rem, 1fr) 80dvw minmax( 8rem, 1fr);

  @media (max-width: 920px) {
    grid-template-columns: minmax(${() => clampBuilder(320, 1200, 1, 4)}, 1fr) 95dvw minmax(
        ${() => clampBuilder(320, 1200, 1, 4)},
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
