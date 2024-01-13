import { styled } from "styled-components";

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
`;

function SkeletonMap({ count = 3, children }) {
  const skeletonCount = Array(count).fill(0);

  return <MapContainer> {skeletonCount.map(() => children)} </MapContainer>;
}

export default SkeletonMap;
