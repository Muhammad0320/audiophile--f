import styled from "styled-components";
import Button from "./Button";
import SpinnerMini from "./SpinnerMini";

const StyledConfirm = styled.div`
  background-color: var(--color-white);

  border-radius: 1.2rem;

  box-shadow: var(--box-shadow-light);

  padding: 2rem 2.6rem;
`;

const StyledText = styled.p`
  font-size: 2.2rem;

  font-weight: 500;

  color: var(--color-dark);
`;

const ButtonContainer = styled.div`
  display: flex;

  justify-content: flex-end;
  align-items: center;

  column-gap: 2rem;
`;

function DeleteConfirm({ onClose, OnConfirm, resource, isDeleting }) {
  return (
    <StyledConfirm>
      <StyledText>
        {`Are sure you want to delete this  ${resource}  because this action cannot be undone  `}
      </StyledText>

      <ButtonContainer>
        <Button variation="transparent" onClick={onClose}>
          {" "}
          Cancel{" "}
        </Button>
        <Button
          variation="danger"
          disabled={isDeleting}
          withspinner={isDeleting ? "true" : ""}
          onClick={OnConfirm}
        >
          {isDeleting ? (
            <>
              {" "}
              <SpinnerMini /> <span> Deleting... </span>{" "}
            </>
          ) : (
            <span> Delete </span>
          )}
        </Button>
      </ButtonContainer>
    </StyledConfirm>
  );
}

export default DeleteConfirm;
