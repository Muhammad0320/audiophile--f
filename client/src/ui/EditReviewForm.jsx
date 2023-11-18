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

const EditFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: var(--color-white);

  border-radius: ${() => clampBuilder(320, 1200, 0.8, 1.2)};

  box-shadow: var(--box-shadow-dark);

  padding: ${() => clampBuilder(320, 1200, 1.5, 2.5)};
  ${() => clampBuilder(320, 1200, 1.7, 3)};
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
            variation={"review"}
            {...register("rating", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Review">
          <TextArea
            id="review"
            variation={"review"}
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
