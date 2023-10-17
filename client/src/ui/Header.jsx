import { css, styled } from "styled-components";

import Button from "./Button";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ViewPortProvider } from "../features/context/ViewPort";

const StyledHeader = styled.div`
  grid-column: 1 / -1;
  padding: 2rem clamp(0px, var(--padding-medium-2), var(--padding-huge));
  background-color: var(--color-dark);
`;

const StyledHeaderContent = styled.div`
  min-height: 20dvh;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin: 2rem 0;

  ${(props) =>
    props.content === "category" &&
    css`
      text-align: center;
      font-size: 3.5rem;
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
  --margin-tiny-3: 1rem;
  --margin-tiny-2: 1.2rem;
  --margin-tiny: 1.5rem;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  z-index: 20;
  line-height: 1;
  padding-left: 2rem;
  justify-self: flex-start;
  display: flex;
  flex-direction: column;

  row-gap: clamp(
    var(--margin-tiny-3),
    var(--margin-tiny-2),
    var(--margin-tiny)
  );

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
  letter-spacing: 1rem;

  font-size: 1.4rem;
  color: var(--color-white-3);
  margin-right: clamp(
    var(--margin-tiny-2),
    var(--margin-tiny),
    var(--margin-very-small)
  );

  font-weight: 100;
  text-transform: uppercase;

  /* @media (max-width: 70em) {
    letter-spacing: 5px;
  } */
`;

const ProductName = styled.h1`
  font-size: var(--font-huge);
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: clamp(var(--font-tiny-2), var(--font-tiny), var(--font-small));
  color: var(--color-white-3);
  letter-spacing: 1px;
  line-height: 1.6;
  margin-inline-end: 10dvh;

  @media (max-width: 920px) {
    margin-inline: 30dvh;
    text-align: center;
  }
`;

function Header({ category, home }) {
  const navigate = useNavigate();

  const viewportWidth = useContext(ViewPortProvider);

  console.log(viewportWidth);

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

          {viewportWidth <= 500 ? (
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
