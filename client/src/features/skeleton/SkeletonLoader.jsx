function SkeletonLoader(index) {
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
