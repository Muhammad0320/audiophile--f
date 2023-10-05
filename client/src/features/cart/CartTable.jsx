import styled from "styled-components";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import CartTableItem from "./CartTableITem";

const StyledCartContainer = styled.div`
  grid-column: 2 / -1;
  overflow: auto;
  margin: 0 3rem;
`;

function CartTable() {
  const carts = useSelector(getCart);

  const isLoading = false;

  return (
    <StyledCartContainer>
      <Table column="0.8fr max-content 1fr 1fr 0.8fr">
        <Table.Header>
          <div></div>
          <div>Name</div>
          <div>price </div>
          <div>update cart</div>
          <div></div>
        </Table.Header>

        {isLoading ? (
          <Spinner />
        ) : (
          <Table.Body
            data={carts}
            render={(cart, i) => <CartTableItem key={i} cart={cart} />}
          />
        )}
      </Table>
    </StyledCartContainer>
  );
}

export default CartTable;
