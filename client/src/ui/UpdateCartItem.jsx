import { useDispatch } from "react-redux";
import { css, styled } from "styled-components";
import {
  addItemQuantity,
  removeItemQuantity,
} from "../features/cart/cartSlice";

const Container = styled.div`
  background-color: var(--color-white-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-dark);
  padding: var(--padding-tiny-2) var(--padding-small);
  column-gap: 3rem;

  ${(props) =>
    props.type === "cart" &&
    css`
      padding: var(--padding-tiny-3) var(--padding-tiny);
      column-gap: var(--padding-tiny-2);
    `}
`;

const UpdateSign = styled.button`
  background-color: transparent;

  border: none;
  font-size: 1.8rem;
  color: var(--color-dark);
  opacity: 0.7;
  transition: color 0.3s;

  &:hover {
    color: var(--color-primary);
  }
`;

function UpdateCartItem({ icons, currentQuantity, id, ...otherProps }) {
  const dispatch = useDispatch();

  const { reduce, add } = icons || { reduce: "-", add: "+" };

  return (
    <Container {...otherProps}>
      <div>
        <UpdateSign onClick={() => dispatch(removeItemQuantity(id))}>
          {" "}
          {reduce}
        </UpdateSign>
      </div>
      <span> {currentQuantity} </span>
      <UpdateSign onClick={() => dispatch(addItemQuantity(id))}>
        {" "}
        {add}{" "}
      </UpdateSign>
    </Container>
  );
}

export default UpdateCartItem;
