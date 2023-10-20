import { css, styled } from "styled-components";

import UpdateCartItem from "../../ui/UpdateCartItem";
import { formatCurrency } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getCurrentItemQuantityById } from "./cartSlice";
import { HiXMark } from "react-icons/hi2";
import { clampBuilder } from "../../styles/clampFunction";

export const CartItemContainer = styled.li`
  display: grid;
  grid-template-columns: ${clampBuilder(320, 1200, 5, 7)} 1.2fr 1fr 0.8fr;
  color: var(--color-dark);
  align-items: center;
`;

export const CartText = styled.span`
  color: var(--color-dark-3);

  font-weight: 400;
  font-size: ${() => clampBuilder(450, 1200, 1.5, 2)};
  margin-left: auto;
  padding-right: ${() => clampBuilder(450, 1200, 1.2, 2)};

  @media (max-width: 450px) {
    font-size: ${() => clampBuilder(320, 450, 1, 1.5)};
  }
`;

export const CartItemDescription = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: ${() => clampBuilder(320, 1200, 0.8, 1)};
`;

export const CartItemName = styled.p`
  margin-right: auto;
  margin-bottom: ${() => clampBuilder(450, 1200, -0.3, -0.8)};

  font-size: ${() => clampBuilder(450, 1200, 1.5, 2)};
  font-weight: 600;

  @media (max-width: 450px) {
    font-size: ${() => clampBuilder(320, 450, 1, 1.5)};
  }
`;

export const CartItemImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.page === "checkout" &&
    css`
      height: ${() => clampBuilder(320, 1200, 3, 5)};
      width: ${() => clampBuilder(320, 1200, 3, 5)};
    `}
`;

const ButtonDelete = styled.button`
  font-size: ${() => clampBuilder(320, 1200, 1.2, 3)};
  color: var(--color-dark-3);

  border: none;
  background-color: transparent;
  transition: color 0.3s;

  margin-left: auto;

  &:hover {
    color: var(--color-primary);
  }
`;

const CartPrice = styled.span`
  font-size: ${() => clampBuilder(450, 1200, 1.2, 2)};

  font-style: italic;

  @media (max-width: 450px) {
    font-size: ${() => clampBuilder(320, 450, 1, 1.2)};
  }
`;

function CartItem({ cart, page }) {
  const { product, quantity } = cart;

  const { image, price, name, _id } = product;

  const dispatch = useDispatch();

  const cartName = name.split(" ")[0];

  const CurrentQuantity = useSelector(getCurrentItemQuantityById(_id));

  return (
    <CartItemContainer>
      <CartItemImageContainer>
        <img src={image} alt="CartImage" />
      </CartItemImageContainer>

      <CartItemDescription>
        <CartItemName>{cartName}</CartItemName>
        <CartPrice> {formatCurrency(price)} </CartPrice>
      </CartItemDescription>

      {!page && (
        <>
          <UpdateCartItem
            type="cart"
            currentQuantity={CurrentQuantity}
            id={_id}
          />

          <ButtonDelete onClick={() => dispatch(deleteItem(_id))}>
            <HiXMark />
          </ButtonDelete>
        </>
      )}

      {page && <CartText> {"X" + quantity} </CartText>}
    </CartItemContainer>
  );
}

export default CartItem;
