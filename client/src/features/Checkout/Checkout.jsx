import { styled } from "styled-components";

const StyledCheckout = styled.div`
  background-color: var(--color-white-2);
  margin: 10rem 0;
  border-radius: 1.2rem;
  padding: 3.5rem 4rem;
  display: flex;
  column-gap: 4rem;
`;

function Checkout({ children }) {
  return <StyledCheckout> {children} </StyledCheckout>;
}

export default Checkout;
