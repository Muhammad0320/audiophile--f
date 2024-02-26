// https://youtu.be/FErIfEd3IHI?si=bQHsyv4Le3WgbiK6

import Modal from "../../ui/Modal";
import { Text } from "../../ui/Text";
import Button from "../../ui/Button";

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
import { ButtonSkeleton } from "../skeleton/ButtonSkeleton";

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
            {isNew && <NewProduct> new product </NewProduct>}

            <ProductName> {isLoading ? <Skeleton /> : name} </ProductName>

            <Text type="product">
              {" "}
              {isLoading ? <Skeleton count={6} /> : description}{" "}
            </Text>
            <ProductPrice>
              {" "}
              {isLoading ?  <ButtonSkeleton  >
                <Skeleton />
              </ButtonSkeleton> : formatCurrency(price)}{" "}
            </ProductPrice>

            {isLoading ? (
              <ButtonSkeleton type='other' >
                <Skeleton />
              </ButtonSkeleton>
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
            <Heading> Features </Heading>

            <FeatureContainer>
              {isLoading
                ? Array(2)
                    .fill(8)
                    .map((_, i) => (
                      <FeatureText key={i}>
                        {" "}
                        <Skeleton count={4} />{" "}
                      </FeatureText>
                    ))
                : productFeature?.map((feat, i) => (
                    <FeatureText key={i}> {feat} </FeatureText>
                  ))}


            </FeatureContainer>
          </div>

          <IntheBoxAndHeaderContainer>
            <Heading> in the box </Heading>

            <InTheBoxContainer>
              {isLoading
                ? Array(5)
                    .fill(2)
                    .map((_, i) => (
                      <>
                        <InTheBox key={i}>
                          <Quantity
                            style={{ flex: "0 0 20%" }}
                            className="flex-container"
                          >
                            <Skeleton height={"100%"} />
                          </Quantity>
                          <FeatureText
                            className="flex-container"
                            style={{ flex: "1 1 auto" }}
                          >
                            <Skeleton
                              height={"100%"}
                              width={"100%"}
                              containerClassName="flex-container"
                            />
                          </FeatureText>
                        </InTheBox>
                      </>
                    ))
                : includes?.map((item) => (
                    <InTheBox key={item._id}>
                      <Quantity> {item.quantity + "x"} </Quantity>
                      <FeatureText> {item.item} </FeatureText>
                    </InTheBox>
                  ))}

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
            <Skeleton
              height={"100%"}
              width={"100%"}
              className="flex-container"
            />
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

        {!isLoading && currentUser && (
          <Modal.Open opens="add-review">
            <StyledAddReview>
              {" "}
              <FaPlus /> <span> Add Review </span>{" "}
            </StyledAddReview>
          </Modal.Open>
        )}

        <Modal.Window page="create-review" name="add-review">
          <EditReviewForm productId={_id} />
        </Modal.Window>

        <StyledReviewCard>
          {isLoading
            ? // <SkeletonMap count={7}>
              //   <Skeleton height={"100%"} width={"100%"} />
              // </SkeletonMap>
              Array(7)
                .fill(0)
                .map((_, i) => (
                  <Skeleton
                    key={i}
                    height={"100%"}
                    width={"100%"}
                    style={{ minHeight: "20rem" }}
                  />
                ))
            : reviews?.length &&
              reviews
                .slice()
                .reverse()
                ?.map((review) => (
                  <ReviewCard reviews={review} key={review.id} />
                ))}
        </StyledReviewCard>

        {product && <Heading type="others"> You may also like </Heading>}

        <OtherItemContainer>
          {isLoading
            ? Array(3)
                .fill(0)
                .map((_, i) => (
                  <OtherTextBox
                    className="flex-container"
                    key={i}
                    style={{ display: "block" }}
                  >
                    <Skeleton
                      height={"100%"}
                      width={"100%"}
                      style={{ minHeight: "25rem" }}
                      containerClassName="flex-container"
                    />
                    <ButtonSkeleton center="true" type="other">
                      <Skeleton height={"100%"} width={"100%"} />
                    </ButtonSkeleton>
                    <ButtonSkeleton center="true">
                      <Skeleton />
                    </ButtonSkeleton>
                  </OtherTextBox>
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
                        see product
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

// muhammawwal@005

export default ProductDetails;
