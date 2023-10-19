// https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4

// https://youtu.be/FErIfEd3IHI?si=bQHsyv4Le3WgbiK6

import { useNavigate } from "react-router-dom";
import {
  Container,
  DescriptionContainer,
  ImageContainer,
  NewProduct,
  Text,
  ProductName,
  ProductPrice,
} from "../category/Category";
import { formatCurrency } from "../../utils/helper";
import Button from "../../ui/Button";
import { css, styled } from "styled-components";

import { useMoveBack } from "../../hooks/useMoveBack";
import SmallButton from "../../ui/SmallButton";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentItemQuantityById } from "../cart/cartSlice";

import UpdateCartItem from "../../ui/UpdateCartItem";

import Spinner from "../../ui/Spinner";
import { useGetProductBySlug } from "./useProductBySlug";
import { useUser } from "../users/useUser";
import ReviewCard from "../reviews/reviewCard";
import { clampBuilder } from "../../styles/clampFunction";

const FeatureBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: ${() => clampBuilder(320, 1200, 7, 15)} 0;

  @media (max-width: 920px) {
    flex-flow: column;

    row-gap: ${() => clampBuilder(320, 920, 1.4, 3)};

    margin-inline-end: ${() => clampBuilder(320, 920, 2.5, 6)};
  }
`;

export const Heading = styled.h4`
  font-size: ${() => clampBuilder(320, 1200, 2, 4.5)};
  font-weight: 600;

  margin-bottom: ${() => clampBuilder(320, 1200, 1.5, 3)};

  text-transform: uppercase;

  background-color: var(--color-primary-light-dark);

  background-image: var(--color-gradient-dark);

  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;

  ${(props) =>
    props.type === "review" &&
    css`
      text-align: center;
      margin-bottom: ${() => clampBuilder(320, 1200, 3.5, 6)};
      font-size: ${() => clampBuilder(320, 1200, 2.2, 4)};
      background-color: var(--color-primary-light-dark);

      background-image: var(--color-gradient-dark);
    `}

  ${(props) =>
    props.type === "login" &&
    css`
      margin: 0;
      font-size: ${() => clampBuilder(320, 1200, 1.5, 3)};
      font-weight: 700;
    `}

    ${(props) =>
    props.type === "others" &&
    css`
      text-align: center;
      margin-bottom: ${() => clampBuilder(320, 1200, 2, 3)};
    `}

    @media (max-width: 920px) {
    ${(props) =>
      props.type === "inTheBox" &&
      css`
        margin-bottom: ${() => clampBuilder(320, 920, -1, -2)};
      `}
  }
`;

const InTheBox = styled.div`
  display: flex;
  column-gap: ${() => clampBuilder(320, 1200, 1, 2)};
  align-items: center;
`;

const IntheBoxAndHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

const InTheBoxContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 920px) {
    align-self: flex-end;
    margin-inline-end: ${() => clampBuilder(320, 920, 4, 10)};
  }

  @media (max-width: 420px) {
    margin-top: 3rem;
    align-self: flex-start;
  }

  /* row-gap: ${() => clampBuilder(320, 1200, 0.8, 2)}; */
`;

const Quantity = styled.span`
  font-size: ${() => clampBuilder(320, 1200, 1.2, 2.5)};
  font-weight: 600;
  color: var(--color-primary);
`;

const GalleryContainer = styled.div`
  margin-bottom: ${() => clampBuilder(320, 1200, 8, 15)};
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: repeat(2, 1fr);
  gap: ${() => clampBuilder(320, 1200, 1.4, 3)};

  @media (max-width: 420px) {
    grid-template-columns: none;
    grid-template-rows: repeat(2, 1fr) 1.5fr;
  }

  & > img:first-of-type {
    grid-row: 1 / 2;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    grid-column: 1 / 2;

    @media (max-width: 420px) {
      grid-row: 1 / 2;
    }
  }

  & > img:nth-of-type(2) {
    grid-row: 2 / -1;
    grid-column: 1 / 2;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 420px) {
      grid-row: 2 / 3;
    }
  }

  & > img:last-of-type {
    grid-row: 1 / -1;
    grid-column: 2 / -1;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 420px) {
      grid-row: 3 / -1;
    }
  }
`;

const ProductContainer = styled.div`
  margin: ${() => clampBuilder(320, 1200, 4, 5.5)} 0;
`;

const OthersContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr max-content;
  color: var(--color-dark);
`;

const OtherItemContainer = styled.div`
  display: flex;
  margin-top: ${() => clampBuilder(320, 1200, 3, 7)};
  column-gap: ${() => clampBuilder(320, 1200, 3, 7)};

  @media (max-width: 500px) {
    flex-direction: column;

    row-gap: ${() => clampBuilder(320, 500, 4, 3)};
  }
`;

const OtherImageContainer = styled.div`
  text-align: center;
  background-color: var(--color-white-2);
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  grid-row: 1 / 2;
`;

const OtherTextBox = styled.div`
  display: flex;
  grid-row: 2 / -1;
  flex-direction: column;
  column-gap: ${() => clampBuilder(320, 1200, 1.2, 2)};
  align-items: center;
  font-size: ${() => clampBuilder(320, 1200, 1.3, 3.5)};
  font-weight: 500;
