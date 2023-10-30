import styled from "styled-components";

import { ReviewRating } from "../../ui/StarRating";
import { clampBuilder } from "../../styles/clampFunction";
import { useViewport } from "../../context/ViewPort";
import { Text } from "../../ui/Text";

const StyledCard = styled.div`
  position: relative;
  display: grid;

  grid-template-rows: max-content 0.9fr max-content ${() =>
      clampBuilder(320, 1200, 1, 3)};

  grid-row-gap: ${() => clampBuilder(320, 1200, 1, 1.5)};

  place-items: center;

  scroll-snap-align: start;

  color: var(--color-dark);

  overflow: hidden;

  box-shadow: var(--box-shadow-light);

  background: var(--color-white);

  background-image: var(--color-gradient-dark);

  padding: ${() => clampBuilder(320, 1200, 1.3, 2)};
  ${() => clampBuilder(320, 1200, 1, 1.5)};

  margin-bottom: ${() => clampBuilder(320, 1200, 1, 3)};

  border-radius: 1rem;
`;

const AvatarContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  column-gap: ${() => clampBuilder(320, 1200, 1, 1.8)};

  & > img {
    display: block;

    height: ${() => clampBuilder(320, 1200, 3, 6)};
    width: ${() => clampBuilder(320, 1200, 3, 6)};

    border-radius: 50%;
  }

  & > span {
    text-transform: uppercase;

    font-size: ${() => clampBuilder(320, 1200, 0.8, 2)};
    /* white-space: nowrap; */
    font-weight: 600;
  }
`;

const TimeStamp = styled.span`
  color: var(--color-dark-1);
  grid-row: 4 / -1;
  align-self: self-end;
  justify-self: self-end;
  font-size: ${() => clampBuilder(320, 1200, 0.7, 1.2)};
`;

function ReviewCard({ reviews }) {
  const { viewportWidth } = useViewport();

  const {
    rating,
    createdAt,
    review,
    user: { name, photo },
  } = reviews || {};

  const time = new Date(createdAt).toLocaleString("en-us", {
    month: "long",
    year: "numeric",
    day: "2-digit",
  });

  return (
    <StyledCard>
      <AvatarContainer>
        <img src={`/assets/users/${photo}`} alt={`${name}'s avatar `} />

        <span> {name} </span>
      </AvatarContainer>

      <Text type="review"> {review} </Text>
      <ReviewRating
        maxRating={5}
        rating={+rating}
        size={viewportWidth >= 920 ? 35 : 20}
      ></ReviewRating>
      <TimeStamp> {time} </TimeStamp>
    </StyledCard>
  );
}

export default ReviewCard;
