import styled from "styled-components";
import Table from "../../ui/Table";
import { useState } from "react";
import Menu from "../../ui/Menu";
import { HiPencil, HiTrash } from "react-icons/hi2";

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
    id,
    product: { image, name },
  } = data || {};

  const collapsedWord =
    review.slice().split(" ").slice(0, 10).join(" ") + "...";

  //   const reviewedProduct = name.slice().split(" ").slice(0, -1).join(" ");

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

      <div>
        <Menu>
          <Menu.Toggle id={id} />

          <Menu.List id={id}>
            <li>
              <Menu.Button icon={<HiPencil />}> Edit </Menu.Button>
            </li>

            <li>
              <Menu.Button icon={<HiTrash />}> Delete </Menu.Button>
            </li>
          </Menu.List>
        </Menu>
      </div>
    </Table.Row>
  );
}

export default ReviewItem;
