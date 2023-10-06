import { css, styled } from "styled-components";

import Button from "./Button";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.div`
  grid-column: 1 / -1;
  padding: 2rem 10rem;
  background-color: var(--color-dark);
`;

const StyledHeaderContent = styled.div`
  min-height: 25dvh;
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
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  z-index: 20;
  line-height: 1;
  padding-left: 2rem;
  justify-self: flex-start;
  display: flex;
  flex-direction: column;

  row-gap: 2rem;
  justify-content: center;
  align-items: start;
`;

const Image = styled.img`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  mix-blend-mode: difference;
  max-width: 100%;
`;

const ProductType = styled.p`
  letter-spacing: 1rem;
  opacity: 0.5;
  font-size: 1.4rem;
  color: var(--color-white-2);
  font-weight: 100;
  text-transform: uppercase;
`;

const ProductName = styled.h1`
  font-size: 6rem;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: 1.4rem;
  color: var(--color-white-2);
  letter-spacing: 1px;
  opacity: 0.6;
  line-height: 1.6;
`;

function Header({ category, home }) {
  const navigate = useNavigate();

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
              Experience natural, lifelike audio and exceptional <br /> build
              quality made for the passionate <br /> music enthusiast.{" "}
            </Text>
            <Button
              onClick={() => navigate(`/product/xx99-mark-two-headphones`)}
            >
              {" "}
              see product{" "}
            </Button>
          </StyledHeaderText>
          <Image src="/assets/home/desktop/image-hero.jpg" />
        </StyledHeaderContent>
      )}
    </StyledHeader>
  );
}

export default Header;
