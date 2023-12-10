import SVG from "react-inlinesvg";
import { IconLogo } from "../ui/Icons";
import { Heading } from "../ui/Heading";
import OtherAuthmethod from "../ui/OtherAuthmethod";
import SignupForm from "../features/Authentication/SignupForm";

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
