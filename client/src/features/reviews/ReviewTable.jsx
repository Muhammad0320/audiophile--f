import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import ReviewItem from "./ReviewItem";
import { useGetUserReview } from "./useGetUserReviews";
import { clampBuilder } from "../../styles/clampFunction";

const ReviewContainer = styled.div`
  grid-column: 2 / -1;
  overflow: auto;
  margin: 0 3rem;
`;

function ReviewTable() {
  const { reviews = [], isLoading } = useGetUserReview();

  return (
    <ReviewContainer>
      <Table
        column={`${clampBuilder(320, 1200, 3.5, 8)} 1fr 2.3fr 1.2fr 1.4fr`}
      >
        <Table.Header>
          <div></div>
          <div>Product</div>
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
    </ReviewContainer>
  );
}

export default ReviewTable;
