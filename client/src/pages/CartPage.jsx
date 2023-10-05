import styled from "styled-components";
import CartTable from "../features/cart/CartTable";

const CartContainer = styled.div`
  grid-column: 2 / -1;
  overflow: auto;
`;

function CartPage() {
  return (
    <CartContainer>
      <CartTable />
    </CartContainer>
  );
}

export default CartPage;
