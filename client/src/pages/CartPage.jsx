import styled from "styled-components";
import CartTable from "../features/cart/CartTable";
import { clampBuilder } from "../styles/clampFunction";

const CartContainer = styled.div`
  height: 100%;
  padding-block: ${() => clampBuilder(320, 1200, 1.6, 3)};
  padding-inline: ${() => clampBuilder(320, 1200, 2, 5)};
`;

function CartPage() {
  return (
    <CartContainer>
      <CartTable />
    </CartContainer>
  );
}

export default CartPage;
