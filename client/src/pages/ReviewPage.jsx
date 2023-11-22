import styled from "styled-components";
import ReviewTable from "../features/reviews/ReviewTable";

const ReviewContainer = styled.div`
  grid-column: 2 / -1;
`;

function ReviewPage() {
  return (
    <ReviewContainer>
      <ReviewTable />;
    </ReviewContainer>
  );
}

export default ReviewPage;
