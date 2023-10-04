import styled from "styled-components";

const StyledReviewCard = styled.div`
  display: grid;

  grid-auto-flow: column;

  grid-auto-columns: 21%;

  overflow-x: auto;
`;

const StyledCard = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;

  row-gap: 2rem;
`;

const AvatarContainer = styled.div`
  display: flex;

  justify-content: center;

  column-gap: 2rem;
`;
