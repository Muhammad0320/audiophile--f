import styled, { css } from "styled-components";
import Table from "../../ui/Table";

import { format } from "date-fns";
import { HiEye } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helper";

const ID = styled.span`
  font-size: var(--font-tiny);
`;

const NoProducts = styled.span`
  font-size: var(--font-small);
  font-weight: 500;

  text-align: center;
`;

const ProductInfo = styled.span`
  font-size: var(--font-tiny);
`;

const Status = styled.span`
  font-size: var(--font-small);
  text-align: center;

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

const Icon = styled.span`
  color: var(--color-dark-2);
  font-size: var(--font-medium);

  text-align: center;
  cursor: pointer;
  transition: color 0.2;

  &:hover {
    color: var(--color-primary-muted);
  }
`;

function OrderTableItem({ order }) {
  const { _id, createdAt, products, paid } = order;

  const data = products
    .map((item) => `${item.quantity}X- ${item.productId.name}`)
    .join(" with ");

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

      <ProductInfo>{data}</ProductInfo>

      <Status status={"paid"}> {status} </Status>

      <div style={{ fontSize: "var(--font-tiny)" }}>
        {" "}
        {formatCurrency(totalOrderPrice)}{" "}
      </div>

      <div style={{ fontSize: "var(--font-tiny)" }}> {createdDate} </div>

      <Icon>
        {" "}
        <HiEye />{" "}
      </Icon>
    </Table.Row>
  );
}

export default OrderTableItem;
