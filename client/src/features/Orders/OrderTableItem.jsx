import { format } from "date-fns";
import Table from "../../ui/Table";
import styled, { css } from "styled-components";
import { HiEye } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helper";
import { useViewport } from "../../context/ViewPort";
import { clampBuilder } from "../../styles/clampFunction";
import Modal from "../../ui/Modal";
import OrderProductDetails from "./OrderProductDetails";

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
  font-size: ${() => clampBuilder(650, 1200, 1, 1.5)};

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

const Icon = styled.a`
  font-size: ${() => clampBuilder(320, 1200, 1.5, 3)};

  color: var(--color-dark-2);

  cursor: pointer;

  transition: color 0.2s ease-in;

  &:hover {
    color: var(--color-primary);
  }
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

const ProductInfoContainer = styled.p`
  font-size: ${() => clampBuilder(320, 650, 0.9, 1.2)};
`;

function OrderTableItem({ order }) {
  const { _id, createdAt, products, paid, totalPrice = 5000 } = order;

  const totalOrderPrice = formatCurrency(totalPrice / 100);

  const data = products
    .map((item) => `${item.quantity}X- ${item.productId.name}`)
    .join(" with ");

  const id = _id.slice(-6, -1);

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
          <div> {totalOrderPrice} </div>

          <div> {createdDate} </div>
        </PriceContainer>
      ) : (
        <>
          <div style={{ fontSize: `${clampBuilder(650, 1200, 0.8, 1.5)}` }}>
            {" "}
            {totalOrderPrice}{" "}
          </div>

          <div style={{ fontSize: `${clampBuilder(650, 1200, 0.8, 1.2)}` }}>
            {" "}
            {createdDate}{" "}
          </div>
        </>
      )}

      <Modal>
        <div>
          <Modal.Open opens="productDetails">
            <Icon title="Order details">
              <HiEye />
            </Icon>
          </Modal.Open>
        </div>

        <Modal.Window name="productDetails" page="details">
          <OrderProductDetails products={[...order.products]} />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default OrderTableItem;
