import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonMap({ count = 3, children }) {
  const skeletonCount = Array(count).fill(0);

  return <>{skeletonCount.map((_, i) => children)}</>;
}

export default SkeletonMap;
