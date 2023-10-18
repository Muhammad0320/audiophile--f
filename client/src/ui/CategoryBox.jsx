import { styled } from "styled-components";
import ButtonCategory from "./ButtonCategory";
import { useNavigate } from "react-router-dom";
import { useViewport } from "../features/context/ViewPort";
import { clampBuilder } from "../styles/clampFunction";

const Box = styled.ul`
  margin: 20rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  column-gap: ${() => clampBuilder(420, 1200, 1.5, 3)};
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
  /* width: 35rem;
  height: 26rem; */
  background-color: var(--color-white-2);
  text-align: center;
  text-transform: uppercase;
  padding: 2rem;
`;

const CategoryItemCard = styled.div`
  display: grid;

  grid-template-rows: 1.5fr, 1fr;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  /* margin-bottom: -15rem; */
  translate: 0 -35%;
`;

function CategoryBox() {
  const navigate = useNavigate();

  const { viewportWidth } = useViewport();

  return (
    <Box>
      <CategoryItem>
        {viewportWidth <= 400 ? (
          <Image
            src="/assets/shared/mobile/image-category-thumbnail-headphones.png"
            alt="category Headphone mobile"
          />
        ) : viewportWidth <= 920 ? (
          <Image
            src="/assets/shared/tablet/image-category-thumbnail-headphones.png"
            alt="category Headphone tablet"
          />
        ) : (
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            alt="category Headphone desktop"
          />
        )}

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
