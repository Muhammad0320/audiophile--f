import styled from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";

const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  column-gap: ${() => clampBuilder(700, 1200, 1, 2)};
`;

function OrderProductDetails() {
  return <Container></Container>;
}

export default OrderProductDetails;
