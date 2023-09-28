import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import ReviewItem from "./ReviewItem";
import { useGetUserReview } from "./useGetUserReviews";

function ReviewTable() {
  const { reviews = [], isLoading } = useGetUserReview();

  return (
    <Table column="0.9fr 1fr 2fr 1.2fr 1.4fr">
      <Table.Header>
        <div></div>
        <div>Name</div>
        <div>Review</div>
        <div>Rating</div>
        <div></div>
      </Table.Header>

      {isLoading ? (
        <Spinner />
      ) : (
        <Table.Body
          data={reviews}
          render={(review) => <ReviewItem data={review} key={review._id} />}
        />
      )}
    </Table>
  );
}

export default ReviewTable;
