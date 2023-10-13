import styled from "styled-components";
import { Text } from "../category/Category";
import { ReviewRating } from "../../ui/StarRating";

const StyledCard = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-flow: column;

  row-gap: 2rem;
  justify-content: center;
  align-items: center;

  color: var(--color-dark);

  box-shadow: var(--box-shadow-light);

  background: var(--color-white-vivid);

  background-image: var(--color-gradient-light);

  padding: 2rem 1.5rem;

  margin-bottom: 3rem;

  border-radius: 1.2rem;
`;

const AvatarContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  column-gap: 2rem;

  & > img {
    display: block;

    height: 6rem;
    width: 6rem;

    border-radius: 50%;
  }

  & > span {
    text-transform: uppercase;

    font-size: 1.5rem;

    font-weight: 500;
  }
`;

const TimeStamp = styled.span`
  color: var(--color-dark-1);

  font-size: 1.2rem;

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
