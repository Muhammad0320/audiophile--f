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
  console.log(isLoading);

  // if (isLoading) return <Spinner />;

  if (isLoading)
    return (
      <CategoryContainer>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Category index={index} loading={true} key={index} />
          ))}
        <CategoryBox />
      </CategoryContainer>
    );

  return (
    <CategoryContainer>
      {categoryProduct.map((data, index) => (
        <Category
          key={data._id}
          categoryData={data}
          index={index}
          loading={isLoading}
        />
      ))}

      <CategoryBox />
      <ContainerHero />
    </CategoryContainer>
  );
}

export default CategoryEarphones;
