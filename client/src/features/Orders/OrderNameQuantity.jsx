import styled from "styled-components";

const TextContainer = styled.div`
  position: relative;
  margin-inline: 0 auto;
`;

function OrderNameQuantity({ name, quantity }) {
  return (
    <TextContainer>
      {quantity} X {name}
    </TextContainer>
  );
}

export default OrderNameQuantity;
