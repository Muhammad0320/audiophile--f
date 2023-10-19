import styled, { css } from "styled-components";
import Table from "../../ui/Table";

import { format } from "date-fns";
import { HiEye } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helper";
import { clampBuilder } from "../../styles/clampFunction";

const ID = styled.span`
  font-size: ${() => clampBuilder(650, 1200, 1, 1.5)};

  @media (max-width: 650px) {
    font-size: ${() => clampBuilder(320, 650, 0.6, 1)};
  }
`;

const NoProducts = styled.span`
  font-size: ${() => clampBuilder(650, 1200, 1, 2)};
  font-weight: 500;

  text-align: center;

  @media (max-width: 650px) {
    font-size: ${() => clampBuilder(320, 650, 0.6, 1)};
  }
`;

const ProductInfo = styled.span`
  font-size: ${() => clampBuilder(650, 1200, 1, 2)};

  @media (max-width: 650px) {
    font-size: ${() => clampBuilder(320, 650, 0.6, 1)};
  }
`;

const Status = styled.span`
  font-size: ${() => clampBuilder(650, 1200, 1.2, 2)};
  text-align: center;

  @media (max-width: 650px) {
    font-size: ${() => clampBuilder(650, 1200, 0.7, 1.2)};
  }

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
  font-size: ${() => clampBuilder(320, 1200, 1.4, 3)};

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

      <div style={{ fontSize: `${clampBuilder(320, 1200, 1, 1.8)}` }}>
        {" "}
        {formatCurrency(totalOrderPrice)}{" "}
      </div>

      <div style={{ fontSize: `${clampBuilder(320, 1200, 1, 1.8)}` }}>
        {" "}
        {createdDate}{" "}
      </div>

      <Icon>
        {" "}
        <HiEye />{" "}
      </Icon>
    </Table.Row>
  );
}

export default OrderTableItem;
