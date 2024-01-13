function SkeletonMap({ count = 3, children }) {
  const skeletonCount = Array(count).fill(0);

  return <> {skeletonCount.map(() => children)} </>;
}

export default SkeletonMap;
