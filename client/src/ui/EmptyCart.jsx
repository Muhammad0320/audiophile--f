import { styled } from "styled-components";
import { Text } from "./Text";

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
        Your cart is still empty, Start by adding an items that catch your
        attention 🤩.{" "}
      </Text>
    </EmptyContainer>
  );
}

export default EmptyCart;
