import Table from "../../ui/Table";

function ReviewTable() {
  return (
    <Table column="0.9fr 1fr 2fr 1.2fr 1.4fr">
      <Table.Header>
        <div></div>
        <div>Name</div>
        <div>Review</div>
        <div>Rating</div>
        <div></div>
      </Table.Header>
    </Table>
  );
}

export default ReviewTable;
