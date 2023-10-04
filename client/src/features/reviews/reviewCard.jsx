import { useState } from "react";
import styled from "styled-components";
import { Text } from "../category/Category";

const StyledCard = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;

  color: var(--color-dark);

  box-shadow: var(--shadow-light);

  row-gap: 2rem;
`;

const AvatarContainer = styled.div`
  display: flex;

  justify-content: center;

  column-gap: 2rem;

  & > img {
    display: block;

    height: 5rem;
    width: 5rem;

    border-radius: 50%;
  }

  & > span {
    text-transform: uppercase;

    font-size: 2.2rem;
  }
`;

function ReviewCard({ reviews }) {
  const {
    rating,
    ceatedAt,
    review,
    user: { name, photo },
  } = reviews;

  return (
    <StyledCard>
      <AvatarContainer>
        <img src={photo} alt={`${name}'s avatar `} />

        <span> {name} </span>
      </AvatarContainer>

      <Text type="review"> {review} </Text>
    </StyledCard>
  );
}

export default ReviewCard;
