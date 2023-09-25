import styled from "styled-components";

const StyledSignupContainer = styled.div`
  display: grid;
  place-items: center;

  row-gap: 3rem;
`;

function SignupPage() {
  return <StyledSignupContainer></StyledSignupContainer>;
}

export default SignupPage;
