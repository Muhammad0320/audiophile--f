import ButtonCategory from "./ButtonCategory";
import { useNavigate } from "react-router-dom";
import { css, styled } from "styled-components";
import { clampBuilder } from "../styles/clampFunction";

const Box = styled.ul`
  margin: ${() => clampBuilder(320, 1200, 20, 25)} 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  padding: 0;
  column-gap: ${() => clampBuilder(500, 1200, 1.5, 3)};

  justify-content: center;

  align-items: center;
  margin-inline: auto;

  @media (max-width: 500px) {
    grid-template-columns: none;
    grid-template-rows: repeat(3, 1fr);
    row-gap: ${() => clampBuilder(320, 500, 5, 8)};
  }

  ${(props) =>
    props.type === "menu" &&
    css`
      margin: ${() => clampBuilder(320, 1200, 10, 13)} 0;
      max-width: 90%;
    `}

  @media (max-width: 920px) {
    ${(props) =>
      props.type === "menu" &&
      css`
        max-width: 100%;
      `}
  }
`;

const CategoryItem = styled.li`
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 80%;
  font-size: ${() => clampBuilder(300, 1200, 1, 1.5)};
  font-weight: 600;
  border-radius: 1rem;
  color: var(--color-dark);
  background-color: var(--color-white-2);

  background-image: var(--color-gradient-dark-muted);
  text-transform: uppercase;
  padding: ${() => clampBuilder(500, 1200, 1.8, 3)};
  box-shadow: var(--box-shadow-light);

  & > *:not(:first-child) {
    margin-top: ${() => clampBuilder(320, 500, -10, -14)};
  }
`;

const CategoryTextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Image = styled.img`
  display: block;

  translate: 0 -40%;

  @media (max-width: 500px) {
    width: 50%;
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

        <CategoryTextContainer>
          <p> headphones </p>
          <ButtonCategory onClick={() => navigate("/headphones")}>
            {" "}
            Shop{" "}
          </ButtonCategory>
        </CategoryTextContainer>
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

        <CategoryTextContainer>
          <p> earphones </p>
          <ButtonCategory onClick={() => navigate("/earphones")}>
            {" "}
            Shop{" "}
          </ButtonCategory>
        </CategoryTextContainer>
      </CategoryItem>
    </Box>
  );
}

export default CategoryBox;