`;

const FeatureText = styled.p`
  font-size: ${() => clampBuilder(920, 1200, 1.2, 2)};

  color: var(--color-dark-3);

  @media (max-width: 920px) {
    font-size: ${() => clampBuilder(350, 920, 1.3, 2)};
  }
`;

const UpdateCartButton = styled.div`
  display: grid;
  place-items: center;

  @media (max-width: 920px) {
    width: 20%;
  }

  @media (max-width: 420px) {
    width: 15%;
  }
`;

const StyledReviewCard = styled.div`
  display: grid;

  grid-auto-flow: column;

  grid-auto-columns: 28%;

  padding: 0 1rem;

  column-gap: ${() => clampBuilder(320, 1200, 2.5, 4)};

  overflow-x: auto;

  scroll-snap-type: x mandatory;

  padding-bottom: ${() => clampBuilder(320, 1200, 2.5, 4)};
  margin-bottom: ${() => clampBuilder(320, 1200, 2.8, 5.5)};
`;

function ProductDetails() {
  const { isLoading, product } = useGetProductBySlug();

  const { user } = useUser();

  const navigate = useNavigate();

  const {
    price,
    includes,
    image,
    name,
    features,
    reviews = [],
    _id,
    gallery,
    description,
    others,
    new: isNew,
  } = product?.product || {};

  const { first, second, third } = gallery || {};

  const moveback = useMoveBack();

  const dispatch = useDispatch();

  const cartName = name?.split(" ").slice(0, -1).join(" ");

  const handleAddToCart = () => {
    const newCartItem = {
      totalPrice: price * 1,
      quantity: 1,

      user: user._id,

      product: {
        image,
        name: cartName,
        price,
        _id,
      },
    };

    dispatch(addItem(newCartItem));
  };

  const currentQuantity = useSelector(getCurrentItemQuantityById(_id));

  const isInCart = currentQuantity > 0;

  if (isLoading) return <Spinner />;

  const src = image.startsWith("https") ? image : `/assets/product/${image}`;

  const productFeature = features.split("\n");

  return (
    <ProductContainer>
      <SmallButton onClick={moveback} kind="back">
        {" "}
        Go Back{" "}
      </SmallButton>
      <Container>
        <ImageContainer style={{ gridColumn: "1 / 2" }}>
          <img src={src} alt="product" />
        </ImageContainer>

        <DescriptionContainer>
          {isNew && <NewProduct> new product </NewProduct>}

          <ProductName> {name} </ProductName>
          <Text> {description} </Text>
          <ProductPrice> {formatCurrency(price)} </ProductPrice>
          {!isInCart ? (
            <Button size="large" onClick={() => handleAddToCart()}>
              {" "}
              add to cart{" "}
            </Button>
          ) : (
            <UpdateCartButton>
              <UpdateCartItem currentQuantity={currentQuantity} id={_id} />
            </UpdateCartButton>
          )}
        </DescriptionContainer>
      </Container>

      <FeatureBox>
        <div style={{ flexBasis: "60%" }}>
          <Heading> Features </Heading>

          {productFeature.map((feat, i) => (
            <FeatureText key={i}> {feat} </FeatureText>
          ))}
        </div>

        <IntheBoxAndHeaderContainer>
          <Heading type="inTheBox"> in the box </Heading>

          <InTheBoxContainer>
            {includes?.map((item) => (
              <InTheBox key={item._id}>
                <Quantity> {item.quantity + "x"} </Quantity>
                <FeatureText> {item.item} </FeatureText>
              </InTheBox>
            ))}
          </InTheBoxContainer>
        </IntheBoxAndHeaderContainer>
      </FeatureBox>

      <GalleryContainer>
        <img src={`/assets/product/${first}`} alt="GalleryImage 1" />
        <img src={`/assets/product/${second}`} alt="GalleryImage 2" />
        <img src={`/assets/product/${third}`} alt="GalleryImage 3 " />
      </GalleryContainer>

      <Heading type="review"> Our customers review </Heading>
      <StyledReviewCard>
        {reviews.length &&
          reviews?.map((review) => (
            <ReviewCard reviews={review} key={review.id} />
          ))}
      </StyledReviewCard>

      {product && <Heading type="others"> You may also like </Heading>}
      <OtherItemContainer>
        {others?.map((item) => {
          return (
            <OthersContainer key={item._id}>
              <OtherImageContainer>
                <img
                  src={`/assets/product/${item?.image}`}
                  alt=" OtherImage "
                />
              </OtherImageContainer>

              <OtherTextBox>
                <p> {item.name} </p>
                <Button onClick={() => navigate(`/product/${item.slug}`)}>
                  {" "}
                  see product{" "}
                </Button>
              </OtherTextBox>
            </OthersContainer>
          );
        })}
      </OtherItemContainer>
    </ProductContainer>
  );
}

export default ProductDetails;
