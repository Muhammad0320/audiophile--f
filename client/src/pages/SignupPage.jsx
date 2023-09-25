import styled from "styled-components";
import { Heading } from "../features/details/ProductDetails";
import SignupForm from "../features/Authentication/SignupForm";

const StyledSignupContainer = styled.div`
  display: grid;
  width: 80%;
  justify-content: center;
  align-items: center;

  background-color: var(--color-white-2);

  row-gap: 3rem;
`;

function SignupPage() {
  return (
    <StyledSignupContainer>
      <Heading> Create new account </Heading>

      <SignupForm />
    </StyledSignupContainer>
  );
}

export default SignupPage;
