import { useViewport } from "../../context/ViewPort";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import OrderTableItem from "./OrderTableItem";
import { useGetCurrentUserOrder } from "./useGetCurrentUserOrder";

function OrderTable() {
  const { myOrder, isLoading } = useGetCurrentUserOrder();
  const { viewportWidth } = useViewport();

  if (isLoading) return <Spinner />;

  const column =
    viewportWidth >= 650
      ? "minmax(0, 0.4fr) minmax(0, 0.3fr) minmax(0, 1.2fr) minmax(0, 0.4fr) minmax(0, 0.5fr) minmax(0, 0.5fr) minmax(0, 0.2fr)  "
      : "minmax(0, 0.4fr) minmax(0, 1.35fr) minmax(0, 0.3fr) minmax(0, 0.5fr) minmax(0, 0.25fr);";

  return (
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
  );
}

export default OrderTable;
