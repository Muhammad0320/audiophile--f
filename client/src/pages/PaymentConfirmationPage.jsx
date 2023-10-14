import styled from "styled-components";
import Confirmation from "../ui/Confirmation";
import ContainerContent from "../ui/ContainerContent";

import ContainerLayout from "../ui/ContainerLayout";

const Container = styled.div`
  background-color: var(--color-white-vivid);
  margin-block: var(--margin-medium);
  border-radius: 2rem;
  padding: var(--padding-small) 10rem;
`;

function PaymentConfirmationPage() {
  return (
    <ContainerLayout>
      <ContainerContent>
        <>
          <Confirmation />
        </>
      </ContainerContent>
    </ContainerLayout>
  );
}

export default PaymentConfirmationPage;
