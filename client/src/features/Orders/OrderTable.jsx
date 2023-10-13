import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import OrderTableItem from "./OrderTableItem";
import { useGetCurrentUserOrder } from "./useGetCurrentUserOrder";

function OrderTable() {
  const { myOrder, isLoading } = useGetCurrentUserOrder();

  console.log(myOrder);

  if (isLoading) return <Spinner />;

  return (
    <Table column=".4fr .2fr 1.2fr .4fr .5fr .4fr .3fr" role="table">
      <Table.Header>
        <div> Order ID </div>
        <div> No of product(s) </div>
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
