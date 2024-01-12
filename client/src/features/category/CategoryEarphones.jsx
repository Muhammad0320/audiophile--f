import Category from "./Category";

import { styled } from "styled-components";
import CategoryBox from "../../ui/CategoryBox";
import ContainerHero from "../../ui/ContainerHero";
import { useProductCategory } from "./useProductCategory";
import SkeletonLoader from "../skeleton/SkeletonLoader";

export const CategoryContainer = styled.div`
  margin: 15rem 0;
`;

function CategoryEarphones() {
  const { categoryProduct = [], isLoading } = useProductCategory("earphones");
  console.log(isLoading);

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

export default CategoryEarphones;
