import styled from "styled-components";

const EditFormContainer = styled.div`
  background-color: var(--color-white);

  border-radius: 1.2rem;

  box-shadow: var(--box-shadow-dark);

  padding: 2.5rem 3rem;
`;

function EditReviewForm() {
  return <EditFormContainer></EditFormContainer>;
}

export default EditReviewForm;
