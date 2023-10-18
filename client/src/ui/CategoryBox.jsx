import { styled } from "styled-components";
import ButtonCategory from "./ButtonCategory";
import { useNavigate } from "react-router-dom";
import { useViewport } from "../features/context/ViewPort";

const Box = styled.ul`
  display: flex;
  margin: 20rem 0;
  justify-content: space-between;
  column-gap: 2rem;
`;

const CategoryItem = styled.li`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  align-content: center;
  justify-items: center;
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 1rem;
  color: var(--color-dark);
  width: 35rem;
  height: 26rem;
  background-color: var(--color-white-2);
  text-align: center;
  text-transform: uppercase;
  padding: 2rem;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  margin-bottom: -15rem;
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
          alt="category Headphone"
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
          alt="category-speakers"
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
          alt="categoty earphones"
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
