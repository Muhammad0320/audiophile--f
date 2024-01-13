import CategoryBox from "../../ui/CategoryBox";
import Category from "../category/Category";

import { CategoryContainer } from "../category/CategoryEarphones";

function SkeletonLoader({ count = 3 }) {
  return (
    <CategoryContainer>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Category index={index} loading={true} key={index} />
        ))}
      <CategoryBox />
    </CategoryContainer>
  );
}

export default SkeletonLoader;
