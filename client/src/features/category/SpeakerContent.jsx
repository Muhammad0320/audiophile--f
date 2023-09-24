import ContainerContent from "../../ui/ContainerContent";
import ContainerLayout from "../../ui/ContainerLayout";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import CategorySpeakers from "./CategorySpeakers";

function SpeakerContent() {
  return (
    <ContainerLayout>
      <Header category="speakers" />

      <ContainerContent>
        <CategorySpeakers />
      </ContainerContent>

      <Footer />
    </ContainerLayout>
  );
}

export default SpeakerContent;
