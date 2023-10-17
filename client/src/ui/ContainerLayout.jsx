import { css, styled } from "styled-components";

const StyledContainerLayout = styled.div`
  display: grid;

  ${(props) =>
    props.page === "checkout" &&
    css`
      background-color: var(--color-white-2);
    `}
  grid-template-columns: minmax(8rem, 1fr) 80dvw minmax(8rem, 1fr);

  @media (max-width: 700px) {
    max-width: 100%;
  }
`;

function ContainerLayout({ children, page }) {
  return (
    <StyledContainerLayout page={page}> {children} </StyledContainerLayout>
  );
}

export default ContainerLayout;
