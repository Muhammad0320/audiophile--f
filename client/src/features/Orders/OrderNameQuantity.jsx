import styled from "styled-components";

const QuantityStyle = styled.span`
  color: var(--color-primary-light);
`;

function OrderNameQuantity({ data }) {
  const item = data.split("-");

  return (
    <>
      {" "}
      <QuantityStyle> {item}X </QuantityStyle> {item}{" "}
    </>
  );
}

export default OrderNameQuantity;
