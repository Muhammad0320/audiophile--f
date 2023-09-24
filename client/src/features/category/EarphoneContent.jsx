import ContainerContent from "../../ui/ContainerContent";
import ContainerLayout from "../../ui/ContainerLayout";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import CategoryEarphones from "./CategoryEarphones";

function EarphoneContent() {
  return (
    <ContainerLayout>
      <Header category="Earphone" />

      <ContainerContent>
        <CategoryEarphones />
      </ContainerContent>

      <Footer />
    </ContainerLayout>
  );
}

export default EarphoneContent;
