import Button from "../../ui/Button";
import { Text } from "../../ui/Text";
import SmallButton from "../../ui/SmallButton";
import { useNavigate } from "react-router-dom";
import { useViewport } from "../../context/ViewPort";
import { useMoveBack } from "../../hooks/useMoveBack";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
  Container,
  DescriptionContainer,
  ImageContainer,
  NewProduct,
  ProductName,
} from "../../ui/productStyles";
import { ButtonContainer } from "../skeleton/ButtonSkeleton";

function Category({ categoryData = {}, index, loading }) {
  const { image, new: isNew, name, description, slug } = categoryData;

  const navigate = useNavigate();

  const moveback = useMoveBack();

  const src = image?.startsWith("https") ? image : `/assets/product/${image}`;

  const { viewportWidth } = useViewport();
    
  return (
    <>
      <SmallButton onClick={moveback}> Go back </SmallButton>

      <Container>
        <ImageContainer
          style={{ gridColumn: index % 2 === 0 ? "1 / 2" : "2 / -1" }}
        >
          {loading ? (
            <Skeleton height={"100%"} width={"100%"} />
          ) : (
            <img src={src} alt={`${name}`} />
          )}
        </ImageContainer>

        <DescriptionContainer
          style={{
            gridColumn: index % 2 === 0 ? "2 / -1" : "1 / 2",
            gridRow: viewportWidth <= 920 ? "2 / -1" : "1 / 2",
          }}
        >
          {isNew && <NewProduct> New product </NewProduct>}
          <ProductName> {loading ? <Skeleton /> : name} </ProductName>
          <Text> {loading ? <Skeleton count={5} /> : description} </Text>

          {loading ? (
            <ButtonContainer>
              <Skeleton height={"100%"} width={"100%"} />
            </ButtonContainer>
          ) : (
            <Button onClick={() => navigate(`/product/${slug}`)}>
              see product
            </Button>
          )}
        </DescriptionContainer>
      </Container>
    </>
  );
}

export default Category;
