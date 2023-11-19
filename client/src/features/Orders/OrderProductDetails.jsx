import styled from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";
import OrderProductDetailsItem from "./OrderProductDetailsItem";

const Container = styled.div`
  width: 100%;

  display: grid;
  grid-auto-flow: column;

  grid-auto-columns: 31%;

  column-gap: ${() => clampBuilder(700, 1200, 1, 2)};

  border-radius: ${() => clampBuilder(320, 1200, 0.4, 1)};

  overflow-x: auto;

  padding-inline: ${() => clampBuilder(320, 1200, 1, 2.3)};
  padding-block: ${() => clampBuilder(320, 1200, 1.3, 2.5)};
  scroll-behavior: smooth;

  scroll-snap-type: x mandatory;

  scroll-padding: ${() => clampBuilder(700, 1200, 1, 2)};

  background-color: var(--color-white-vivid);

  background-image: var(--color-gradient-dark);

  @media (max-width: 950px) {
    grid-auto-columns: 43%;
  }

  @media (max-width: 450px) {
    grid-auto-columns: 53%;
  }
`;

function OrderProductDetails({ products }) {
  return (
    <Container>
      {products?.map((product, i) => {
        return <OrderProductDetailsItem key={i} product={product} />;
      })}
    </Container>
  );
}

export default OrderProductDetails;
