import { styled } from "styled-components";
import ButtonCategory from "./ButtonCategory";
import { useNavigate } from "react-router-dom";
import { useViewport } from "../features/context/ViewPort";
import { clampBuilder } from "../styles/clampFunction";

const Box = styled.ul`
  margin: 20rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 100%;
  padding: 0;
  column-gap: ${() => clampBuilder(420, 1200, 1.5, 3)};

  & > * {
    box-sizing: border-box;
    min-width: 0;
  }
`;

const CategoryItem = styled.li`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-items: flex-end;
  font-size: ${() => clampBuilder(300, 1200, 1, 1.5)};
  font-weight: 600;
  border-radius: 1rem;
  color: var(--color-dark);
  width: ${() => clampBuilder(420, 1200, 30, 35)};
  height: ${() => clampBuilder(420, 1200, 20, 25)};
  background-color: var(--color-white-2);
  text-align: center;
  text-transform: uppercase;
  padding: 2rem;
`;

const Image = styled.img`
  display: block;
  width: 80%;
  /* margin-bottom: -15rem; */
  translate: 0 -35%;
`;

function CategoryBox() {
  const navigate = useNavigate();

  const { viewportWidth } = useViewport();

  return (
    <Box>
      <CategoryItem>
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          alt="category Headphone desktop"
        />

        <p> headphones </p>
        <ButtonCategory onClick={() => navigate("/headphones")}>
          {" "}
          Shop{" "}
        </ButtonCategory>
      </CategoryItem>

      <CategoryItem>
        {viewportWidth <= 400 ? (
          <Image
            src="/assets/shared/mobile/image-category-thumbnail-soeakers.png"
            alt="category Headphone mobile"
          />
        ) : viewportWidth <= 920 ? (
          <Image
            src="/assets/shared/tablet/image-category-thumbnail-soeakers.png"
            alt="category Headphone tablet"
          />
        ) : (
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-soeakers.png"
            alt="category Headphone desktop"
          />
        )}
        <p> speakers </p>
        <ButtonCategory onClick={() => navigate("/speakers")}>
          {" "}
          Shop{" "}
        </ButtonCategory>
      </CategoryItem>

      <CategoryItem>
        {viewportWidth <= 400 ? (
          <Image
            src="/assets/shared/mobile/image-category-thumbnail-earphones.png"
            alt="category Headphone mobile"
          />
        ) : viewportWidth <= 920 ? (
          <Image
            src="/assets/shared/tablet/image-category-thumbnail-earphones.png"
            alt="category Headphone tablet"
          />
        ) : (
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            alt="category Headphone desktop"
          />
        )}
        <p> earphones </p>
        <ButtonCategory onClick={() => navigate("/earphones")}>
          {" "}
          Shop{" "}
        </ButtonCategory>
      </CategoryItem>
    </Box>
  );
}

export default CategoryBox;
