import styled from "styled-components";

const Or = styled.div`
  font-size: 1.6rem;

  color: var(--color-dark-2);
  display: grid;
  column-gap: 2rem;
  align-items: center;
  grid-template-columns: 1fr max-content 1fr;
  text-transform: uppercase;

  &::before,
  &::after {
    content: "";
    background-color: currentColor;
    display: block;
    height: 1px;
  }
`;

export default Or;
