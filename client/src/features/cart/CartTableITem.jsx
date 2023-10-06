import styled from "styled-components";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helper";
import UpdateCartItem from "../../ui/UpdateCartItem";
import { HiXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import Button from "../../ui/Button";

const Image = styled.img`
  display: block;

  height: 6rem;
  width: 6rem;
`;

const Price = styled.span`
  font-weight: 600;

  font-size: 2rem;
`;

const DeleteIcon = styled.span`
  color: var(--color-dark-3);

  font-size: 3.5rem;

  font-weight: 600;

  cursor: pointer;

  transition: color 0.3s cubic-bezier(0.82, 0.54, 0, 0.29);

  &:hover {
    color: var(--color-primary-light);
  }
`;

const Name = styled.span`
  display: flex;

  column-gap: 1rem;

  font-size: 2rem;

  line-height: 1;
`;

function CartTableItem({ cart }) {
  const dispatch = useDispatch();

  const {
    quantity,
    product: { image, name, price, _id },
  } = cart;

  const productName = name.split(" ")[0];

  console.log("ooooh let see");

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
