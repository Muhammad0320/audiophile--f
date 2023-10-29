// https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4

// https://youtu.be/FErIfEd3IHI?si=bQHsyv4Le3WgbiK6

import { Text } from "../../ui/Text";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useUser } from "../users/useUser";
import SmallButton from "../../ui/SmallButton";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../reviews/reviewCard";
import { css, styled } from "styled-components";
import { formatCurrency } from "../../utils/helper";
import UpdateCartItem from "../../ui/UpdateCartItem";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductBySlug } from "./useProductBySlug";
import { clampBuilder } from "../../styles/clampFunction";
import {
  Container,
  DescriptionContainer,
  ImageContainer,
  NewProduct,
  ProductName,
  ProductPrice,
} from "../../ui/productStyles";
import {
  FeatureBox,
  FeatureContainer,
  FeatureText,
  InTheBox,
  InTheBoxContainer,
  IntheBoxAndHeaderContainer,
  Quantity,
} from "./FeatureContainer";
import { addItem, getCurrentItemQuantityById } from "../cart/cartSlice";

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

const StyledReviewCard = styled.div`
  display: grid;

  grid-auto-flow: column;

  grid-auto-columns: 28%;

  padding: 0 1rem;

  column-gap: ${() => clampBuilder(320, 1200, 2.5, 4)};

  overflow-x: auto;

  scroll-snap-type: x mandatory;

  scroll-padding: ${() => clampBuilder(320, 1200, 2.5, 4)};

  padding-bottom: ${() => clampBuilder(320, 1200, 2.5, 4)};
  margin-bottom: ${() => clampBuilder(320, 1200, 2.8, 5.5)};

  @media (max-width: 920px) {
    grid-auto-columns: 37%;
  }

  @media (max-width: 500px) {
    grid-auto-columns: 43%;
  }
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
          <Text type="product"> {description} </Text>
          <ProductPrice> {formatCurrency(price)} </ProductPrice>
          {!isInCart ? (
            <Button size="large" onClick={() => handleAddToCart()}>
              {" "}
              add to cart{" "}
            </Button>
          ) : (
            <UpdateCartItem currentQuantity={currentQuantity} id={_id} />
          )}
        </DescriptionContainer>
      </Container>

      <FeatureBox>
        <div style={{ flexBasis: "60%" }}>
          <Heading> Features </Heading>
          <FeatureContainer>
            {productFeature.map((feat, i) => (
              <FeatureText key={i}> {feat} </FeatureText>
            ))}
          </FeatureContainer>
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
