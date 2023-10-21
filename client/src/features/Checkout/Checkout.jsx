import { styled } from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";

const StyledCheckout = styled.div`
  background-color: var(--color-white-2);

  margin: ${() => clampBuilder(320, 1200, 7, 10)} 0;
  border-radius: 1.2rem;
  padding: ${() => clampBuilder(320, 1200, 1.8, 3.5)};
  ${() => clampBuilder(320, 1200, 2, 4)};

  display: grid;

  grid-template-columns: 1.5fr 1fr;

  column-gap: ${() => clampBuilder(320, 1200, 2.5, 4)};
`;

function Checkout({ children }) {
  return <StyledCheckout> {children} </StyledCheckout>;
}

export default Checkout;
