import ContainerContent from "../../ui/ContainerContent";
import ContainerLayout from "../../ui/ContainerLayout";
import Footer from "../../ui/Footer";
import CategoryBox from "../../ui/CategoryBox";
import Header from "../../ui/Header";
import ContainerHero from "../../ui/ContainerHero";
import ProductDetails from "./ProductDetails";

function DetailsContent() {
  return (
    <ContainerLayout>
      <Header />

      <ContainerContent>
        <ProductDetails />
        <CategoryBox />
        <ContainerHero />
      </ContainerContent>

      <Footer />
    </ContainerLayout>
  );
}

export default DetailsContent;
