import styled from "styled-components";
import Table from "../../ui/Table";

const Image = styled.img`
  display: inline-block;
  height: 6rem;
  width: 6rem;
`;

const Review = styled.span`
  font-size: 1.2rem;

  font-size: 500;
`;

const Name = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
`;

function ReviewItem({ data }) {
  const {
    review,
    rating,
    product: { image, name },
  } = data || {};

  return (
    <Table.Row>
      <Image src={image} />
      <Name> {name} </Name>
      <Review> {review} </Review>
      <span> {rating} </span>
    </Table.Row>
  );
}

export default ReviewItem;
