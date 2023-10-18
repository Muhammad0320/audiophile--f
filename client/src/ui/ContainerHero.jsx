import { styled } from "styled-components";
import { clampBuilder } from "../styles/clampFunction";
import { useViewport } from "../features/context/ViewPort";

const StyledContainerHero = styled.div`
  display: grid;
  margin-bottom: ${() => clampBuilder(920, 1200, 10, 15)};
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--margin-medium);

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column-reverse;
    row-gap: ${() => clampBuilder(320, 920, 2, 4)};
  }
`;

const Image = styled.img`
  grid-column: 2 / -1;
  display: block;
  width: 100%;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  row-gap: ${() => clampBuilder(320, 920, 0.8, 2.2)};

  @media (max-width: 920px) {
    text-align: center;
    margin-inline: ${() => clampBuilder(320, 920, 1.5, 5)};
  }
`;

const TextHeader = styled.h3`
  grid-column: 1 / 2;
  font-size: ${() => clampBuilder(350, 1200, 3, 4.5)};
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-dark);
  margin-bottom: -2px;

  & > span {
    color: var(--color-primary);
  }
`;

const Text = styled.p`
  font-size: ${() => clampBuilder(350, 1200, 1.3, 3)};

  padding-right: ${() => clampBuilder(920, 1200, 1.6, 3)};

  color: var(--color-dark-3);

  @media (max-width: 920px) {
    padding-right: 0;
  }
`;

function ContainerHero() {
  const { viewportWidth } = useViewport();

  return (
    <StyledContainerHero>
      <TextGroup>
        <TextHeader>
          {" "}
          Bringing you the <br /> <span>best</span> audio gear{" "}
        </TextHeader>
        <Text>
          {" "}
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.{" "}
        </Text>
      </TextGroup>

      {viewportWidth <= 400 ? (
        <Image src="/assets/shared/mobile/image-best-gear.jpg" />
      ) : viewportWidth <= 920 ? (
        <Image src="/assets/shared/tablet/image-best-gear.jpg" />
      ) : (
        <Image src="/assets/shared/desktop/image-best-gear.jpg" />
      )}
    </StyledContainerHero>
  );
}

export default ContainerHero;
