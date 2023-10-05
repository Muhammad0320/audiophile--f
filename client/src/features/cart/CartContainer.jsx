import styled from "styled-components";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";

const StyledCartContainer = styled.div`
  grid-column: 2 / -1;
  overflow: auto;
  margin: 0 3rem;
`;

function CartContainer() {
  const isLoading = false;

  return (
    <StyledCartContainer>
      <Table column="0.9fr 1fr max-content 2.2fr 1.4fr">
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
          <Table.Body data={""} render={(review) => {}} />
        )}
      </Table>
    </StyledCartContainer>
  );
}

export default CartContainer;
