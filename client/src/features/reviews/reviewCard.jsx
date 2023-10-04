import styled from "styled-components";
import { Text } from "../category/Category";
import { ReviewRating } from "../../ui/StarRating";

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  /* align-content: center; */

  border: 1px solid red;

  color: var(--color-dark);

  box-shadow: 0 5px 5px 3px rgba(16, 16, 16, 0.5);
  background-color: var(--color-white-2);

  padding: 2rem 1.5rem;

  margin-bottom: 3rem;

  border-radius: 1.2rem;

  row-gap: 2rem;
`;

const AvatarContainer = styled.div`
  display: flex;

  /* justify-content: fl; */

  column-gap: 2rem;

  align-items: center;

  & > img {
    display: block;

    height: 6rem;
    width: 6rem;

    border-radius: 50%;
  }

  & > span {
    text-transform: uppercase;

    font-size: 1.5rem;
  }
`;

const TimeStamp = styled.span`
  color: var(--color-dark-1);

  font-size: 1.2rem;

  position: absolute;

  bottom: 0;
  right: 0;
`;

function ReviewCard({ reviews }) {
  const {
    rating,
    createdAt,
    review,
    user: { name, photo },
  } = reviews;

  return (
    <StyledCard>
      <AvatarContainer>
        <img src={`/assets/users/${photo}`} alt={`${name}'s avatar `} />

        <span> {name} </span>
      </AvatarContainer>

      <Text type="review"> {review} </Text>

      <ReviewRating maxRating={5} rating={+rating} />

      <TimeStamp> {createdAt} </TimeStamp>
    </StyledCard>
  );
}

export default ReviewCard;
