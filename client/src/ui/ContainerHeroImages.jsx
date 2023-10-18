import { styled } from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useViewport } from "../features/context/ViewPort";
import { clampBuilder } from "../styles/clampFunction";

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

  @media (max-width: 920px) {
    background-image: url("/assets/home/tablet/image-speaker-zx7.jpg");
  }

  @media (max-width: 400px) {
    background-image: url("/assets/home/mobile/image-speaker-zx7.jpg");
  }
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
  align-items: stretch;
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
  column-gap: ${() => clampBuilder(400, 1200, 0.8, 1.5)};
  color: var(--color-dark);

  font-size: 2.2rem;
  text-transform: uppercase;
  border-radius: 1rem;
  background-color: var(--color-white-2);
  padding: ${() => clampBuilder(400, 1200, 3, 8)};
  ${() => clampBuilder(400, 1200, 4, 10)};

  & > p {
    justify-content: flex-start;

    align-items: center;
  }
`;

function ContainerHeroImages() {
  const navigate = useNavigate();

  const { viewportWidth } = useViewport();

  return (
    <StyledImageContainer>
      <FirstImageGroup>
        {viewportWidth <= 400 ? (
          <FirstImage src="/assets/home/mobile/image-speaker-zx9.jpg" />
        ) : viewportWidth <= 920 ? (
          <FirstImage src="/assets/home/tablet/image-speaker-zx9.jpg" />
        ) : (
          <FirstImage src="/assets/home/desktop/image-speaker-zx9.jpg" />
        )}

        <FirstImageText>
          <FirstSpeakerName>
            {" "}
            zx9 <br /> speaker{" "}
          </FirstSpeakerName>
          <FirstSpeakerText>
            Upgrade to premium speakers that are <br /> phenomenally built to
            deliver truly remarkable <br /> sound.
          </FirstSpeakerText>
          <Button
            variation="dark"
            onClick={() => navigate(`/product/zx9-speaker`)}
          >
            {" "}
            see product{" "}
          </Button>
        </FirstImageText>
      </FirstImageGroup>

      <SecondImage>
        <SecondImageGroup>
          <SecondImageTextGroup>
            <p>
              <span> ZX7 speaker </span>
              <Button
                variation="transparent"
                onClick={() => navigate(`/product/zx7-speaker`)}
              >
                {" "}
                see product{" "}
              </Button>
            </p>
          </SecondImageTextGroup>
        </SecondImageGroup>
      </SecondImage>

      <ThirdImageGroup>
        {viewportWidth <= 400 ? (
          <ThirdImage src="/assets/home/mobile/image-earphones-yx1.jpg" />
        ) : viewportWidth <= 920 ? (
          <ThirdImage src="/assets/home/tablet/image-earphones-yx1.jpg" />
        ) : (
          <ThirdImage src="/assets/home/desktop/image-earphones-yx1.jpg" />
        )}

        <ThirdTextGroup>
          <h4> yxi earphones </h4>
          <Button
            variation="transparent"
            onClick={() => navigate(`/product/yx1-earphones`)}
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
