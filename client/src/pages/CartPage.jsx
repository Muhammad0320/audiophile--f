import styled from "styled-components";
import CartTable from "../features/cart/CartTable";

const CartContainer = styled.div`
  height: 100%;
`;

function CartPage() {
  return (
    <CartContainer>
      <CartTable />
    </CartContainer>
  );
}

export default CartPage;
