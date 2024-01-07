import Button from "../../ui/Button";
import { Text } from "../../ui/Text";
import SmallButton from "../../ui/SmallButton";
import { useNavigate } from "react-router-dom";
import { useViewport } from "../../context/ViewPort";
import { useMoveBack } from "../../hooks/useMoveBack";

import {
  Container,
  DescriptionContainer,
  ImageContainer,
  NewProduct,
  ProductName,
} from "../../ui/productStyles";

function Category({ categoryData, index }) {
  const { image, new: isNew, name, description, slug } = categoryData;

  const navigate = useNavigate();

  const moveback = useMoveBack();

  const src = image.startsWith("https") ? image : `/assets/product/${image}`;

  const { viewportWidth } = useViewport();

  return (
    <>
      <SmallButton onClick={moveback}> Go back </SmallButton>
      <Container>
        <ImageContainer
          style={{ gridColumn: index % 2 === 0 ? "1 / 2" : "2 / -1" }}
        >
          <img src={src} alt=" Product" />
        </ImageContainer>

        <DescriptionContainer
          style={{
            gridColumn: index % 2 === 0 ? "2 / -1" : "1 / 2",
            gridRow: viewportWidth <= 920 ? "2 / -1" : "1 / 2",
          }}
        >
          {isNew && <NewProduct> New product </NewProduct>}
          <ProductName> {name} </ProductName>
          <Text> {description} </Text>
          <Button onClick={() => navigate(`/product/${slug}`)}>
            {" "}
            See product{" "}
          </Button>
        </DescriptionContainer>
      </Container>
    </>
  );
}

export default Category;
