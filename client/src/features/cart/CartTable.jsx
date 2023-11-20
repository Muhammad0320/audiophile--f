import Table from "../../ui/Table";
import Button from "../../ui/Button";
import styled from "styled-components";
import CartTableItem from "./CartTableITem";
import { useNavigate } from "react-router-dom";
import SpinnerMini from "../../ui/SpinnerMini";
import { useSendBulkData } from "./useSendBulkData";
import { useViewport } from "../../context/ViewPort";
import { useDispatch, useSelector } from "react-redux";
import { clampBuilder } from "../../styles/clampFunction";
import { clearChanges, getCart, getChanges } from "./cartSlice";

const StyledCartContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;

  & > button {
    margin-top: ${() => clampBuilder(320, 1200, 1.2, 2.5)};
    position: absolute;
    right: 0;
  }
`;

function CartTable() {
  const carts = useSelector(getCart);

  const changes = useSelector(getChanges);

  const { viewportWidth } = useViewport();

  const otherColumnValue =
    viewportWidth >= 680
      ? " 0.8fr max-content 0.6fr 0.4fr "
      : " 0.9fr 0.4fr 0.4fr";

  const { sendBulkdata, isSendingBulkData } = useSendBulkData();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // send bulk and navigate to checkout

  const handleSendBulk = () => {
    navigate("/checkout");

    if (!changes.length) return;

    sendBulkdata(
      { changes },
      {
        onSuccess: () => {
          dispatch(clearChanges);
        },
      }
    );
  };

  return (
    <StyledCartContainer>
      <Table column={`${clampBuilder(320, 1200, 4, 8)} ${otherColumnValue}`}>
        <Table.Body
          data={carts}
          resource="cart item"
          render={(cart) => (
            <CartTableItem cart={cart} key={cart.product._id} />
          )}
        />
      </Table>

      {carts.length ? (
        changes.length ? (
          <Button
            onClick={handleSendBulk}
            withspinner={isSendingBulkData ? "true" : ""}
            disabled={isSendingBulkData}
          >
            {isSendingBulkData ? (
              <>
                {" "}
                <SpinnerMini /> <span> saving cart... </span>{" "}
              </>
            ) : (
              <span> Save & Checkout </span>
            )}
          </Button>
        ) : (
          <Button onClick={handleSendBulk}> Move to Checkout </Button>
        )
      ) : null}
    </StyledCartContainer>
  );
}

export default CartTable;
