import styled from "styled-components";
import Table from "../../ui/Table";
import { useState } from "react";
import Menu from "../../ui/Menu";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import DeleteConfirm from "../../ui/DeleteConfirm";
import { useDeleteReview } from "./useDeleteReview";
import EditReviewForm from "../../ui/EditReviewForm";

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

  const { deleteReview, isDeleting } = useDeleteReview();

  const {
    review,
    rating,
    id,
    product: { image, name },
  } = data || {};

  const rev =
    review.slice().split(" ").length > 10 && !expand
      ? review.slice().split(" ").slice(0, 10).join(" ") + "..."
      : review;

  //   const reviewedProduct = name.slice().split(" ").slice(0, -1).join(" ");

  return (
    <Table.Row>
      <Image src={image} />
      <Name> {name} </Name>
      <Review>
        <div>{rev}</div>
        {"  "}{" "}
        {review.slice().split(" ").length > 10 ? (
          <span onClick={() => setExpand((expand) => !expand)}>
            {expand ? "show less" : "show more"}
          </span>
        ) : (
          ""
        )}
      </Review>

      <span> {rating} </span>
      <Modal>
        <div>
          <Menu>
            <Menu.Toggle id={id} />

            <Menu.List id={id}>
              <li>
                <Modal.Open opens="edit-review">
                  <Menu.Button icon={<HiPencil />}> Edit </Menu.Button>
                </Modal.Open>
              </li>

              <li>
                <Modal.Open opens="delete-review">
                  <Menu.Button icon={<HiTrash />}> Delete </Menu.Button>
                </Modal.Open>
              </li>
            </Menu.List>
          </Menu>

          <Modal.Window page="confirm-delete" name="delete-review">
            <DeleteConfirm
              OnConfirm={() => deleteReview({ id })}
              isDeleting={isDeleting}
              resource="review"
            />
          </Modal.Window>

          <Modal.Window page="edit-form" name="edit-review">
            <EditReviewForm review={data} />
          </Modal.Window>
        </div>
      </Modal>
    </Table.Row>
  );
}

export default ReviewItem;
