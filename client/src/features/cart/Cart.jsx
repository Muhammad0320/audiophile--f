import CartItem from "./CartItem";
import { Text } from "../../ui/Text";
import Button from "../../ui/Button";
import EmptyCart from "../../ui/EmptyCart";
import SmallButton from "../../ui/SmallButton";
import { useNavigate } from "react-router-dom";
import { css, styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { SHIPPING_FEE, VAT } from "../../utils/constant";
import { clampBuilder } from "../../styles/clampFunction";
import { useClickOutside } from "../../hooks/useClickOutside";
import { clearCart, getCart, getTotalCartPrice } from "./cartSlice";
import { formatCurrency, grandTotalPrice } from "../../utils/helper";

const StyledCart = styled.div`
  align-self: flex-start;
  row-gap: ${() => clampBuilder(320, 1200, 1.2, 2)};

  display: flex;
  border-radius: 1rem;

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

  ${(props) =>
    props.type === "total" &&
    css`
      color: var(--color-primary);
      font-weight: 700;
    `}
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

  const vat = VAT * +totalCartPrice;

  const { ref } = useClickOutside(onClose);

  if (!carts.length)
    return (
      <StyledCart>
        <EmptyCart />
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
        <Text
          style={{
            fontSize: ` ${clampBuilder(320, 1200, 1, 1.6)}`,
          }}
        >
          {" "}
          TOTAL{" "}
        </Text>

        <CartTextBold> {formatCurrency(totalCartPrice)} </CartTextBold>
      </Container>

      {page && (
        <>
          <Container>
            <Text
              style={{
                fontSize: ` ${clampBuilder(320, 1200, 1, 1.6)}`,
              }}
            >
              {" "}
              SHIPPING FEES{" "}
            </Text>

            <CartTextBold> {formatCurrency(SHIPPING_FEE)} </CartTextBold>
          </Container>

          <Container>
            <Text style={{ fontSize: ` ${clampBuilder(320, 1200, 1, 1.6)}` }}>
              {" "}
              {"VAT (INCLUDED)"}{" "}
            </Text>

            <CartTextBold> {formatCurrency(vat)} </CartTextBold>
          </Container>

          <Container type="total">
            <Text style={{ fontSize: ` ${clampBuilder(320, 1200, 1, 1.6)}` }}>
              {" "}
              GRAND TOTAL{" "}
            </Text>

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
