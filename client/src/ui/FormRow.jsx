import { css, styled } from "styled-components";
import { clampBuilder } from "../styles/clampFunction";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: ${() => clampBuilder(320, 1200, 1.5, 3)};

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
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const Label = styled.label`
  color: var(--color-dark);
  font-size: ${() => clampBuilder(320, 1200, 1.2, 1.8)};
  font-weight: 500;

  ${(props) =>
    props.type === "error" &&
    css`
      color: red;
    `}

  ${(props) =>
    props.account === "true" &&
    css`
      font-weight: 600;
      font-size: 2rem;
    `}
`;

const Error = styled.span`
  color: red;
  font-size: ${() => clampBuilder(320, 1200, 0.7, 1.3)};
  font-weight: 400;
`;

function FormRow({ children, error, label, position, account }) {
  return (
    <StyledFormRow position={position}>
      {label && (
        <LabelContainer>
          {label && (
            <Label
              htmlFor={children?.props?.id}
              account={account ? "true" : ""}
            >
              {" "}
              {label}{" "}
            </Label>
          )}
          {label && error && <Label type="error"> </Label>}
          {error && <Error> {error} </Error>}
        </LabelContainer>
      )}

      {children}
    </StyledFormRow>
  );
}

export default FormRow;
