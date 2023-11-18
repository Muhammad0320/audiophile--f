import styled from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";
import { Text } from "../../ui/Text";
import Button from "../../ui/Button";
import { HiArchiveBoxXMark } from "react-icons/hi2";

const ItemContainer = styled.div`
  display: grid;
  grid-template-rows: 1.2fr 1fr;

  background-color: var(--color-white-vivid);

  background-image: var(--color-gradient-dark-muted);

  /* border-radius: ${() => clampBuilder(320, 1200, 0.5, 1)}; */
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

  color: var(--color-primary-dark);

  font-size: ${() => clampBuilder(320, 1200, 0.8, 1.3)};
`;

function OrderProductDetailsItem() {
  return (
    <ItemContainer>
      <Image src="https://i.ibb.co/zQhW0N1/product-1-preview.jpg" />
      <TextBox>
        <Text> XX59 Mark II Headphone </Text>
        <TextIconContainer>
          <span>
            {" "}
            <HiArchiveBoxXMark />{" "}
          </span>{" "}
          <em> Price </em>
        </TextIconContainer>
        <TextIconContainer>
          <span>
            {" "}
            <HiArchiveBoxXMark />{" "}
          </span>{" "}
          <em> Price </em>
        </TextIconContainer>
        <Button> Go to product </Button>
      </TextBox>
    </ItemContainer>
  );
}

export default OrderProductDetailsItem;