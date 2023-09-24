import { styled } from "styled-components";
import { fakeData } from "../../service/data";

import Category from "./Category";
import ContainerHero from "../../ui/ContainerHero";
import CategoryBox from "../../ui/CategoryBox";

const earphoneData = fakeData.filter((data) => data.category === "earphones");

const CategoryContainer = styled.div`
  margin: 15rem 0;
`;

function CategoryEarphones() {
  return (
    <CategoryContainer>
      {earphoneData.map((data, index) => (
        <Category key={data.id} categoryData={data} index={index} />
      ))}

      <CategoryBox />
      <ContainerHero />
    </CategoryContainer>
  );
}

export default CategoryEarphones;
