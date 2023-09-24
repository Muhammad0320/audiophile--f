import { css, styled } from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 2rem;

  

  ${(props) =>
    props.position === "left" &&
    css`
      grid-column: 1 / 2;
    `}

  ${(props) =>
    props.position === "right" &&
    css`
      grid-column: 2 / -1;
    `}

    ${(props) =>
    props.position === "both" &&
    css`
      grid-column: 1 / -1;
    `}

    &:has(btn) btn {
    align-self: flex-end;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const Label = styled.label`
  color: var(--color-dark);
  font-size: 1.5rem;
  font-weight: 500;

  ${(props) =>
    props.type === "error" &&
    css`
      color: red;
    `}
`;

const Error = styled.span`
  color: red;
  font-size: 1.3rem;
  font-weight: 400;
`;

function FormRow({ children, error, label, position }) {
  return (
    <StyledFormRow position={position}>
      {label && (
        <LabelContainer>
          {label && <Label htmlFor={children?.props?.id}> {label} </Label>}
          {label && error && <Label type="error"> </Label>}
          {error && <Error> {error} </Error>}
        </LabelContainer>
      )}

      {children}
    </StyledFormRow>
  );
}

export default FormRow;
