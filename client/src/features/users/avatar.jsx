import styled from "styled-components";

const StyledAvatar = styled.div`
  color: var(--color-white);
  font-size: 1.5rem;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function Avatar() {
  return <StyledAvatar></StyledAvatar>;
}

export default Avatar;
