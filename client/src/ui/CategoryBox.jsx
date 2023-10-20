import { css, styled } from "styled-components";
import ButtonCategory from "./ButtonCategory";
import { useNavigate } from "react-router-dom";
import { clampBuilder } from "../styles/clampFunction";

const Box = styled.ul`
  margin: ${() => clampBuilder(320, 1200, 15, 20)} 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 100%;
  padding: 0;

  column-gap: ${() => clampBuilder(500, 1200, 1.5, 3)};

  @media (max-width: 500px) {
    grid-template-columns: none;
    grid-template-rows: repeat(3, 1fr);
    row-gap: ${() => clampBuilder(100, 500, 13, 18)};
  }

  ${(props) =>
    props.type === "menu" &&
    css`
      opacity: 1;
      margin: ${() => clampBuilder(320, 1200, 7, 12)} 0;
    `}
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
  padding: ${() => clampBuilder(500, 1200, 1.8, 3)};

  &:not(:first-child) {
    margin-top: ${() => clampBuilder(320, 520, -6, -10)};
  }
`;

const CategoryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Image = styled.img`
  display: block;
  margin-bottom: ${() => clampBuilder(500, 1200, -8, -12)};
  translate: 0 -40%;

  @media (max-width: 500px) {
    width: 50%;

    margin-bottom: ${() => clampBuilder(3200, 500, -10, -15)};
  }
`;

function CategoryBox({ ...props }) {
  const navigate = useNavigate();

  return (
    <Box {...props}>
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
        <CategoryTextContainer>
          <p> speakers </p>
          <ButtonCategory onClick={() => navigate("/speakers")}>
            {" "}
            Shop{" "}
          </ButtonCategory>
        </CategoryTextContainer>
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
