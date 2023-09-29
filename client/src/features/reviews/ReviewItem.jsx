import styled from "styled-components";
import Table from "../../ui/Table";
import { useState } from "react";

const Image = styled.img`
  display: inline-block;
  height: 8rem;
  width: 8rem;
`;

const Review = styled.span`
  font-size: 1.4rem;

  font-size: 500;

  & > span:last-of-type {
    color: var(--color-primary);
    cursor: pointer;
  }
`;

const Name = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
`;

function ReviewItem({ data }) {
  const [expand, setExpand] = useState(false);

  const {
    review,
    rating,
    product: { image, name },
  } = data || {};

  const collapsedWord =
    review.slice().split(" ").slice(0, 10).join(" ") + "...";

  return (
    <Table.Row>
      <Image src={image} />
      <Name> {name} </Name>
      <Review>
        <span>{expand ? review : collapsedWord}</span>
        {"  "}{" "}
        <span onClick={() => setExpand((expand) => !expand)}>
          {expand ? "show less" : "show more"}
        </span>
      </Review>

      <span> {rating} </span>

      <div></div>
    </Table.Row>
  );
}

export default ReviewItem;
