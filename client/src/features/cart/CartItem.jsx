import { css, styled } from "styled-components";
import { Text } from "../category/Category";
import UpdateCartItem from "../../ui/UpdateCartItem";
import { formatCurrency } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getCurrentItemQuantityById } from "./cartSlice";
import { HiXMark } from "react-icons/hi2";
import { clampBuilder } from "../../styles/clampFunction";

export const CartItemContainer = styled.li`
  display: flex;
  column-gap: ${() => clampBuilder(320, 1200, 0.7, 1)};
  color: var(--color-dark);
  align-items: center;
`;

export const CartText = styled.span`
  color: var(--color-dark-3);

  font-weight: 400;
  font-size: ${() => clampBuilder(320, 1200, 1.2, 2)};
  margin-left: auto;
  padding-right: ${() => clampBuilder(320, 1200, 1.2, 2)};
`;

export const CartItemDescription = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: ${() => clampBuilder(320, 1200, 0.8, 1)};
`;

export const CartItemName = styled.p`
  margin-right: auto;
  margin-bottom: ${() => clampBuilder(320, 1200, -1.2, -2)};
  font-size: ${() => clampBuilder(320, 1200, 1.1, 2)};
  font-weight: 600;
`;

export const CartItemImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${() => clampBuilder(320, 1200, 3, 5)};
  width: ${() => clampBuilder(320, 1200, 3, 5)};

  ${(props) =>
    props.page === "checkout" &&
    css`
      height: ${() => clampBuilder(320, 1200, 2.5, 4)};
      width: ${() => clampBuilder(320, 1200, 2.5, 4)};
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
        <Text> {formatCurrency(price)} </Text>
      </CartItemDescription>

      {!page && (
        <>
          <UpdateCartItem currentQuantity={CurrentQuantity} id={_id} />

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
