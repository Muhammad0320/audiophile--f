import { useLocation, useSearchParams } from "react-router-dom";
import CategoryBox from "../ui/CategoryBox";
import ContainerContent from "../ui/ContainerContent";
import ContainerHero from "../ui/ContainerHero";
import ContainerHeroImages from "../ui/ContainerHeroImages";
import ContainerLayout from "../ui/ContainerLayout";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import useCreateOrder from "./payment/useCreateOrder";
import { useEffect } from "react";
import { useEffectOnce } from "../hooks/useeffectOnce";

function HomePage() {
  const { createOrder } = useCreateOrder();

  // ?data=my-data&user=888888

  const [searchParams] = useSearchParams();

  // useEffectOnce(() => {
  //   const data = searchParams.get("data");
  //   const user = searchParams.get("user");
  //   if (data && user) {
  //     createOrder({ user, data });
  //   }
  // });
  // const user = searchParams.get("user");

  const location = useLocation();

  console.log(location);

  const urlParams = new URLSearchParams(location.search);

  const sessionId = urlParams.get("session_data");

  console.log(sessionId);

  const data = searchParams.get("session_data");

  console.log(data); // i saw null
  // useEffect(() => {

  //   if (data) {
  //     console.log(data);
  //     createOrder({ sessionId: data });
  //   }
  // }, []);

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
