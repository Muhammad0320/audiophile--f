import styled from "styled-components";
import Form2 from "./Form2";
import FormRow from "./FormRow";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { useUpdateReview } from "../features/reviews/useUpdateReview";
import Button from "./Button";
import SpinnerMini from "./SpinnerMini";

const EditFormContainer = styled.div`
  background-color: var(--color-white);

  border-radius: 1.2rem;

  box-shadow: var(--box-shadow-dark);

  padding: 2.5rem 3rem;
`;

function EditReviewForm({ review, onClose }) {
  const { id, ...otherfields } = review;

  const { reset, register, handleSubmit } = useForm({
    defaultValues: otherfields,
  });

  const { updateReview, isUpdating } = useUpdateReview();

  const OnSubmit = ({ rating, review }, e) => {
    e.preventDefault();

    updateReview(
      { id, data: { rating, review } },
      {
        onSettled: () => {
          onClose?.();

          reset();
        },
      }
    );
  };

  return (
    <EditFormContainer>
      <Form2 onSubmit={handleSubmit(OnSubmit)}>
        {/*  For Now  */}
        <FormRow label="Rating">
          <Input
            id="rating"
            {...register("rating", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Review">
          <Input
            id="review"
            {...register("review", { required: "This field is required" })}
          />
        </FormRow>

        <Button disabled={isUpdating} withspinner={isUpdating ? "true" : ""}>
          {isUpdating ? (
            <>
              {" "}
              <SpinnerMini /> <span> updating... </span>{" "}
            </>
          ) : (
            <span> save update </span>
          )}
        </Button>
      </Form2>
    </EditFormContainer>
  );
}

export default EditReviewForm;
