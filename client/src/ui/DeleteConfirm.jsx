import styled from "styled-components";

const StyledConfirm = styled.p`
  background-color: var(--color-white);

  border-radius: 1.2rem;

  box-shadow: var(--box-shadow-light);

  font-size: 1.4rem;

  width: 40%;

  padding: 2rem 2.6rem;

  color: var(--color-black);

  span {
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;

  justify-content: flex-end;
  align-items: center;

  column-gap: 2rem;
`;

function DeleteConfirm() {
  return <div></div>;
}

export default DeleteConfirm;
