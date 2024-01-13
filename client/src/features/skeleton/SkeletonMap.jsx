import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonMap({ count = 3, style }) {
  const skeletonCount = Array(count).fill(0);

  return (
    <>
      {skeletonCount.map((_, i) => (
        <Skeleton style={style} />
      ))}
    </>
  );
}

export default SkeletonMap;
