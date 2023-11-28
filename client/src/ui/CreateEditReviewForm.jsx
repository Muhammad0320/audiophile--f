import Form2 from "./Form2";
import Input from "./Input";
import Button from "./Button";
import FormRow from "./FormRow";
import styled from "styled-components";
import SpinnerMini from "./SpinnerMini";
import { useForm } from "react-hook-form";
import { clampBuilder } from "../styles/clampFunction";
import { useUpdateReview } from "../features/reviews/useUpdateReview";
import { TextArea } from "./TextArea";
import { useCreateReview } from "../features/reviews/useCreateReviews";

const EditFormContainer = styled.div`
  /* width: 40%; */
  background-color: var(--color-white);

  border-radius: ${() => clampBuilder(320, 1200, 0.8, 1.2)};

  box-shadow: var(--box-shadow-dark);

  padding: ${() => clampBuilder(320, 1200, 1.5, 2.5)};
  ${() => clampBuilder(320, 1200, 1.7, 3)};
`;

function EditReviewForm({ review = {}, onClose, productId }) {
  const { id, ...otherfields } = review;

  const isEdit = Boolean(id);

  const { reset, register, handleSubmit } = useForm({
    defaultValues: isEdit ? otherfields : false,
  });

  const { updateReview, isUpdating } = useUpdateReview();

  const { createReview, isCreating } = useCreateReview();

  const isWorking = isCreating || isUpdating;

  const OnSubmit = ({ rating, review }, e) => {
    e.preventDefault();

    if (isEdit) {
      updateReview(
        { id, data: { rating, review } },
        {
          onSettled: () => {
            onClose?.();

            reset();
          },
        }
      );
    } else {
      createReview(
        { id: productId, data: { rating, review } },
        {
          onSuccess: () => {
            onClose?.();
            reset();
          },
        }
      );
    }
  };

  return (
    <EditFormContainer>
      <Form2 onSubmit={handleSubmit(OnSubmit)}>
        {/*  For Now  */}
        <FormRow label="Rating">
          <Input
            id="rating"
            disabled={isWorking}
            placeholder="Add a rating"
            variation={"review"}
            {...register("rating", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Review">
          <TextArea
            id="review"
            disabled={isWorking}
            placeholder="write a review"
            variation={"review"}
            {...register("review", { required: "This field is required" })}
          />
        </FormRow>

        <Button disabled={isWorking} withspinner={isWorking ? "true" : ""}>
          {isWorking ? (
            <>
              {" "}
              <SpinnerMini />{" "}
              <span>
                {" "}
                {isUpdating ? "Updating review..." : "Creating review..."}{" "}
              </span>{" "}
            </>
          ) : (
            <span> {isEdit ? "Save update" : "create Review"} </span>
          )}
        </Button>
      </Form2>
    </EditFormContainer>
  );
}

export default EditReviewForm;
