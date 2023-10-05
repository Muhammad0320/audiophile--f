import styled from "styled-components";
import Table from "../../ui/Table";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import { formatCurrency } from "../../utils/helper";
import UpdateCartItem from "../../ui/UpdateCartItem";
import { HiXMark } from "react-icons/hi2";

const Image = styled.img`
  display: block;

  height: 5rem;
  width: 5rem;

  object-fit: cover;
`;

const Price = styled.span`
  font-weight: 600;

  font-size: 2rem;
`;

const DeleteIcon = styled.span`
  color: var(--color-dark-2);

  font-size: 2.5rem;

  transition: color 0.3s ease-in;

  &:hover {
    color: var(--color-primary-light);
  }
`;

const Name = styled.span`
  display: flex;

  column-gap: 1rem;

  font-size: 2rem;
`;

function CartTableITem({ cart }) {
  const {
    quantity,
    product: { image, name, price, _id },
  } = cart;

  return (
    <Table.Row>
      <Image src={image} />

      <Name> {name} </Name>

      <Price> {formatCurrency(+price)} </Price>

      <UpdateCartItem type="cart" currentQuantity={quantity} id={_id} />

      <DeleteIcon> {<HiXMark />} </DeleteIcon>
    </Table.Row>
  );
}

export default CartTableITem;
