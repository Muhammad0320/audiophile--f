import { styled } from "styled-components";
import { Text } from "../features/category/Category";

const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function EmptyCart() {
  return (
    <EmptyContainer>
      <Text>
        {" "}
        Your cart is still empty, Start by adding an item that catch your eye 🤩{" "}
      </Text>
    </EmptyContainer>
  );
}

export default EmptyCart;
