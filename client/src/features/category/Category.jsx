import { styled } from "styled-components";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10rem;

  &:not(:last-child) {
    margin-bottom: 16rem;
  }
`;

export const ImageContainer = styled.div`
  background-color: var(--color-white-2);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  & > button {
    align-self: flex-start;
  }

  & > section {
    align-self: flex-start;
  }
`;

export const NewProduct = styled.div`
  letter-spacing: 1rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-bottom: -4rem;
  color: var(--color-primary);
`;

export const ProductName = styled.p`
  color: var(--color-dark);
  font-size: 4.5rem;
  margin-right: 30rem;
  line-height: 1.3;
  font-weight: 500;
  margin-bottom: -1rem;
`;

export const Text = styled.p`
  color: var(--color-dark-1);
  margin-right: 8rem;
  opacity: 0.7;
  font-size: 2rem;
`;

export const ProductPrice = styled.p`
  font-weight: 600;
  font-size: 3rem;
  color: var(--color-dark);
  margin: 0;
`;

function Category({ categoryData, index }) {
  const { image, id, new: isNew, name, description } = categoryData;

  const navigate = useNavigate();

  return (
    <Container>
      <ImageContainer
        style={{ gridColumn: index % 2 === 0 ? "1 / 2" : "2 / -1" }}
      >
        <img src={image} alt=" Product" />
      </ImageContainer>

      <DescriptionContainer
        style={{
          gridColumn: index % 2 === 0 ? "2 / -1" : "1 / 2",
          gridRow: "1 / 2",
        }}
      >
        {isNew && <NewProduct> New product </NewProduct>}
        <ProductName> {name} </ProductName>
        <Text> {description} </Text>
        <Button onClick={() => navigate(`/product/${id}`)}>
          {" "}
          See product{" "}
        </Button>
      </DescriptionContainer>
    </Container>
  );
}

export default Category;
