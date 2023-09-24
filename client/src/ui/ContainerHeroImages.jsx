import { styled } from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const StyledImageContainer = styled.div`
  display: grid;
  grid-template-rows: max-content repeat(2, 1fr);
  row-gap: 4rem;
  margin-bottom: 15rem;
  overflow: hidden;
`;

const FirstImageGroup = styled.div`
  background-color: var(--color-primary);
  display: flex;
  background-image: url("/assets/home/desktop/pattern-circles.svg");
  background-size: 80%;
  background-position: -15rem 10%;
  padding: 10rem 10rem 0 20rem;
  background-repeat: no-repeat;
  border-radius: 1rem;
  overflow: hidden;
  column-gap: 15rem;
`;

const FirstImage = styled.img`
  display: block;
  align-self: flex-end;
  width: 40%;
  translate: 0 3rem;
  /* width: 100%; */
`;

const FirstImageText = styled.div`
  align-self: flex-start;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  row-gap: 2rem;

  & > button {
    align-self: flex-start;
  }
`;

const FirstSpeakerName = styled.h2`
  font-size: 6rem;
  font-weight: 500;
  line-height: 1;
  margin-bottom: -1rem;
  color: var(--color-white);
  text-transform: uppercase;
`;

const FirstSpeakerText = styled.p`
  font-size: 2rem;
  line-height: 1.7;
  color: var(--color-white-2);
`;

const SecondImage = styled.div`
  background-image: url("/assets/home/desktop/image-speaker-zx7.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1rem;
`;

const SecondImageGroup = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  padding: 12rem;
`;

const SecondImageTextGroup = styled.div`
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  color: var(--color-dark);
  /* row-gap: 1rem; */
  font-size: 2.7rem;
`;

const ThirdImageGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
`;

const ThirdImage = styled.img`
  border-radius: 1rem;
  display: block;

  width: 100%;
`;

const ThirdTextGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  column-gap: 1.5rem;
  color: var(--color-dark);

  font-size: 2.2rem;
  text-transform: uppercase;
  border-radius: 1rem;
  background-color: var(--color-white-2);
  padding: 8rem 10rem;
  & > button {
    align-self: flex-start;
  }
`;

function ContainerHeroImages() {
  const navigate = useNavigate();

  return (
    <StyledImageContainer>
      <FirstImageGroup>
        <FirstImage src="/assets/home/desktop/image-speaker-zx9.png" />

        <FirstImageText>
          <FirstSpeakerName>
            {" "}
            zx9 <br /> speaker{" "}
          </FirstSpeakerName>
          <FirstSpeakerText>
            Upgrade to premium speakers that are <br /> phenomenally built to
            deliver truly remarkable <br /> sound.
          </FirstSpeakerText>
          <Button variation="dark" onClick={() => navigate(`/product/${6}`)}>
            {" "}
            see product{" "}
          </Button>
        </FirstImageText>
      </FirstImageGroup>

      <SecondImage>
        <SecondImageGroup>
          <SecondImageTextGroup>
            <p> ZX7 speaker </p>
            <Button
              variation="transparent"
              onClick={() => navigate(`/product/${5}`)}
            >
              {" "}
              see product{" "}
            </Button>
          </SecondImageTextGroup>
        </SecondImageGroup>
      </SecondImage>

      <ThirdImageGroup>
        <ThirdImage
          src="/assets/home/desktop/image-earphones-yx1.jpg"
          alt="earphone image"
        />

        <ThirdTextGroup>
          <h4> yxi earphones </h4>
          <Button
            variation="transparent"
            onClick={() => navigate(`/product/${1}`)}
          >
            {" "}
            see product{" "}
          </Button>
        </ThirdTextGroup>
      </ThirdImageGroup>
    </StyledImageContainer>
  );
}

export default ContainerHeroImages;
