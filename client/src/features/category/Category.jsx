import { css, styled } from "styled-components";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import SmallButton from "../../ui/SmallButton";
import { useMoveBack } from "../../hooks/useMoveBack";
import { clampBuilder } from "../../styles/clampFunction";
import { useViewport } from "../../context/ViewPort";

export const Container = styled.div`
  display: grid;
  padding: 2rem 1.5rem;

  margin-bottom: 3rem;

  grid-template-columns: repeat(2, 50%);

  column-gap: ${() => clampBuilder(920, 1200, 7, 10)};

  &:not(:last-child) {
    margin-bottom: ${() => clampBuilder(350, 1200, 6, 12)};
  }

  @media (max-width: 920px) {
    grid-template-columns: none;

    grid-template-rows: repeat(2, 50%);
    row-gap: ${() => clampBuilder(320, 920, 2.5, 4)};
  }
`;

export const ImageContainer = styled.div`
  background-color: var(--color-white-2);
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 920px) {
    grid-row: 1 / 2;
    width: 90%;
    height: 90%;
    object-fit: cover;

    & > img {
      width: 45%;
      box-shadow: var(--box-shadow-light);

      transition: scale 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &:hover {
        scale: 1.1;
      }
    }
  }
`;

export const DescriptionContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  margin-inline-end: ${() => clampBuilder(920, 1200, 5, 10)};
  & > button {
    align-self: flex-start;
  }

  & > section {
    align-self: flex-start;
  }

  @media (max-width: 920px) {
    margin-inline-end: 0;
    grid-row: 2 / -1;
    align-items: center;
    padding-inline: ${() => clampBuilder(350, 920, 6, 10)};

    & > button {
      align-self: center;
    }
  }
`;

export const NewProduct = styled.div`
  letter-spacing: ${() => clampBuilder(350, 1200, 0.5, 1)};
  font-size: ${() => clampBuilder(350, 1200, 1, 1.4)};
  text-transform: uppercase;

  color: var(--color-primary);

  @media (max-width: 920px) {
    text-align: center;
  }
`;

export const ProductName = styled.p`
  color: var(--color-dark);
  font-size: ${() => clampBuilder(350, 1200, 3.0, 4.5)};
  line-height: 1.3;
  font-weight: 500;
  /* margin-bottom: -1rem; */
  margin-block: 0;

  @media (max-width: 920px) {
    text-align: center;
    padding-inline: ${() => clampBuilder(350, 920, 5, 8)};
    margin-block: 0;
  }
`;

export const Text = styled.p`
  color: var(--color-dark-3);
  font-size: ${() => clampBuilder(350, 1200, 1.2, 2)};

  @media (max-width: 920px) {
    ${(props) =>
      props.type === "product" &&
      css`
        text-align: center;
        font-size: ${() => clampBuilder(320, 920, 1.2, 2)};
      `}
  }

  ${(props) =>
    props.type === "avatar" &&
    css`
      color: var(--color-white);
      margin-right: auto;
    `}

  ${(props) =>
    props.type === "review" &&
    css`
      align-self: flex-start;
      text-align: justify;
      margin-block: auto;
      line-height: 1.4;
      font-size: ${() => clampBuilder(320, 920, 1, 1.4)};
    `}
`;

export const ProductPrice = styled.p`
  font-weight: 600;
  font-size: 3rem;
  color: var(--color-dark);
  margin: 0;
`;

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
