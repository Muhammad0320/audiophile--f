import { Text } from "./Text";
import Button from "./Button";
import SVG from "react-inlinesvg";
import { IconConfirmation } from "./Icons";
import { styled } from "styled-components";
import { CartTextBold } from "../features/cart/Cart";
import { clampBuilder } from "../styles/clampFunction";
import { useEffectOnce } from "../hooks/useeffectOnce";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { formatCurrency, grandTotalPrice } from "../utils/helper";
import { useDeleteCartOnCheckout } from "../features/cart/useDeleteCartOnCheckout";

import {
  clearCart,
  getCart,
  getTotalCartPrice,
} from "../features/cart/cartSlice";

import {
  CartItemContainer,
  CartItemDescription,
  CartItemImageContainer,
  CartItemName,
  CartText,
} from "../features/cart/CartItem";

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: 0.4fr 0.4fr ${() => clampBuilder(320, 1200, 3, 4)} max-content 5rem;
  row-gap: ${() => clampBuilder(320, 1200, 1.2, 2)};
  justify-content: center;
  /* height: 72%; */
  width: 72%;

  background-color: var(--color-white);
  background-image: var(--color-gradient-dark);

  border-radius: 1.5rem;
  overflow: hidden;
  padding-block: ${() => clampBuilder(320, 1200, 1.5, 3)};

  padding-inline: ${() => clampBuilder(320, 1200, 1.8, 2.5)};

  box-shadow: var(--box-shadow-dark-2);

  @media (max-width: 500px) {
    grid-template-rows: 0.4fr 0.4fr ${() => clampBuilder(320, 1200, 3, 4)} 1.2fr 4rem;
  }
`;

const StyledIcon = styled.span`
  width: ${() => clampBuilder(320, 1200, 1.2, 2)};
`;

const ConfirmationText = styled.h3`
  font-weight: 600;
  margin-block: 0;
  font-size: ${() => clampBuilder(320, 1200, 2, 3)};
  align-self: center;
  text-transform: uppercase;
  color: var(--color-dark);
`;

const CartOverviewContainer = styled.div`
  display: grid;
  border-bottom: 1rem;
  box-shadow: var(--box-shadow-dark);
  grid-template-columns: 1.5fr 1fr;
  background-color: transparent;

  border-radius: 5px;
  overflow: hidden;

  & + button {
    margin-top: 2rem;

    align-self: center;
  }

  @media (max-width: 500px) {
    grid-template-columns: none;

    grid-template-rows: 1.5fr 1fr;
  }
`;

const CartPriceOverview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${() => clampBuilder(320, 1200, 2, 2.5)};
  padding: ${() => clampBuilder(320, 1200, 1.4, 2)};
  background-color: var(--color-dark-1);

  @media (max-width: 500px) {
    padding-block: ${() => clampBuilder(320, 500, 1.3, 2)};
    padding-inline: ${() => clampBuilder(320, 500, 2, 3)};
  }
`;

const CartOverview = styled.div`
  background-color: var(--color-white-2);
  background-image: var(--color-gradient-dark-muted);
  padding: ${() => clampBuilder(320, 1200, 1.4, 2)};

  @media (max-width: 500px) {
    padding-block-end: 0;
  }
`;

const OtherCartItem = styled.div`
  border-top: 1px solid var(--color-dark-2);
  color: var(--color-dark-3);
  font-weight: 500;
  text-align: center;
`;

const TextTotal = styled.span`
  color: var(--color-white-3);

  font-size: ${() => clampBuilder(320, 1200, 1.2, 2)};
  align-self: flex-start;
  margin-bottom: -2rem;
`;

function Confirmation() {
  const cart = useSelector(getCart);

  const [searchParams] = useSearchParams();

  const { deleteCart } = useDeleteCartOnCheckout();

  const dispatch = useDispatch();

  const totalCartPrice = useSelector(getTotalCartPrice);

  let name, quantity, totalPrice, image;

  if (cart.length) {
    const {
      product: { name: prodName, image: prodImage },
      quantity: prodQuantity,
      totalPrice: productTotalPrice,
    } = cart?.at(0);

    name = prodName.split(" ").slice(0, -1).join(" ");
    image = prodImage;
    quantity = prodQuantity;

    totalPrice = productTotalPrice;
  }

  const OtherCartItemCount = cart.length - 1;

  const navigate = useNavigate();

  const alert = searchParams.get("alert");

  useEffectOnce(() => {
    // searchParams.get("alert") && deleteCart();

    if (alert === "ok") {
      deleteCart();
    }
  });

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
      <Text style={{ alignSelf: "center" }}>
        {" "}
        You will receive an email confirmation shortly{" "}
      </Text>
      <CartOverviewContainer>
        <CartOverview>
          <CartItemContainer>
            <CartItemImageContainer>
              <img src={image} alt="Cart overviewImage" />
            </CartItemImageContainer>
            <CartItemDescription>
              <CartItemName style={{ width: "100%" }}>
                {" "}
                {name || `loading...`}{" "}
              </CartItemName>
              <Text
                style={{
                  marginBlockStart: ` ${() =>
                    clampBuilder(320, 1200, 0.5, 1.2)}`,
                }}
              >
                {" "}
                {formatCurrency(totalPrice)}{" "}
              </Text>
            </CartItemDescription>

            <CartText style={{ gridColumn: "3 / -1" }}>
              {"X" + quantity || `loading...`}{" "}
            </CartText>
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
      <Button onClick={handleClickHome}> Back to Home </Button>
    </StyledContainer>
  );
}

export default Confirmation;
