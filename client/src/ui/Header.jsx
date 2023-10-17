import { css, styled } from "styled-components";

import Button from "./Button";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  z-index: 20;
  line-height: 1;
  padding-left: 2rem;
  justify-self: flex-start;
  display: flex;
  flex-direction: column;

  row-gap: clamp(
    var(--margin-tiny),
    var(--margin-tiny-2),
    var(--margin-tiny-3)
  );

  justify-content: center;
  align-items: start;

  /* @media (max-width: 70em) {
    grid-column: 1 / 1;

    row-gap: 0px;
    align-items: center;
    padding-left: 0px;
  } */
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
`;

function Header({ category, home }) {
  const navigate = useNavigate();

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Cleanup function
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []); // Empty dependency array ensures effect only runs once on mount and cleanup on unmount

  // Rest of the component...

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
          ) : viewportWidth <= 900 ? (
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

          {/* 
          <Image
            src="/assets/home/desktop/image-hero.jpg"
            srcSet="/assets/home/mobile/image-header.jpg 750w, /assets/home/tablet/image-header.jpg 1536w,  /assets/home/desktop/image-hero.jpg 2880w"
          /> */}
        </StyledHeaderContent>
      )}
    </StyledHeader>
  );
}

export default Header;
