import styled from "styled-components";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import { useSelector } from "react-redux";
import { getCart, getChanges } from "./cartSlice";
import CartTableItem from "./CartTableITem";
import Button from "../../ui/Button";
import { sendBulkItemToCart } from "../../service/apiCart";

const StyledCartContainer = styled.div`
  grid-column: 2 / -1;
  overflow: auto;
  /* margin: 0 3rem; */

  position: relative;
`;

function CartTable() {
  const carts = useSelector(getCart);

  const changes = useSelector(getChanges);

  const isLoading = false;

  const handleClick = () => {
    sendBulkItemToCart({ changes });
  };

  return (
    <StyledCartContainer>
      <Table column="0.5fr 0.8fr max-content 0.6fr 0.4fr">
        <Table.Header>
          <div></div>
          <div>Name</div>
          <div>price </div>
          <div>update </div>
          <div></div>
        </Table.Header>

        {isLoading ? (
          <Spinner />
        ) : (
          <Table.Body
            data={carts}
            render={(cart) => (
              <CartTableItem cart={cart} key={cart.product._id} />
            )}
          />
        )}
      </Table>
      {changes.length && (
        <Button onClick={handleClick}> Save and checkout </Button>
      )}
    </StyledCartContainer>
  );
}

export default CartTable;
