import styled from "styled-components";
import { Heading } from "../features/details/ProductDetails";
import LoginForm from "../features/Authentication/LoginForm";

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
      <Heading> Log in to your account </Heading>

      <LoginForm />
    </StyledSignupContainer>
  );
}

export default SignupPage;
