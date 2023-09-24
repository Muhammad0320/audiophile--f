import { styled } from "styled-components";

import Category from "./Category";
import ContainerHero from "../../ui/ContainerHero";
import CategoryBox from "../../ui/CategoryBox";
import { useProductCategory } from "./useProductCategory";
import Spinner from "../../ui/Spinner";

const CategoryContainer = styled.div`
  margin: 15rem 0;
`;

function CategoryEarphones() {
  const { categoryProduct, isLoading } = useProductCategory("earphones");

  if (isLoading) return <Spinner />;

  return (
    <CategoryContainer>
      {categoryProduct.map((data, index) => (
        <Category key={data.id} categoryData={data} index={index} />
      ))}

      <CategoryBox />
      <ContainerHero />
    </CategoryContainer>
  );
}

export default CategoryEarphones;
