import styled from "styled-components";
import Table from "../../ui/Table";
import { useSelector } from "react-redux";
import { getCart, getChanges } from "./cartSlice";
import CartTableItem from "./CartTableITem";

const StyledCartContainer = styled.div`
  grid-column: 2 / -1;
  overflow: auto;

  position: relative;
`;

function CartTable() {
  const carts = useSelector(getCart);

  const changes = useSelector(getChanges);

  return (
    <StyledCartContainer>
      <Table column="0.3fr 0.8fr max-content 0.6fr 0.4fr" changes={changes}>
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
