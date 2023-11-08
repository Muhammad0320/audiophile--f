import { NavLink } from "react-router-dom";
import CategoryBox from "../ui/CategoryBox";
import ContainerContent from "../ui/ContainerContent";
import ContainerHero from "../ui/ContainerHero";
import ContainerHeroImages from "../ui/ContainerHeroImages";
import ContainerLayout from "../ui/ContainerLayout";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

function HomePage() {
  return (
    <ContainerLayout>
      <Header home={true} />

      <ContainerContent>
        <CategoryBox />

        <NavLink
          to="/success"
          style={{ color: "black", border: "1px solid red" }}
        />

        <ContainerHeroImages />
        <ContainerHero />
      </ContainerContent>

      <Footer />
    </ContainerLayout>
  );
}

export default HomePage;
