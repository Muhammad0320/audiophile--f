import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getCart,
  getTotalCartPrice,
} from "../features/cart/cartSlice";
import SVG from "react-inlinesvg";

import {
  CartItemContainer,
  CartItemDescription,
  CartItemImageContainer,
  CartItemName,
  CartText,
} from "../features/cart/CartItem";
import { IconConfirmation } from "./Icons";
import { Text } from "../features/category/Category";
import { CartTextBold } from "../features/cart/Cart";
import { formatCurrency, grandTotalPrice } from "../utils/helper";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { clampBuilder } from "../styles/clampFunction";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70%;
  width: 70%;
  align-items: center;
  align-items: flex-start;
  background-color: var(--color-white);
  background-image: var(--color-gradient-dark);

  border-radius: 1.5rem;
  overflow: hidden;
  padding: ${() => clampBuilder(320, 1200, 3, 5)};
  ${() => clampBuilder(320, 1200, 1.8, 3)};
  box-shadow: var(--box-shadow-dark);
`;

const StyledIcon = styled.span`
  width: 100%;
`;

const ConfirmationText = styled.h2`
  font-weight: 600;
  font-size: ${() => clampBuilder(320, 1200, 2, 3)};
  text-transform: uppercase;
  color: var(--color-dark);
`;

const CartOverviewContainer = styled.div`
  display: grid;
  border-bottom: 1rem;
  box-shadow: var(--box-shadow-dark);
  grid-template-columns: 1.5fr 1fr;
  background-color: transparent;

  padding: ${() => clampBuilder(320, 1200, 1, 1.5)};
  border-radius: 1rem;

  & + button {
    margin-top: var(--margin-very-small);
    padding: ${() => clampBuilder(320, 1200, 1.3, 1.7)};
    align-self: stretch;
    text-align: center;
  }
`;

const CartPriceOverview = styled.div`
  grid-column: 2 / -1;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${() => clampBuilder(320, 1200, 1, 1.5)};
  padding: ${() => clampBuilder(320, 1200, 1.4, 2)};
  background-color: var(--color-dark-1);
`;

const CartOverview = styled.div`
  background-color: var(--color-white-2);
  padding: ${() => clampBuilder(320, 1200, 1.4, 2)};
  grid-column: 1 / 2;
`;

const OtherCartItem = styled.div`
  border-top: 1px solid var(--color-dark-3);
  /* opacity: 0.3; */
  text-align: center;
`;

const TextTotal = styled.span`
  color: var(--color-white-2);

  font-size: ${() => clampBuilder(320, 1200, 1.2, 2)};
  /* opacity: 0.8; */
  align-self: flex-start;
  margin-bottom: -2rem;
`;

function Confirmation() {
  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  const totalCartPrice = useSelector(getTotalCartPrice);

  let name, quantity, totalPrice, image;

  if (cart.length) {
    const {
      product: { name: prodName, image: prodImage },
      quantity: prodQuantity,
      totalPrice: productTotalPrice,
    } = cart?.at(0);

    name = prodName;
    image = prodImage;
    quantity = prodQuantity;

    totalPrice = productTotalPrice;
  }

  const OtherCartItemCount = cart.length - 1;

  const navigate = useNavigate();

  const handleClickHome = () => {
    dispatch(clearCart());

    navigate("/home");
  };

  return (
    <StyledContainer>
      <StyledIcon>
        <SVG src={IconConfirmation} />
      </StyledIcon>
      <ConfirmationText>
        Thank you <br /> for your order
      </ConfirmationText>
      <Text> You will receive an email confirmation shortly </Text>
      <CartOverviewContainer>
        <CartOverview>
          <CartItemContainer>
            <CartItemImageContainer>
              <img src={image} alt="Cart overviewImage" />
            </CartItemImageContainer>
            <CartItemDescription>
              <CartItemName> {name || `loading...`} </CartItemName>
              <Text> {formatCurrency(totalPrice)} </Text>
            </CartItemDescription>

            <CartText>{"X" + quantity || `loading...`} </CartText>
          </CartItemContainer>

          <OtherCartItem>
            <Text>
              {OtherCartItemCount > 0
                ? `and ${OtherCartItemCount} other item(s)`
                : "and no other item " || `loading...`}
            </Text>
          </OtherCartItem>
        </CartOverview>

        <CartPriceOverview>
          <TextTotal> Grand Total </TextTotal>

          <CartTextBold page="checkout">
            {" "}
            {formatCurrency(grandTotalPrice(+totalCartPrice)) ||
              `loading...`}{" "}
          </CartTextBold>
        </CartPriceOverview>
      </CartOverviewContainer>
      <Button onClick={() => handleClickHome()}> Back to Home </Button>
    </StyledContainer>
  );
}

export default Confirmation;
