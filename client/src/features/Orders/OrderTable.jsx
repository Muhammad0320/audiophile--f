import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import OrderTableItem from "./OrderTableItem";
import { useViewport } from "../../context/ViewPort";
import { useGetCurrentUserOrder } from "./useGetCurrentUserOrder";
import styled from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";

const OrderContainer = styled.div`
  padding-block: ${() => clampBuilder(320, 1200, 1.5, 3.5)};

  padding-inline: ${() => clampBuilder(320, 1200, 2, 4)};
`;

function OrderTable() {
  const { myOrder, isLoading } = useGetCurrentUserOrder();
  const { viewportWidth } = useViewport();

  if (isLoading) return <Spinner />;

  const column =
    viewportWidth >= 650
      ? "minmax(0, 0.4fr) minmax(0, 0.3fr) minmax(0, 1.2fr) minmax(0, 0.4fr) minmax(0, 0.5fr) minmax(0, 0.5fr) minmax(0, 0.2fr)  "
      : "minmax(0, 0.4fr) minmax(0, 1.35fr) minmax(0, 0.3fr) minmax(0, 0.5fr) minmax(0, 0.25fr);";

  return (
    <OrderContainer>
      <Table column={column} role="table">
        {isLoading ? (
          <Spinner />
        ) : (
          <Table.Body
            data={myOrder}
            render={(order) => <OrderTableItem order={order} key={order._id} />}
          />
        )}
      </Table>
    </OrderContainer>
  );
}

export default OrderTable;
