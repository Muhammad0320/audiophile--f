import styled from "styled-components";
import Table from "../../ui/Table";
import { useSelector } from "react-redux";
import { getCart, getChanges } from "./cartSlice";
import CartTableItem from "./CartTableITem";
import { useViewport } from "../../context/ViewPort";
import { clampBuilder } from "../../styles/clampFunction";

const StyledCartContainer = styled.div`
  position: relative;

  height: 100%;
`;

function CartTable() {
  const carts = useSelector(getCart);

  const changes = useSelector(getChanges);

  const { viewportWidth } = useViewport();

  const otherColumnValue =
    viewportWidth >= 680
      ? " 0.8fr max-content 0.6fr 0.4fr "
      : " 0.9fr 0.4fr 0.4fr";

  return (
    <StyledCartContainer>
      <Table
        column={`${clampBuilder(320, 1200, 4, 8)} ${otherColumnValue}`}
        changes={changes}
        type="cart"
      >
        <Table.Body
          data={carts}
          render={(cart) => (
            <CartTableItem cart={cart} key={cart.product._id} />
          )}
        />
      </Table>
    </StyledCartContainer>
  );
}

export default CartTable;
