import { styled } from "styled-components";
import { clampBuilder } from "../styles/clampFunction";

const StyledContainerHero = styled.div`
  display: grid;
  margin-bottom: ${() => clampBuilder(320, 1200, 10, 15)};
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--margin-medium);

  @media (max-width: 920) {
    display: flex;
    flex-direction: column;
    row-gap: ${() => clampBuilder(320, 920, 5, 10)};
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

  row-gap: ${() => clampBuilder(320, 920, 2, 4)};

  @media (max-width: 920) {
    margin-inline: ${() => clampBuilder(320, 920, 1.5, 5)};
  }
`;

const TextHeader = styled.h3`
  grid-column: 1 / 2;
  font-size: ${() => clampBuilder(350, 1200, 2.5, 4)};
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-dark);
  margin-bottom: -2px;

  & > span {
    color: var(--color-primary);
  }
`;

const Text = styled.p`
  font-size: ${() => clampBuilder(350, 1200, 2, 3)};
  color: var(--color-dark-1);
  padding-right: ${() => clampBuilder(350, 1200, 1.3, 3)};
  opacity: 0.6;
`;

function ContainerHero() {
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
          store to meet some of <br /> the fantastic people who make Audiophile
          the best place to buy your portable audio equipment.{" "}
        </Text>
      </TextGroup>

      <Image src="/assets/shared/desktop/image-best-gear.jpg" />
    </StyledContainerHero>
  );
}

export default ContainerHero;
