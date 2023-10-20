import { styled } from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { clampBuilder } from "../styles/clampFunction";
import { useViewport } from "../context/ViewPort";

const StyledImageContainer = styled.div`
  display: grid;
  grid-template-rows: max-content repeat(2, 1fr);
  row-gap: 4rem;
  margin-bottom: 15rem;
  padding-inline: ${() => clampBuilder(320, 1200, 1, 1.5)};
  overflow: hidden;
`;

const FirstImageGroup = styled.div`
  background-color: var(--color-primary);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-image: url("/assets/home/desktop/pattern-circles.svg");
  background-size: 80%;
  background-position: ${() => clampBuilder(320, 1200, -10, -30)} 10%;
  height: ${() => clampBuilder(920, 1200, 40, 50)};
  background-repeat: no-repeat;
  border-radius: 1rem;
  overflow: hidden;
  column-gap: ${() => clampBuilder(320, 1200, 6, 12)};

  align-items: center;
  justify-content: center;

  box-shadow: var(--box-shadow-dark);

  @media (max-width: 920px) {
    height: 100%;
    grid-template-columns: none;
    background-position: 50% ${() => clampBuilder(300, 920, -20, -35)};
    background-size: 110%;

    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: 920px) {
    background-size: 100%;
  }
`;

const FirstImage = styled.img`
  align-self: self-end;
  justify-self: self-end;
  translate: 0 ${() => clampBuilder(320, 1200, 1.5, 2)};
  width: 80%;

  @media (max-width: 920px) {
    align-self: center;
    justify-self: center;
    width: 30%;
  }

  @media (max-width: 420px) {
    width: 50%;
  }
`;

const FirstImageText = styled.div`
  align-self: flex-start;
  display: flex;
  justify-self: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  row-gap: ${() => clampBuilder(920, 1200, 1.8, 2.5)};
  & > button {
    align-self: flex-start;
  }

  @media (max-width: 920px) {
    align-self: center;
    text-align: center;

    margin-inline: ${() => clampBuilder(300, 720, 8, 15)};

    & > button {
      align-self: center;
      margin-bottom: ${() => clampBuilder(320, 920, 2, 3)};
    }
  }
`;

const FirstSpeakerName = styled.h2`
  font-size: ${() => clampBuilder(320, 1200, 2.5, 6)};
  font-weight: 500;
  line-height: 1;
  color: var(--color-white);
  margin-block: ${() => clampBuilder(320, 920, 1.5, 3)} 0;
  text-transform: uppercase;
`;

const FirstSpeakerText = styled.p`
  font-size: ${() => clampBuilder(320, 1200, 1, 2)};
  color: var(--color-white-2);
`;

const SecondImage = styled.div`
  background-color: var(--color-dark-3);
  background-image: url("/assets/home/desktop/image-speaker-zx7.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1rem;
  box-shadow: var(--box-shadow-light);

  @media (max-width: 920px) {
    background-image: url("/assets/home/tablet/image-speaker-zx7.jpg");
  }

  @media (max-width: 420px) {
    background-image: url("/assets/home/mobile/image-speaker-zx7.jpg");
  }
`;

const SecondImageTextGroup = styled.div`
  grid-column: 1 / 2;
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  color: var(--color-dark);
  padding-inline: ${() => clampBuilder(320, 1200, 3, 10)};
  font-weight: 600;
  text-transform: uppercase;
  row-gap: ${() => clampBuilder(320, 1200, 1, 2)};
  font-size: ${() => clampBuilder(320, 1200, 2.5, 4)};
  & > button {
    align-self: flex-start;
  }
`;

const ThirdImageGroup = styled.div`
  display: grid;
  align-items: stretch;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  padding-bottom: 2rem;
  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;

    row-gap: 2rem;
  }
`;

const ThirdImage = styled.img`
  border-radius: 1rem;
  display: block;
  box-shadow: var(--box-shadow-light);

  width: 100%;
`;

const ThirdTextGroup = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  column-gap: ${() => clampBuilder(400, 1200, 1.8, 2.5)};
  color: var(--color-dark);
  box-shadow: var(--box-shadow-light);

  justify-content: center;

  align-items: flex-start;
  font-size: ${() => clampBuilder(300, 1200, 1.5, 2.3)};
  text-transform: uppercase;
  border-radius: 1rem;
  background-color: var(--color-white-2);
  padding-inline: ${() => clampBuilder(300, 1200, 2.5, 4.5)};

  @media (max-width: 420px) {
    padding-block: ${() => clampBuilder(300, 420, 3, 5)};
  }

  & > h4 {
    margin-block: 1rem;
  }

  & > button {
    justify-self: flex-start;

    font-size: 1rem;
  }
`;

function ContainerHeroImages() {
  const navigate = useNavigate();

  const { viewportWidth } = useViewport();

  return (
    <StyledImageContainer>
      <FirstImageGroup>
        {viewportWidth <= 420 ? (
          <FirstImage src="/assets/home/mobile/image-speaker-zx9.png" />
        ) : viewportWidth <= 920 ? (
          <FirstImage src="/assets/home/tablet/image-speaker-zx9.png" />
        ) : (
          <FirstImage src="/assets/home/desktop/image-speaker-zx9.png" />
        )}

        <FirstImageText>
          <FirstSpeakerName>
            {" "}
            zx9 <br /> speaker{" "}
          </FirstSpeakerName>
          <FirstSpeakerText>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
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
        <SecondImageTextGroup>
          <span> ZX7 speaker </span>
          <Button
            variation="transparent"
            onClick={() => navigate(`/product/zx7-speaker`)}
          >
            {" "}
            see product{" "}
          </Button>
        </SecondImageTextGroup>
      </SecondImage>

      <ThirdImageGroup>
        {viewportWidth <= 420 ? (
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
