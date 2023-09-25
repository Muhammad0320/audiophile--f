import styled from "styled-components";

const StyledAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const ImageContainer = styled.img`
  display: block;
  height: 4rem;
  width: 4rem;

  border-radius: 50%;
  box-sizing: content-box;
  transition: border 0.3s ease-in;

  &:hover {
    border: 2px solid var(--color-primary);
  }
`;

function Avatar({ user }) {
  console.log(user);

  return (
    <StyledAvatar>
      <ImageContainer />
      <span> Muhammad </span>
    </StyledAvatar>
  );
}

export default Avatar;
