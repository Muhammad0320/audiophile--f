import { css, styled } from "styled-components";
import SmallButton from "../../ui/SmallButton";

import { Text } from "../category/Category";

import { formatCurrency } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getChanges, getTotalCartPrice } from "./cartSlice";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "../../ui/EmptyCart";
import { useNavigate } from "react-router-dom";
import { grandTotalPrice } from "../../utils/constant";

import { useSendBulkData } from "./useSendBulkData";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledCart = styled.div`
  align-self: flex-start;

  display: flex;

  border-radius: 1rem;
  width: 40%;
  background-color: var(--color-white);
  flex-flow: column;
  max-height: 100%;
  color: var(--color-dark);

  padding: 2.5rem;

  &:has(button) {
    justify-self: flex-end;
  }
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  overflow: auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartTextBold = styled.p`
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;

  ${(props) =>
    props.page === "confirm" &&
    css`
      color: var(--color-white);
    `}
`;

function Cart({ page }) {
  const carts = useSelector(getCart);

  const changes = useSelector(getChanges);

  const { sendBulkdata, isSendingBulkData } = useSendBulkData();

  const dispatch = useDispatch();

  const totalCartPrice = useSelector(getTotalCartPrice);

  const navigate = useNavigate();

  const shippingFee = 50;

  const vat = 0.2 * +totalCartPrice;

  const handleSendBulk = () => {
    sendBulkdata({ changes });

    navigate("/checkout");
  };

  if (!carts.length)
    return (
      <StyledCart>
        <EmptyCart />;
      </StyledCart>
    );

  return (
    <StyledCart>
      <Container>
        <CartTextBold>
          {!page ? `Cart (${carts.length})` : "Summary"}
        </CartTextBold>

        {!page && (
          <SmallButton onClick={() => dispatch(clearCart())}>
            {" "}
            Remove All{" "}
          </SmallButton>
        )}
      </Container>

      <CartContainer>
        {carts.map((cart) => (
          <CartItem key={cart._id} cart={cart} page={page} />
        ))}
      </CartContainer>

      <Container>
        <Text> TOTAL </Text>

        <CartTextBold> {formatCurrency(totalCartPrice)} </CartTextBold>
      </Container>

      {page && (
        <>
          <Container>
            <Text> SHIPPING FEES </Text>

            <CartTextBold> {formatCurrency(shippingFee)} </CartTextBold>
          </Container>

          <Container>
            <Text> {"VAT (INCLUDED)"} </Text>

            <CartTextBold> {formatCurrency(vat)} </CartTextBold>
          </Container>

          <Container>
            <Text> GRAND TOTAL </Text>

            <CartTextBold>
              {" "}
              {formatCurrency(grandTotalPrice(+totalCartPrice))}{" "}
            </CartTextBold>
          </Container>
        </>
      )}

      {!page && (
        <Button
          onClick={() => handleSendBulk()}
          withspinner={isSendingBulkData ? "true" : ""}
          disabled={isSendingBulkData}
        >
          {isSendingBulkData ? (
            <>
              {" "}
              <SpinnerMini /> <span> saving cart data ... </span>{" "}
            </>
          ) : (
            <span> Save cart </span>
          )}
        </Button>
      )}
    </StyledCart>
  );
}

export default Cart;
