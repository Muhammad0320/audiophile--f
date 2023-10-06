import { useDispatch } from "react-redux";
import { css, styled } from "styled-components";
import {
  addItemQuantity,
  removeItemQuantity,
} from "../features/cart/cartSlice";

const Container = styled.section`
  background-color: var(--color-white-2);
  padding: 1.2rem 2rem;
  column-gap: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-dark);

  ${(props) =>
    props.type === "cart" &&
    css`
      padding: 0.8rem 1.2rem;
      column-gap: 1.5rem;
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
      <UpdateSign onClick={() => dispatch(removeItemQuantity(id))}>
        {" "}
        {reduce}
      </UpdateSign>
      <span> {currentQuantity} </span>
      <UpdateSign onClick={() => dispatch(addItemQuantity(id))}>
        {" "}
        {add}{" "}
      </UpdateSign>
    </Container>
  );
}

export default UpdateCartItem;
