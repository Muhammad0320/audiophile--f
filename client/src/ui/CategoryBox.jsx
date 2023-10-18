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

  background-color: var(--color-white-2);
  text-align: center;
  text-transform: uppercase;
  padding: 2rem;
`;

const Image = styled.img`
  display: block;
  margin-bottom: ${() => clampBuilder(300, 1200, -10, -15)};
  translate: 0 -35%;
`;

function CategoryBox() {
  const navigate = useNavigate();

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
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          alt="category speaker desktop"
        />
        <p> speakers </p>
        <ButtonCategory onClick={() => navigate("/speakers")}>
          {" "}
          Shop{" "}
        </ButtonCategory>
      </CategoryItem>

      <CategoryItem>
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          alt="category Headphone desktop"
        />
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
