import styled from "styled-components";

const QuantityStyle = styled.span`
  color: var(--color-primary-light);
`;

function OrderNameQuantity({ name, quantity }) {
  return (
    <>
      <QuantityStyle> {quantity}X </QuantityStyle> {name} {", "}
    </>
  );
}

export default OrderNameQuantity;
