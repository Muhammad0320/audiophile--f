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
`;

const Image = styled.img`
  grid-row: 1 / 2;

  display: block;
  border-radius: 0;
`;

const TextBox = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  /* overflow: hidden; */

  padding-top: ${() => clampBuilder(320, 1200, 1, 1.7)};
  padding-left: ${() => clampBuilder(320, 1200, 1, 1.7)};

  & > div:first-child {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;

const TextIconContainer = styled.p`
  display: flex;

  justify-content: center;

  column-gap: ${() => clampBuilder(320, 1200, 0.5, 0.8)};

  align-items: center;

  color: var(--color-primary-dark);

  font-size: ${() => clampBuilder(320, 1200, 1, 1.4)};
`;

function OrderProductDetailsItem() {
  return (
    <ItemContainer>
      <Image src="https://i.ibb.co/zQhW0N1/product-1-preview.jpg" />
      <TextBox>
        <div>
          <Text type="details"> XX59 Mark II Headphone </Text>
        </div>
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
