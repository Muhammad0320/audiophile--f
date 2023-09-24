import { useNavigate, useParams } from "react-router-dom";
import { fakeData } from "../../service/data";
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



const FeatureBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 15rem 0;
`;

const Heading = styled.h4`
  font-size: 3.5rem;
  font-weight: 600;

  color: var(--color-dark);
  margin-bottom: 3rem;
  text-transform: uppercase;

  ${(props) =>
    props.type === "others" &&
    css`
      text-align: center;
      margin-bottom: 3rem;
    `}
`;

const InTheBox = styled.div`
  display: flex;
  column-gap: 2rem;
  align-items: center;
`;

const InTheBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const Quantity = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-primary);
`;

const GalleryContainer = styled.div`
  margin-bottom: 15rem;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 3rem;

  & > img:first-of-type {
    grid-row: 1 / 2;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    grid-column: 1 / 2;
  }

  & > img:nth-of-type(2) {
    grid-row: 2 / -1;
    grid-column: 1 / 2;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & > img:last-of-type {
    grid-row: 1 / -1;
    grid-column: 2 / -1;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductContainer = styled.div`
  margin: 15rem 0;
`;

const OthersContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr max-content;
  column-gap: 3rem;
  color: var(--color-dark);
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
  column-gap: 2rem;
  align-items: center;
  font-size: 3.5rem;
  font-weight: 500;
`;

function ProductDetails() {
  const { productID } = useParams();

  const product = fakeData.find((data) => data.id === +productID);

  const navigate = useNavigate();

  const {
    new: isNew,
    price,
    includes,
    image: { desktop: productImage },
    name,
    features,
    id,
    gallery,
    description,
    others,
  } = product;

  const {
    first: { desktop: galleryImage1 },
    second: { desktop: galleryImage2 },
    third: { desktop: galleryImage3 },
  } = gallery;

  const { moveBack } = useMoveBack();

  const dispatch = useDispatch();

  const cartName = name.split(" ").slice(0, -1).join(" ");
  const handleAddToCart = () => {
    const newCartItem = {
      productID: id,
      cartImage: productImage,
      cartName,
      unitPrice: price,
      totalPrice: price * 1,
      quantity: 1,
    };

    dispatch(addItem(newCartItem));
  };

  const currentQuantity = useSelector(getCurrentItemQuantityById(id));

  const isInCart = currentQuantity > 0;

  return (
    <ProductContainer>
      <SmallButton onClick={moveBack} kind="back">
        {" "}
        Go Back{" "}
      </SmallButton>
      <Container>
        <ImageContainer style={{ gridColumn: "1 / 2" }}>
          <img src={productImage} alt="product" />
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
            <UpdateCartItem currentQuantity={currentQuantity} id={id} />
          )}
        </DescriptionContainer>
      </Container>

      <FeatureBox>
        <div style={{ flexBasis: "70%" }}>
          <Heading> Features </Heading>
          <Text> {features} </Text>
        </div>

        <div>
          <Heading> in the box </Heading>

          <InTheBoxContainer>
            {includes.map((item) => (
              <InTheBox>
                <Quantity> {item.quantity + "x"} </Quantity>
                <Text> {item.item} </Text>
              </InTheBox>
            ))}
          </InTheBoxContainer>
        </div>
      </FeatureBox>

      <GalleryContainer>
        <img src={galleryImage1} alt="GalleryImage 1" />
        <img src={galleryImage2} alt="GalleryImage 2" />
        <img src={galleryImage3} alt="GalleryImage 3 " />
      </GalleryContainer>

      <Heading type="others"> You may also like </Heading>
      <OthersContainer>
        {others.map((item) => {
          const currentItemID = fakeData.find((el) => el.slug === item.slug).id;

          return (
            <>
              <OtherImageContainer>
                <img src={item?.image?.desktop} alt=" OtherImage " />
              </OtherImageContainer>

              <OtherTextBox>
                <p> {item.name} </p>
                <Button onClick={() => navigate(`/product/${currentItemID}`)}>
                  {" "}
                  see product{" "}
                </Button>
              </OtherTextBox>
            </>
          );
        })}
      </OthersContainer>
    </ProductContainer>
  );
}

export default ProductDetails;
