import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import OrderTableItem from "./OrderTableItem";
import { useGetCurrentUserOrder } from "./useGetCurrentUserOrder";

function OrderTable() {
  const { myOrder, isLoading } = useGetCurrentUserOrder();

  if (isLoading) return <Spinner />;

  return (
    <Table
      column="minmax(0, 0.4fr) minmax(0, 0.4fr) minmax(0, 1.2fr) minmax(0, 0.4fr) minmax(0, 0.5fr) minmax(0, 0.5fr) minmax(0, 0.2fr);"
      role="table"
    >
      <Table.Header>
        <div> Order ID </div>
        <div> No. product </div>
        <div> Product info </div>
        <div> Status </div>
        <div> Total </div>
        <div> Date </div>
        <div></div>
      </Table.Header>

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
