import styled, { css } from "styled-components";
import Table from "../../ui/Table";

import { format } from "date-fns";
import { HiEye } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helper";
import { clampBuilder } from "../../styles/clampFunction";
import { useViewport } from "../../context/ViewPort";

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
    font-size: ${() => clampBuilder(650, 1200, 1, 1.2)};
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

const PriceContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  font-size: ${() => clampBuilder(320, 1200, 0.7, 1)};

  row-gap: ${() => clampBuilder(320, 650, 0.2, 0.5)};

  & > span:first-child {
    font-size: ${() => clampBuilder(320, 650, 1, 1.1)};
  }

  & > span:nth-child(2) {
    font-size: ${() => clampBuilder(320, 650, 0.8, 1)};
  }
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

const ProductInfoContainer = styled.p`
  font-size: ${() => clampBuilder(320, 650, 0.9, 1.2)};
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

  const { viewportWidth } = useViewport();

  return (
    <Table.Row>
      <ID> #{id} </ID>

      {viewportWidth <= 650 ? (
        <ProductInfoContainer>
          <span> {totalCartQuantity} </span> --{" "}
          <ProductInfo>{data}</ProductInfo>
        </ProductInfoContainer>
      ) : (
        <>
          <NoProducts> {totalCartQuantity} </NoProducts>
          <ProductInfo> {data} </ProductInfo>
        </>
      )}

      <Status status={"paid"}> {status} </Status>
      {viewportWidth <= 650 ? (
        <PriceContainer>
          <div> {formatCurrency(totalOrderPrice)} </div>

          <div> {createdDate} </div>
        </PriceContainer>
      ) : (
        <>
          <div style={{ fontSize: `${clampBuilder(650, 1200, 1.2, 2)}` }}>
            {" "}
            {formatCurrency(totalOrderPrice)}{" "}
          </div>

          <div style={{ fontSize: `${clampBuilder(650, 1200, 1.2, 2)}` }}>
            {" "}
            {createdDate}{" "}
          </div>
        </>
      )}

      <Icon>
        {" "}
        <HiEye />{" "}
      </Icon>
    </Table.Row>
  );
}

export default OrderTableItem;
