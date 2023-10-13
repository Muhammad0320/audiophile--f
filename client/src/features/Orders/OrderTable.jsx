import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import OrderTableItem from "./OrderTableItem";
import { useGetCurrentUserOrder } from "./useGetCurrentUserOrder";

function OrderTable() {
  const { myOrder, isLoading } = useGetCurrentUserOrder();

  if (isLoading) return <Spinner />;

  return (
    <Table column="0.4fr 0.3fr 1.2fr 0.4fr 0.5fr 0.4fr 0.3fr" role="table">
      <Table.Header>
        <div> Order ID </div>
        <div> No of product </div>
        <div> Product info </div>
        <div> Status </div>
        <div> Total </div>
        <div> Date </div>
        <div>Action</div>
      </Table.Header>

      <Table.Body
        data={myOrder}
        render={(order) => <OrderTableItem order={order} />}
      />
    </Table>
  );
}

export default OrderTable;
