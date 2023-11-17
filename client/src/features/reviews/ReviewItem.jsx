import styled from "styled-components";
import Table from "../../ui/Table";
import { useState } from "react";
import Menu from "../../ui/Menu";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import DeleteConfirm from "../../ui/DeleteConfirm";
import { useDeleteReview } from "./useDeleteReview";
import EditReviewForm from "../../ui/EditReviewForm";
import { ReviewRating } from "../../ui/StarRating";
import { clampBuilder } from "../../styles/clampFunction";
import { useViewport } from "../../context/ViewPort";

const Image = styled.img`
  display: inline-block;
  height: ${() => clampBuilder(320, 1200, 3.5, 8)};
  width: ${() => clampBuilder(320, 1200, 3.5, 8)};
`;

const Review = styled.span`
  font-size: ${() => clampBuilder(320, 1200, 0.8, 1.4)};

  font-size: 500;

  & > span:last-of-type {
    color: var(--color-primary);
    cursor: pointer;
  }
`;

const RatingsContainer = styled.div`
  font-size: ${() => clampBuilder(320, 1200, 1, 1.5)};

  text-wrap: nowrap;
`;

const Name = styled.span`
  font-size: ${() => clampBuilder(320, 1200, 1.2, 1.6)};
  font-weight: 600;
`;

function ReviewItem({ data }) {
  const [expand, setExpand] = useState(false);

  const { viewportWidth } = useViewport();

  const numberToCheck = viewportWidth >= 650 ? 10 : 6;

  const ratingIconSize = viewportWidth < 750 ? 14 : 18;

  const { deleteReview, isDeleting } = useDeleteReview();

  const {
    review,
    rating,
    id,
    product: { image, name },
  } = data || {};

  const rev =
    review.slice().split(" ").length > numberToCheck && !expand
      ? review.slice().split(" ").slice(0, numberToCheck).join(" ") + "..."
      : review;

  const src = image.startsWith("https") ? image : `/assets/product/${image}`;

  const cartName = name.split(" ")[0];

  return (
    <Table.Row>
      <Image src={src} />
      <Name> {cartName} </Name>
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

      {viewportWidth <= 650 ? (
        <RatingsContainer> {rating} stars </RatingsContainer>
      ) : (
        <span>
          {" "}
          <ReviewRating maxRating={5} rating={+rating} size={ratingIconSize} />
        </span>
      )}

      <Modal>
        <div>
          <Menu>
            <Menu.Toggle id={id} />

            <Menu.List id={id}>
              <li>
                <Modal.Open opens="editReview">
                  <Menu.Button icon={<HiPencil />}> Edit </Menu.Button>
                </Modal.Open>
              </li>

              <li>
                <Modal.Open opens="deleteReview">
                  <Menu.Button icon={<HiTrash />}> Delete </Menu.Button>
                </Modal.Open>
              </li>
            </Menu.List>
          </Menu>

          <Modal.Window page="confirmDelete" name="deleteReview">
            <DeleteConfirm
              OnConfirm={() => deleteReview({ id })}
              isDeleting={isDeleting}
              resource="review"
            />
          </Modal.Window>

          <Modal.Window page="menu" name="editReview">
            <EditReviewForm review={data} />
          </Modal.Window>
        </div>
      </Modal>
    </Table.Row>
  );
}

export default ReviewItem;
