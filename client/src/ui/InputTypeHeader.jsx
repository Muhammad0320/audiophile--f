import { styled } from "styled-components";

const StyledHeader = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--color-primary);
  text-transform: uppercase;
  text-align: start;
  margin: 2rem 0;
  letter-spacing: 2px;
`;

function InputTypeHeader({ children }) {
  return <StyledHeader> {children} </StyledHeader>;
}

export default InputTypeHeader;
