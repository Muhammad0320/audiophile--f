import SVG from "react-inlinesvg";
import { IconLogo } from "../ui/Icons";
import { Heading } from "../ui/Heading";
import ResetPasswordForm from "../features/Authentication/ResetPasswordForm";

import {
  PageContainer,
  StyledAuthContainer,
  StyledSVG,
} from "../ui/AuthPageStyles";

function PasswordResetPage() {
  return (
    <PageContainer>
      <StyledAuthContainer>
        <StyledSVG>
          <SVG src={IconLogo} />
        </StyledSVG>

        <Heading> Reset your password</Heading>
        <ResetPasswordForm />
      </StyledAuthContainer>
    </PageContainer>
  );
}

export default PasswordResetPage;
