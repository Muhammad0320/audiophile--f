import Modal from "../ui/Modal";
import SVG from "react-inlinesvg";
import styled from "styled-components";
import { IconLogo } from "../ui/Icons";
import { Heading } from "../ui/Heading";
import SmallButton from "../ui/SmallButton";
import OtherAuthmethod from "../ui/OtherAuthmethod";
import LoginForm from "../features/Authentication/LoginForm";
import ForgorPassword from "../features/Authentication/ForgorPassword";
import {
  PageContainer,
  StyledAuthContainer,
  StyledSVG,
} from "../ui/AuthPageStyles";

const ForgotPassword = styled.div`
  text-align: center;
  margin-inline: auto;
`;

function LoginPage() {
  return (
    <Modal>
      <PageContainer>
        <StyledAuthContainer>
          <StyledSVG>
            <SVG src={IconLogo} />
          </StyledSVG>
          <Heading type="login"> Log in to your account </Heading>
          <LoginForm />
          <OtherAuthmethod authMethod="create one" />

          <ForgotPassword>
            <Modal.Open opens="forgot-password">
              <SmallButton type="forgot" password="true">
                Forgot password?
              </SmallButton>
            </Modal.Open>

            <Modal.Window name="forgot-password" page="password">
              <ForgorPassword />
            </Modal.Window>
          </ForgotPassword>
        </StyledAuthContainer>
      </PageContainer>
    </Modal>
  );
}

export default LoginPage;
