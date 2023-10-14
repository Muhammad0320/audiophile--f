import { css, styled } from "styled-components";

const RadioInput = styled.input.attrs({ type: "radio" })`
  opacity: 0;

  &:checked + span::after {
    opacity: 1;
  }
`;

const StyledRadioButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -2.2rem;
  width: 2.5rem;
  height: 2.5rem;

  border: 2px solid var(--color-dark-2);

  ${(props) =>
    props.isChecked === "checked" &&
    css`
      border: 2px solid var(--color-primary);
    `}

  border-radius: 50%;

  &::after {
    content: "";
    height: 1.5rem;
    width: 1.5rem;
    background-color: var(--color-primary);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.2s;
  }
`;

const RadioLabelContainer = styled.label`
  display: flex;
  font-weight: 600;
  column-gap: 2rem;
  cursor: pointer;
  border: 2px solid var(--color-dark-2);
  border-radius: 1rem;
  padding: 1rem 0;
  width: 100%;
`;

function RadioButton({ label, checked, onChange, value, disabled }) {
  return (
    <RadioLabelContainer isChecked={checked ? "checked" : ""}>
      <RadioInput
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        value={value}
      />
      <StyledRadioButton />

      {label}
    </RadioLabelContainer>
  );
}

export default RadioButton;
