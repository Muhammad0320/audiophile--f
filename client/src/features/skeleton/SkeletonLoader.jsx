import CategoryBox from "../../ui/CategoryBox";
import Category from "../category/Category";

import { styled } from "styled-components";

const CategoryContainer = styled.div`
  margin: 15rem 0;
`;

function SkeletonLoader() {
  return (
    <CategoryContainer>
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <Category index={index} loading={true} key={index} />
        ))}
      <CategoryBox />
    </CategoryContainer>
  );
}

export default SkeletonLoader;
