import { styled } from "styled-components";
import { fakeData } from "../../service/data";

import Category from "./Category";
import ContainerHero from "../../ui/ContainerHero";
import CategoryBox from "../../ui/CategoryBox";

const speakersData = fakeData.filter((data) => data.category === "speakers");

const CategoryContainer = styled.div`
  margin: 15rem 0;
`;

function CategorySpeakers() {
  return (
    <CategoryContainer>
      {speakersData.map((data, index) => (
        <Category key={data.id} categoryData={data} index={index} />
      ))}

      <CategoryBox />
      <ContainerHero />
    </CategoryContainer>
  );
}

export default CategorySpeakers;
