import { css, styled } from "styled-components";
import SmallButton from "../../ui/SmallButton";

import { Text } from "../category/Category";

import { formatCurrency, grandTotalPrice } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "./cartSlice";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "../../ui/EmptyCart";
import { useNavigate } from "react-router-dom";
import { clampBuilder } from "../../styles/clampFunction";
import { useClickOutside } from "../../hooks/useClickOutside";

const StyledCart = styled.div`
  align-self: flex-start;

  display: flex;
  border-radius: 1rem;
  /* width: 40%; */
  background-color: var(--color-white);

  background-image: var(--color-gradient-dark);

  flex-flow: column;

  color: var(--color-dark);

  padding: ${() => clampBuilder(320, 1200, 1.4, 2.5)};

  box-shadow: var(--box-shadow-light);

  &:has(button) {
    justify-self: flex-end;
  }
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${() => clampBuilder(320, 1200, 1.3, 2)};

  overflow-y: auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartTextBold = styled.p`
  font-size: ${() => clampBuilder(320, 1200, 1.2, 2)};
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: 920px) {
    font-weight: 500;
  }

  @media (max-width: 450px) {
    font-size: ${() => clampBuilder(320, 450, 1.2, 1.5)};
  }

  ${(props) =>
    props.page === "confirm" &&
    css`
      color: var(--color-white);
    `}
`;

function Cart({ page, onClose }) {
  const carts = useSelector(getCart);

  const dispatch = useDispatch();

  const totalCartPrice = useSelector(getTotalCartPrice);

  const navigate = useNavigate();

  const shippingFee = 50;

  const vat = 0.2 * +totalCartPrice;

  const { ref } = useClickOutside(onClose);

  if (!carts.length)
    return (
      <StyledCart>
        <EmptyCart />;
      </StyledCart>
    );

  return (
    <StyledCart ref={ref}>
      <Container>
        <CartTextBold>
          {!page ? `Cart (${carts.length})` : "Summary"}
        </CartTextBold>

        {!page && (
          <SmallButton onClick={() => dispatch(clearCart())} type="cart">
            {" "}
            Remove All{" "}
          </SmallButton>
        )}
      </Container>

      <CartContainer>
        {carts.map((cart) => (
          <CartItem key={cart.product._id} cart={cart} page={page} />
        ))}
      </CartContainer>

      <Container>
        <Text> TOTAL </Text>

        <CartTextBold> {formatCurrency(totalCartPrice)} </CartTextBold>
      </Container>

      {page && (
        <>
          <Container>
            <Text style={{ fontSize: "1.2rem" }}> SHIPPING FEES </Text>

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
        <Button onClick={() => navigate("/my-cart")}> Go to cart </Button>
      )}
    </StyledCart>
  );
}

export default Cart;
