import styled from "styled-components";
import Form2 from "./Form2";
import FormRow from "./FormRow";
import Input from "./Input";
import { useForm } from "react-hook-form";

const EditFormContainer = styled.div`
  background-color: var(--color-white);

  border-radius: 1.2rem;

  box-shadow: var(--box-shadow-dark);

  padding: 2.5rem 3rem;
`;

function EditReviewForm({ review }) {
  const { reset, register, handleSubmit } = useForm({ defaultValues: review });

  const OnSubmit = ({ rating, review }, e) => {
    e.preventDefault();
  };

  return (
    <EditFormContainer>
      <Form2 onSubmit={handleSubmit()}>
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
      </Form2>
    </EditFormContainer>
  );
}

export default EditReviewForm;
