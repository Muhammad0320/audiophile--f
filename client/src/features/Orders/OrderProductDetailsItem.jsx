import styled from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";

const ItemContainer = styled.div`
  display: grid;
  grid-template-rows: 1.2fr 1fr;

  background-color: var(--color-white-vivid);

  background-image: var(--color-gradient-dark-muted);

  border-radius: ${() => clampBuilder(320, 1200, 0.5, 1)};
`;

const Image = styled.img`
  grid-row: 1 / 2;

  display: block;
`;

function OrderProductDetailsItem() {
  return;
}

export default OrderProductDetailsItem;
