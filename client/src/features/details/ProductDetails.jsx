// https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4

// https://youtu.be/FErIfEd3IHI?si=bQHsyv4Le3WgbiK6

import Modal from "../../ui/Modal";
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
import EditReviewForm from "../../ui/CreateEditReviewForm";
import { StyledAddReview, StyledReviewCard } from "./Reviews";
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

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonLoader from "../skeleton/SkeletonLoader";

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

  // if (isLoading) return <Spinner />;

  const src = image?.startsWith("https") ? image : `/assets/product/${image}`;

  const productFeature = features?.split("\n");

  const currentUser = JSON.parse(localStorage.getItem("user"));

  return (
    <Modal>
      <ProductContainer>
        <SmallButton onClick={moveback} kind="back">
          {" "}
          Go Back{" "}
        </SmallButton>
        <Container>
          <ImageContainer style={{ gridColumn: "1 / 2" }}>
            {isLoading ? (
              <Skeleton height={"100%"} width={"100%"} />
            ) : (
              <img src={src} alt={`product-${name}`} />
            )}
          </ImageContainer>

          <DescriptionContainer>
            {isLoading ? (
              <NewProduct>
                <Skeleton />
              </NewProduct>
            ) : (
              isNew && <NewProduct> new product </NewProduct>
            )}
            {/* {isNew && <NewProduct> new product </NewProduct>} */}

            <ProductName> {isLoading ? <Skeleton /> : name} </ProductName>

            <Text type="product">
              {" "}
              {isLoading ? <Skeleton count={6} /> : description}{" "}
            </Text>
            <ProductPrice>
              {" "}
              {isLoading ? <Skeleton /> : formatCurrency(price)}{" "}
            </ProductPrice>

            {isLoading ? (
              <SkeletonLoader>
                <Skeleton />{" "}
              </SkeletonLoader>
            ) : !isInCart ? (
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
            <Heading> {isLoading ? <Skeleton /> : "Features"} </Heading>
            <FeatureContainer>
              {isLoading ? (
                <FeatureText>
                  {" "}
                  <Skeleton />{" "}
                </FeatureText>
              ) : (
                productFeature?.map((feat, i) => (
                  <FeatureText key={i}> {feat} </FeatureText>
                ))
              )}

              {/* {productFeature?.map((feat, i) => (
                <FeatureText key={i}> {feat} </FeatureText>
              ))} */}
            </FeatureContainer>
          </div>

          <IntheBoxAndHeaderContainer>
            <Heading> {isLoading ? <Skeleton /> : "in the box"} </Heading>

            <InTheBoxContainer>
              {isLoading ? (
                <InTheBox>
                  <Quantity>
                    {" "}
                    <Skeleton />{" "}
                  </Quantity>
                  <FeatureText>
                    {" "}
                    <Skeleton />{" "}
                  </FeatureText>
                </InTheBox>
              ) : (
                includes?.map((item) => (
                  <InTheBox key={item._id}>
                    <Quantity> {item.quantity + "x"} </Quantity>
                    <FeatureText> {item.item} </FeatureText>
                  </InTheBox>
                ))
              )}

              {/* {includes?.map((item) => (
                <InTheBox key={item._id}>
                  <Quantity> {item.quantity + "x"} </Quantity>
                  <FeatureText> {item.item} </FeatureText>
                </InTheBox>
              ))} */}
            </InTheBoxContainer>
          </IntheBoxAndHeaderContainer>
        </FeatureBox>

        <GalleryContainer>
          {isLoading ? (
            <Skeleton height={"100%"} width={"100%"} />
          ) : (
            <img src={`/assets/product/${first}`} alt="GalleryImage 1" />
          )}
          {isLoading ? (
            <Skeleton height={"100%"} width={"100%"} />
          ) : (
            <img src={`/assets/product/${second}`} alt="GalleryImage 1" />
          )}
          {isLoading ? (
            <Skeleton height={"100%"} width={"100%"} />
          ) : (
            <img src={`/assets/product/${third}`} alt="GalleryImage 1" />
          )}
        </GalleryContainer>

        <Heading type="review"> Our customers review </Heading>

        {isLoading ? (
          <StyledAddReview>
            {" "}
            <Skeleton />
          </StyledAddReview>
        ) : (
          currentUser && (
            <Modal.Open opens="add-review">
              <StyledAddReview>
                {" "}
                <FaPlus /> <span> Add Review </span>{" "}
              </StyledAddReview>
            </Modal.Open>
          )
        )}

        {/* {currentUser && (
          <Modal.Open opens="add-review">
            <StyledAddReview>
              {" "}
              <FaPlus /> <span> Add Review </span>{" "}
            </StyledAddReview>
          </Modal.Open>
        )} */}

        <Modal.Window page="create-review" name="add-review">
          <EditReviewForm productId={_id} />
        </Modal.Window>

        <StyledReviewCard>
          {isLoading
            ? Array(5)
                .fill(2)
                .map((_, i) => <Skeleton key={i} />)
            : reviews?.length &&
              reviews
                .slice()
                .reverse()
                ?.map((review) => (
                  <ReviewCard reviews={review} key={review.id} />
                ))}

          {/* {reviews?.length &&
            reviews
              .slice()
              .reverse()
              ?.map((review) => (
                <ReviewCard reviews={review} key={review.id} />
              ))} */}
        </StyledReviewCard>

        {product && <Heading type="others"> You may also like </Heading>}

        <OtherItemContainer>
          {isLoading
            ? Array(3)
                .fill(8)
                .map((_, i) => (
                  <OthersContainer key={i}>
                    {" "}
                    <Skeleton />{" "}
                  </OthersContainer>
                ))
            : others?.map((item) => {
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
    </Modal>
  );
}

export default ProductDetails;
