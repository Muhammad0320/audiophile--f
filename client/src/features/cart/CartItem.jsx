import { css, styled } from "styled-components";
import { Text } from "../category/Category";
import UpdateCartItem from "../../ui/UpdateCartItem";
import { formatCurrency } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getCurrentItemQuantityById } from "./cartSlice";
import { HiXMark } from "react-icons/hi2";

export const CartItemContainer = styled.li`
  display: flex;
  column-gap: 1rem;
  color: var(--color-dark);
  align-items: center;
`;

export const CartText = styled.span`
  color: var(--color-dark);
  opacity: 0.7;
  font-weight: 400;
  font-size: 2rem;
  margin-left: auto;
  padding-right: 2rem;
`;

export const CartItemDescription = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 1rem;
`;

export const CartItemName = styled.p`
  margin-right: auto;
  margin-bottom: -2rem;
  font-size: 2rem;
  font-weight: 600;
`;

export const CartItemImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 20%;

  ${(props) =>
    props.page === "checkout" &&
    css`
      height: 15%;
      width: 15%;
    `}
`;

const ButtonDelete = styled.button`
  font-size: 3rem;
  color: var(--color-dark);
  opacity: 0.8;
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
