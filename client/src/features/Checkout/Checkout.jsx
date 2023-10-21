import { styled } from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";

const StyledCheckout = styled.div`
  margin: ${() => clampBuilder(320, 1200, 7, 10)} 0;
  border-radius: 1.2rem;

  display: grid;

  grid-template-columns: 1.5fr 1fr;
  column-gap: ${() => clampBuilder(320, 1200, 2.5, 4)};

  @media (max-width: 900px) {
    grid-template-columns: none;
    row-gap: ${() => clampBuilder(320, 900, 4.5, 6)};

    grid-template-row: 2fr 1fr;
  }
`;

function Checkout({ children }) {
  return <StyledCheckout> {children} </StyledCheckout>;
}

export default Checkout;
