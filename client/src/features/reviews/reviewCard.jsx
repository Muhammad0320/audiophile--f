import styled from "styled-components";
import { Text } from "../category/Category";
import { ReviewRating } from "../../ui/StarRating";
import { clampBuilder } from "../../styles/clampFunction";

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  height: 90%;
  width: 85%;
  row-gap: 2rem;
  justify-content: center;
  align-items: center;

  scroll-snap-align: start;

  color: var(--color-dark);

  overflow: hidden;

  box-shadow: var(--box-shadow-light);

  background: var(--color-white-vivid);

  background-image: var(--color-gradient-light);

  padding: ${() => clampBuilder(320, 1200, 1, 2)};
  ${() => clampBuilder(320, 1200, 0.8, 1.5)};

  margin-bottom: ${() => clampBuilder(320, 1200, 1, 3)};

  border-radius: 1.2rem;

  @media (max-width: 920px) {
    height: 65%;
  }
`;

const AvatarContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  column-gap: ${() => clampBuilder(320, 1200, 1.1, 2)};

  & > img {
    display: block;

    height: ${() => clampBuilder(320, 1200, 3, 6)};
    width: ${() => clampBuilder(320, 1200, 3, 6)};

    border-radius: 50%;
  }

  & > span {
    text-transform: uppercase;

    font-size: var(--font-small);

    font-weight: 600;
  }
`;

const TimeStamp = styled.span`
  color: var(--color-dark-1);

  font-size: ${() => clampBuilder(320, 1200, 0.7, 1.2)};

  position: absolute;

  bottom: 1rem;
  right: 1rem;
`;

function ReviewCard({ reviews }) {
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

      <ReviewRating maxRating={5} rating={+rating} size={40} />
      <TimeStamp> {time} </TimeStamp>
    </StyledCard>
  );
}

export default ReviewCard;
