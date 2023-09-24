import { css, styled } from "styled-components";

const StyledContent = styled.div`
  grid-column: 2 / 3;

  /* ${(props) =>
    props.page === "checkout" &&
    css`
      background-color: var(--color-white);
      margin: 10rem 0;
      border-radius: 1.2rem;
      padding: 3.5rem 4rem;
    `} */
`;

function ContainerContent({ children, page }) {
  return <StyledContent page={page}> {children} </StyledContent>;
}

export default ContainerContent;
