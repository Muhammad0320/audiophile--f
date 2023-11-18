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

const TextBox = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  &:first-child,
  &:last-child {
    grid-column: 1 / -1;
  }

  &:nth-child(3) {
    grid-column: 1 / 2;
  }

  &:nth-child(3) {
    grid-column: 2 / -1;
  }
`;

const TextIconContainer = styled.p`
  display: flex;

  justify-content: center;

  column-gap: ${() => clampBuilder(320, 1200, 0.5, 1)};

  align-items: center;
`;

function OrderProductDetailsItem() {
  return (
    <ItemContainer>
      <Image />
    </ItemContainer>
  );
}

export default OrderProductDetailsItem;
