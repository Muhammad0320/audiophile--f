import { css, styled } from "styled-components";

import Button from "./Button";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { useViewport } from "../features/context/ViewPort";
import { clampBuilder } from "../styles/clampFunction";

const StyledHeader = styled.div`
  grid-column: 1 / -1;
  padding: ${() => clampBuilder(400, 1200, 1.2, 2)};
  ${() => clampBuilder(400, 1200, 0.1, 12)};
  background-color: var(--color-dark);
`;

const StyledHeaderContent = styled.div`
  min-height: 22dvh;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin: 2rem 0;

  ${(props) =>
    props.content === "category" &&
    css`
      text-align: center;
      font-size: ${() => clampBuilder(350, 1200, 2, 3.5)};
      text-transform: uppercase;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ${(props) =>
    props.content === "home" &&
    css`
      background-color: var(--color-dark-1);
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 3rem;
    `}
`;

const StyledHeaderText = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  z-index: 20;
  line-height: 1;
  padding-left: 2rem;
  justify-self: flex-start;
  display: flex;
  flex-direction: column;

  row-gap: ${() => clampBuilder(400, 1200, 1, 1.5)};

  justify-content: center;
  align-items: start;

  @media (max-width: 920px) {
    grid-column: 1 / -1;

    justify-self: center;
    justify-content: center;
    align-items: center;
    padding-left: 0px;
  }
`;

const Image = styled.img`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  mix-blend-mode: difference;
  max-width: 100%;
`;

const ProductType = styled.p`
  letter-spacing: ${() => clampBuilder(350, 1200, 0.3, 1)};

  font-size: ${() => clampBuilder(350, 1200, 0.8, 1.5)};
  color: var(--color-white-3);
  margin-right: 2rem;

  font-weight: 100;
  text-transform: uppercase;
`;

const ProductName = styled.h1`
  font-size: ${() => clampBuilder(400, 1200, 3, 5.5)};
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: ${() => clampBuilder(400, 1200, 1.2, 2)};
  color: var(--color-white-3);
  letter-spacing: 1px;
  line-height: 1.6;
  margin-inline-end: 10dvh;

  @media (max-width: 920px) {
    margin-inline-end: 0;
    margin-inline: ${() => clampBuilder(400, 920, 6, 15)};
    text-align: center;
  }
`;

function Header({ category, home }) {
  const navigate = useNavigate();

  const { viewportWidth } = useViewport();

  return (
    <StyledHeader>
      <Nav type="header" />

      {category && (
        <StyledHeaderContent content="category">
          {" "}
          <h4> {category} </h4>{" "}
        </StyledHeaderContent>
      )}

      {home && (
        <StyledHeaderContent content="home">
          <StyledHeaderText>
            <ProductType> new Product </ProductType>
            <ProductName>
              {" "}
              xx99 mark II <br /> headphones{" "}
            </ProductName>
            <Text>
              {" "}
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.{" "}
            </Text>
            <Button
              onClick={() => navigate(`/product/xx99-mark-two-headphones`)}
            >
              {" "}
              see product{" "}
            </Button>
          </StyledHeaderText>

          {viewportWidth <= 400 ? (
            <Image
              src="/assets/home/mobile/image-header.jpg"
              alt="Mobile view"
            />
          ) : viewportWidth <= 920 ? (
            <Image
              src="/assets/home/tablet/image-header.jpg"
              alt="Tablet view"
            />
          ) : (
            <Image
              src="/assets/home/desktop/image-hero.jpg"
              alt="Desktop view"
            />
          )}
        </StyledHeaderContent>
      )}
    </StyledHeader>
  );
}

export default Header;
