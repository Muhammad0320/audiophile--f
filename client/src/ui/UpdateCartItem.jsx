import { useDispatch } from "react-redux";
import { css, styled } from "styled-components";
import {
  addItemQuantity,
  removeItemQuantity,
} from "../features/cart/cartSlice";
import { clampBuilder } from "../styles/clampFunction";

const Container = styled.div`
  background-color: var(--color-white-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${() => clampBuilder(320, 1200, 1, 1.5)};
  width: 90%;
  font-weight: 500;
  color: var(--color-dark);
  padding: ${() => clampBuilder(320, 1200, 1, 1.6)};
  ${() => clampBuilder(320, 1200, 1.2, 2)};

  ${(props) =>
    props.type === "cart" &&
    css`
      width: ${() => clampBuilder(650, 1200, 4.5, 6)};
      padding: ${() => clampBuilder(320, 1200, 0.8, 1.2)}
        ${() => clampBuilder(320, 1200, 1, 1.5)};
      margin-left: ${() => clampBuilder(650, 1200, 1, 1.5)} @media
        (max-width: 650px) {
        width: ${() => clampBuilder(650, 650, 3.8, 4.5)};
        padding: ${() => clampBuilder(320, 650, 0.6, 1)}
          ${() => clampBuilder(320, 650, 0.8, 1.2)};
      }
    `}
`;

const UpdateSign = styled.button`
  background-color: transparent;

  border: none;
  font-size: ${() => clampBuilder(320, 1200, 1, 1.8)};
  color: var(--color-dark-3);
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
