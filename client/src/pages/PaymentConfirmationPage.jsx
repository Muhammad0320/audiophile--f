import styled from "styled-components";
import Confirmation from "../ui/Confirmation";
import ContainerContent from "../ui/ContainerContent";

import ContainerLayout from "../ui/ContainerLayout";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function PaymentConfirmationPage() {
  return (
    <ContainerLayout>
      <ContainerContent>
        <Container>
          <Confirmation />
        </Container>
      </ContainerContent>
    </ContainerLayout>
  );
}

export default PaymentConfirmationPage;
