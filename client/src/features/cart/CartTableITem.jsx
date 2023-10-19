import styled from "styled-components";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helper";
import UpdateCartItem from "../../ui/UpdateCartItem";
import { HiXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import { clampBuilder } from "../../styles/clampFunction";
import { useViewport } from "../../context/ViewPort";

const Image = styled.img`
  display: block;

  width: ${() => clampBuilder(320, 1200, 4, 10)};
`;

const Price = styled.span`
  font-weight: 600;
  font-style: italic;
  font-size: ${() => clampBuilder(320, 1200, 1.2, 2)};

  @media (max-width: 680px) {
    font-size: ${() => clampBuilder(320, 680, 0.6, 1)};
    font-weight: 400;
  }
`;

const DeleteIcon = styled.span`
  color: var(--color-dark-3);

  font-size: ${() => clampBuilder(650, 1200, 2.5, 3.5)};

  font-weight: 600;

  cursor: pointer;

  line-height: 1;
  margin-left: auto;
  transition: color 0.3s cubic-bezier(0.82, 0.54, 0, 0.29);

  @media (max-width: 650px) {
    font-size: ${() => clampBuilder(320, 1200, 1.2, 1.8)};
  }

  &:hover {
    color: var(--color-primary-light);
  }
`;

const NameContainer = styled.div`
  display: flex;
  flex-flow: column;

  row-gap: ${() => clampBuilder(320, 650, 0.3, 0.5)};
`;

const Name = styled.span`
  display: flex;

  column-gap: ${() => clampBuilder(320, 1200, 0.6, 1)};

  font-size: ${() => clampBuilder(320, 1200, 1.2, 2)};

  line-height: 1;

  @media (max-width: 650px) {
    font-size: ${() => clampBuilder(320, 1200, 1, 1.2)};
  }
`;

function CartTableItem({ cart }) {
  const dispatch = useDispatch();

  const {
    quantity,
    product: { image, name, price, _id },
  } = cart;

  const productName = name.split(" ")[0];

  const { viewportWidth } = useViewport();

  return (
    <>
      <Table.Row>
        <Image src={image} />

        {viewportWidth <= 680 ? (
          <NameContainer>
            <Name> {productName} </Name>
            <Price> {formatCurrency(price)} </Price>
          </NameContainer>
        ) : (
          <>
            <Name> {productName} </Name>

            <Price> {formatCurrency(+price)} </Price>
          </>
        )}

        <UpdateCartItem type="cart" currentQuantity={quantity} id={_id} />

        <DeleteIcon onClick={() => dispatch(deleteItem(_id))}>
          {" "}
          {<HiXMark />}{" "}
        </DeleteIcon>
      </Table.Row>
    </>
  );
}

export default CartTableItem;
