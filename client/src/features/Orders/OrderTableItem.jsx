import styled, { css } from "styled-components";
import Table from "../../ui/Table";
import OrderNameQuantity from "./OrderNameQuantity";

import { format } from "date-fns";
import { HiXMark } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helper";

const ID = styled.span`
  font-size: var(--font-tiny);
`;

const NoProducts = styled.span`
  font-size: var(--font-small);
  font-weight: 500;
`;

const ProductInfo = styled.span`
  font-size: var(--font-tiny);
`;

const Status = styled.span`
  font-size: var(--font-small);

  ${(props) =>
    props.status === "paid" &&
    css`
      color: var(--color-green);
    `}

  ${(props) =>
    props.status === "cancel" &&
    css`
      color: var(--color-red-dark);
    `}
`;

function OrderTableItem({ order }) {
  const { _id, createdAt, products, paid } = order;

  const id = _id.slice(-6, -1);

  const totalOrderPrice = products.reduce((acc, sum) => acc + sum.price, 0);

  const totalCartQuantity = products.reduce(
    (acc, sum) => acc + sum.quantity,
    0
  );

  const status = paid ? "paid" : "cancel";

  const createdDate = format(new Date(createdAt), "dd/MM/yyyy");

  return (
    <Table.Row>
      <ID> #{id} </ID>

      <NoProducts> {totalCartQuantity} </NoProducts>

      <ProductInfo>
        {products.map((item) => (
          <OrderNameQuantity
            name={item.productId.name}
            quantity={item.quantity}
          />
        ))}
      </ProductInfo>

      <Status status={"paid"}> {status} </Status>

      <div> {formatCurrency(totalOrderPrice)} </div>

      <div> {createdDate} </div>

      <div>
        {" "}
        <HiXMark />{" "}
      </div>
    </Table.Row>
  );
}

export default OrderTableItem;
