import styled from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";
import { Text } from "../../ui/Text";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { HiArchiveBoxXMark } from "react-icons/hi2";

const ItemContainer = styled.div`
  display: grid;
  grid-template-rows: 1.25fr 1fr;

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

  padding-top: ${() => clampBuilder(320, 1200, 1, 1.7)};
  padding-left: ${() => clampBuilder(320, 1200, 1, 1.7)};

  & > div:first-child {
    display: flex;
    justify-content: center;

    align-items: center;
  }
`;

const TextIconContainer = styled.p`
  display: flex;

  justify-content: center;

  align-items: center;

  column-gap: ${() => clampBuilder(320, 1200, 0.5, 0.8)};

  color: var(--color-primary-dark);

  font-size: ${() => clampBuilder(320, 1200, 1, 1.7)};

  & > em {
    font-size: ${() => clampBuilder(320, 1200, 1.2, 2)};
  }
`;

function OrderProductDetailsItem({ product = {} }) {
  const navigate = useNavigate();

  const {
    price,
    quantity,
    productId: { image, name, slug },
  } = product;

  const handleGoToProduct = () => {
    navigate(`/product/${slug}`);
  };

  return (
    <ItemContainer>
      <Image src={image} />
      <TextBox>
        <div>
          <Text type="details"> {name} </Text>
        </div>
        <TextIconContainer>
          <span>
            {" "}
            <HiArchiveBoxXMark />{" "}
          </span>{" "}
          <em> {quantity} </em>
        </TextIconContainer>
        <TextIconContainer>
          <span>
            {" "}
            <HiArchiveBoxXMark />{" "}
          </span>{" "}
          <em> {price} </em>
        </TextIconContainer>
        <Button onClick={handleGoToProduct}> Go to product </Button>
      </TextBox>
    </ItemContainer>
  );
}

export default OrderProductDetailsItem;
