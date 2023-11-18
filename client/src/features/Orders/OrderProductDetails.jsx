import styled from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";
import OrderProductDetailsItem from "./OrderProductDetailsItem";

const Container = styled.div`
  width: 100%;

  display: grid;
  grid-auto-flow: column;

  grid-auto-columns: 30%;

  column-gap: ${() => clampBuilder(700, 1200, 1, 2)};

  overflow-x: auto;

  scroll-behavior: smooth;

  scroll-snap-type: x mandatory;

  scroll-padding: ${() => clampBuilder(700, 1200, 1, 2)};
`;

function OrderProductDetails({ products }) {
  return (
    <Container>
      {products?.map((product, i) => {
        return <OrderProductDetailsItem key={i} />;
      })}
    </Container>
  );
}

export default OrderProductDetails;
