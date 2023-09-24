import { styled } from "styled-components";
import { fakeData } from "../../service/data";

import Category from "./Category";
import ContainerHero from "../../ui/ContainerHero";
import CategoryBox from "../../ui/CategoryBox";

const headphoneData = fakeData.filter((data) => data.category === "headphones");

const CategoryContainer = styled.div`
  margin: 15rem 0;
`;

function CategoryHeadphone() {
  return (
    <CategoryContainer>
      {headphoneData.map((data, index) => (
        <Category key={data.id} categoryData={data} index={index} />
      ))}

      <CategoryBox />
      <ContainerHero />
    </CategoryContainer>
  );
}

export default CategoryHeadphone;
