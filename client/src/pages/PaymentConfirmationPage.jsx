import Confirmation from "../ui/Confirmation";
import ContainerContent from "../ui/ContainerContent";

import ContainerLayout from "../ui/ContainerLayout";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

function PaymentConfirmationPage() {
  return (
    <ContainerLayout>
      <Header />

      <ContainerContent>
        <Confirmation />
      </ContainerContent>

      <Footer />
    </ContainerLayout>
  );
}

export default PaymentConfirmationPage;
