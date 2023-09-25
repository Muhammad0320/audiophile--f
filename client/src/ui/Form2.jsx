import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;

  flex-flow: column;

  row-gap: 2rem;

  background-color: transparent;

  color: var(--color-dark);
`;

function Form2({ onSubmit, children }) {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
}

export default Form2;
