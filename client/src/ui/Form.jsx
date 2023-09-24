import { styled } from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;

  background-color: var(--color-white);
  color: var(--color-dark);
`;

function Form({ children, onSubmit }) {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
}

export default Form;
