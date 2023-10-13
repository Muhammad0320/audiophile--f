import { useSearchParams } from "react-router-dom";
import CategoryBox from "../ui/CategoryBox";
import ContainerContent from "../ui/ContainerContent";
import ContainerHero from "../ui/ContainerHero";
import ContainerHeroImages from "../ui/ContainerHeroImages";
import ContainerLayout from "../ui/ContainerLayout";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import useCreateOrder from "./payment/useCreateOrder";
import { useEffectOnce } from "../hooks/useeffectOnce";

function HomePage() {
  const { createOrder } = useCreateOrder();

  const [searchParams] = useSearchParams();

  useEffectOnce(() => {
    const data = searchParams.get("session_data");

    if (data) {
      console.log(data);
      createOrder({ product: data });
    }
  });

  return (
    <ContainerLayout>
      <Header home={true} />

      <ContainerContent>
        <CategoryBox />

        <ContainerHeroImages />
        <ContainerHero />
      </ContainerContent>

      <Footer />
    </ContainerLayout>
  );
}

export default HomePage;
