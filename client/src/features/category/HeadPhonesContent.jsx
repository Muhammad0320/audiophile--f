import ContainerContent from "../../ui/ContainerContent";
import ContainerLayout from "../../ui/ContainerLayout";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import CategoryHeadphone from "./CategoryHeadphone";

function HeadPhonesContent() {
  return (
    <ContainerLayout>
      <Header category="Headphone" />

      <ContainerContent>
        <CategoryHeadphone />
      </ContainerContent>

      <Footer />
    </ContainerLayout>
  );
}

export default HeadPhonesContent;
