import styled from "styled-components";
import Table from "../../ui/Table";
import { useSelector } from "react-redux";
import { getCart, getChanges } from "./cartSlice";
import CartTableItem from "./CartTableITem";

const StyledCartContainer = styled.div`
  position: relative;

  height: 100%;

  border: 1px solid red;
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
