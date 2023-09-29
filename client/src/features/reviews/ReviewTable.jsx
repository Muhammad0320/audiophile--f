import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import ReviewItem from "./ReviewItem";
import { useGetUserReview } from "./useGetUserReviews";

const ReviewContainer = styled.div`
  grid-column: 2 / -1;
  overflow: auto;
  margin: 0 3rem;

  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ReviewTable() {
  const { reviews = [], isLoading } = useGetUserReview();

  return (
    <ReviewContainer>
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
    </ReviewContainer>
  );
}

export default ReviewTable;
