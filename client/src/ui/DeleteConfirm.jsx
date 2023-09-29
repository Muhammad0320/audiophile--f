import styled from "styled-components";
import Button from "./Button";

const StyledConfirm = styled.div`
  background-color: var(--color-white);

  border-radius: 1.2rem;

  box-shadow: var(--box-shadow-light);

  width: 40%;

  padding: 2rem 2.6rem;
`;

const StyledText = styled.p`
  font-size: 1.4rem;

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

function DeleteConfirm({ onClose, OnConfirm, resource }) {
  return (
    <StyledConfirm>
      <StyledText>
        {`Are sure you wamt to delete this <span> ${resource} </span>  because this action cannot ne undone  `}
      </StyledText>

      <ButtonContainer>
        <Button variation="transparent" onClick={onClose}>
          {" "}
          Cancel{" "}
        </Button>
        <Button variation="danger" onClick={OnConfirm}>
          {" "}
          Delete{" "}
        </Button>
      </ButtonContainer>
    </StyledConfirm>
  );
}

export default DeleteConfirm;
