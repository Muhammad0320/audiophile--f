import styled from "styled-components";
import Confirmation from "../ui/Confirmation";
import ContainerContent from "../ui/ContainerContent";

import ContainerLayout from "../ui/ContainerLayout";
import useCreateOrder from "../features/payment/useCreateOrder";
import { useSearchParams } from "react-router-dom";
import { useEffectOnce } from "../hooks/useeffectOnce";

const Container = styled.div`
  /* background-color: var(--color-white-vivid); */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function PaymentConfirmationPage() {
  const { createOrder } = useCreateOrder();

  const [searchParams] = useSearchParams();

  const data = searchParams.get("session_data");
  useEffectOnce(() => {
    if (data) {
      createOrder({ product: data });
    }
  });

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
