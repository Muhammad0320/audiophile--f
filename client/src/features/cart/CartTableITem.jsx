import styled from "styled-components";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helper";
import UpdateCartItem from "../../ui/UpdateCartItem";
import { HiXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import { clampBuilder } from "../../styles/clampFunction";

const Image = styled.img`
  display: block;

  width: ${() => clampBuilder(320, 1200, 4, 10)};
`;

const Price = styled.span`
  font-weight: 600;
  font-style: italic;
  font-size: ${() => clampBuilder(320, 1200, 1.2, 2)};
`;

const DeleteIcon = styled.span`
  color: var(--color-dark-3);

  font-size: ${() => clampBuilder(320, 1200, 1.3, 3.5)};

  font-weight: 600;

  cursor: pointer;

  line-height: 1;
  margin-left: auto;
  transition: color 0.3s cubic-bezier(0.82, 0.54, 0, 0.29);

  &:hover {
    color: var(--color-primary-light);
  }
`;

const Name = styled.span`
  display: flex;

  column-gap: 1re ${() => clampBuilder(320, 1200, 0.6, 1)};

  font-size: ${() => clampBuilder(320, 1200, 1.2, 2)};

  line-height: 1;
`;

function CartTableItem({ cart }) {
  const dispatch = useDispatch();

  const {
    quantity,
    product: { image, name, price, _id },
  } = cart;

  const productName = name.split(" ")[0];

  return (
    <>
      <Table.Row>
        <Image src={image} />

        <Name> {productName} </Name>

        <Price> {formatCurrency(+price)} </Price>

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
