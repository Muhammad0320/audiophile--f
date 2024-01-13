import { styled } from "styled-components";

import Category from "./Category";
import ContainerHero from "../../ui/ContainerHero";
import CategoryBox from "../../ui/CategoryBox";
import { useProductCategory } from "./useProductCategory";

import SkeletonLoader from "../skeleton/SkeletonLoader";

export const CategoryContainer = styled.div`
  margin: 15rem 0;
`;

function CategorySpeakers() {
  const { categoryProduct = [], isLoading } = useProductCategory("speakers");

  if (isLoading) return <SkeletonLoader />;

  return (
    <CategoryContainer>
      {categoryProduct.map((data, index) => (
        <Category key={data._id} categoryData={data} index={index} />
      ))}

      <CategoryBox />
      <ContainerHero />
    </CategoryContainer>
  );
}

export default CategorySpeakers;
