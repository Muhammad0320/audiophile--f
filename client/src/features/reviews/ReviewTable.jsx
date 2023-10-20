import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import ReviewItem from "./ReviewItem";
import { useGetUserReview } from "./useGetUserReviews";
import { clampBuilder } from "../../styles/clampFunction";

const ReviewContainer = styled.div`
  grid-column: 2 / -1;
  overflow: auto;
  margin: 0 ${() => clampBuilder(650, 1200, 1.2, 3)};

  @media (max-width: 650) {
    margin: 0;
  }
`;

function ReviewTable() {
  const { reviews = [], isLoading } = useGetUserReview();

  return (
    <ReviewContainer>
      <Table
        column={` ${clampBuilder(
          320,
          1200,
          3.5,
          8
        )}  1fr minmax(0, 2.3fr) minmax(0, ${clampBuilder(
          320,
          1200,
          2,
          5
        )}) minmax( 0, 1fr)`}
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
