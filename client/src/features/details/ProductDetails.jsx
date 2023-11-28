// https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4

// https://youtu.be/FErIfEd3IHI?si=bQHsyv4Le3WgbiK6

import { Text } from "../../ui/Text";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { FaPlus } from "react-icons/fa6";
import { Heading } from "../../ui/Heading";
import { styled } from "styled-components";
import { useUser } from "../users/useUser";
import SmallButton from "../../ui/SmallButton";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../reviews/reviewCard";
import { formatCurrency } from "../../utils/helper";
import UpdateCartItem from "../../ui/UpdateCartItem";
import { GalleryContainer } from "./GalleryContainer";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductBySlug } from "./useProductBySlug";
import { clampBuilder } from "../../styles/clampFunction";
import { addItem, getCurrentItemQuantityById } from "../cart/cartSlice";
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
import {
  OtherImageContainer,
  OtherItemContainer,
  OtherTextBox,
  OthersContainer,
} from "./OtherProducts";
import { StyledAddReview, StyledReviewCard } from "./Reviews";

const ProductContainer = styled.div`
  margin: ${() => clampBuilder(320, 1200, 4, 5.5)} 0;
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
        <StyledAddReview>
          {" "}
          <FaPlus /> <span> Add Review </span>{" "}
        </StyledAddReview>
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
