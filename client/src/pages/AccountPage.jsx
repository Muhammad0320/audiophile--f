import { Outlet } from "react-router-dom";
import Account from "../features/users/Account";
import ContainerContent from "../ui/ContainerContent";
import ContainerLayout from "../ui/ContainerLayout";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

function AccountPage() {
  return (
    <ContainerLayout>
      <Header category="Account" />

      <ContainerContent>
        <Account>
          <Outlet />
        </Account>
      </ContainerContent>

      <Footer />
    </ContainerLayout>
  );
}

export default AccountPage;
