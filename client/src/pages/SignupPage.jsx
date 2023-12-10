import SVG from "react-inlinesvg";
import { IconLogo } from "../ui/Icons";
import SignupForm from "../features/Authentication/SignupForm";
import OtherAuthmethod from "../ui/OtherAuthmethod";

import { Heading } from "../ui/Heading";
import {
  PageContainer,
  StyledAuthContainer,
  StyledSVG,
} from "../ui/AuthPageStyles";

function SignupPage() {
  return (
    <PageContainer>
      <StyledAuthContainer>
        <StyledSVG>
          <SVG src={IconLogo} />
        </StyledSVG>
        <Heading type="login"> Log in to your account </Heading>
        <SignupForm />
        <OtherAuthmethod authMethod="sign in" />
      </StyledAuthContainer>
    </PageContainer>
  );
}

export default SignupPage;
