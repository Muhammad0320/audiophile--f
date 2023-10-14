import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../features/cart/cartSlice";
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
import { grandTotalPrice } from "../utils/constant";
import { formatCurrency } from "../utils/helper";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: flex-start;
  background-color: var(--color-white-vivid);
  border-radius: 2rem;
  border-radius: 1.5rem;
  padding: 5rem 3rem;

  box-shadow: var(--box-shadow-dark);
`;

const StyledIcon = styled.span`
  width: 100%;
`;

const ConfirmationText = styled.h2`
  font-weight: 600;
  font-size: var(--font-medium);
  text-transform: uppercase;
  color: var(--color-dark);
`;

const CartOverviewContainer = styled.div`
  display: grid;
  border-bottom: 1rem;

  grid-template-columns: 1.5fr 1fr;
  background-color: transparent;

  padding: 1.5rem;
  border-radius: 1.5rem;

  & + button {
    margin-top: 3.5rem;
    padding: 1.7rem;
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
  row-gap: 1.5rem;
  padding: 2.5rem;
  background-color: var(--color-dark-1);
`;

const CartOverview = styled.div`
  background-color: var(--color-white-2);
  padding: 2.5rem;
  grid-column: 1 / 2;
`;

const OtherCartItem = styled.div`
  border-top: 1px solid var(--color-dark);
  opacity: 0.3;
  text-align: center;
`;

const TextTotal = styled.span`
  color: var(--color-white-2);

  font-size: 2rem;
  opacity: 0.8;
  align-self: flex-start;
  margin-bottom: -2rem;
`;

function Confirmation() {
  const cart = useSelector(getCart);

  console.log(cart);

  const totalCartPrice = useSelector(getTotalCartPrice);

  const {
    product: { name, image },
    quantity,
    totalPrice,
  } = cart?.at(0);

  const OtherCartItemCount = cart.length - 1;

  const navigate = useNavigate();

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
              <CartItemName> {name} </CartItemName>
              <Text> {formatCurrency(totalPrice)} </Text>
            </CartItemDescription>

            <CartText>{"X" + quantity} </CartText>
          </CartItemContainer>

          <OtherCartItem>
            <Text>
              {OtherCartItemCount > 0
                ? `and ${OtherCartItemCount} other item(s)`
                : "and no other item "}
            </Text>
          </OtherCartItem>
        </CartOverview>

        <CartPriceOverview>
          <TextTotal> Grand Total </TextTotal>

          <CartTextBold page="checkout">
            {" "}
            {formatCurrency(grandTotalPrice(+totalCartPrice))}{" "}
          </CartTextBold>
        </CartPriceOverview>
      </CartOverviewContainer>
      <Button onClick={() => navigate("/home")}> Back to Home </Button>
    </StyledContainer>
  );
}

export default Confirmation;
