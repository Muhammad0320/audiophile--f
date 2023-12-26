import Category from "./Category";
import Spinner from "../../ui/Spinner";
import { styled } from "styled-components";
import CategoryBox from "../../ui/CategoryBox";
import ContainerHero from "../../ui/ContainerHero";
import { useProductCategory } from "./useProductCategory";

const CategoryContainer = styled.div`
  margin: 15rem 0;
`;

function CategoryEarphones() {
  const { categoryProduct = [], isLoading } = useProductCategory("earphones");

  if (isLoading) return <Spinner />;

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
