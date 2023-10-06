import { styled } from "styled-components";

const StyledContent = styled.div`
  grid-column: 2 / 3;
`;

function ContainerContent({ children, page }) {
  return <StyledContent page={page}> {children} </StyledContent>;
}

export default ContainerContent;
