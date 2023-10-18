import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

import SVG from "react-inlinesvg";
import { IconFacebook, IconInstagram, IconX } from "./Icons";
import { clampBuilder } from "../styles/clampFunction";

const StyledFooter = styled.div`
  grid-column: 1 / -1;

  background-color: var(--color-dark);
  padding: 2rem ${() => clampBuilder(350, 1200, 5, 12)} 5rem;
`;

const FooterText = styled.div`
  color: var(--color-white-3);
  font-weight: 400;
  font-size: ${() => clampBuilder(920, 1200, 1.3, 1.7)};
  @media (max-width: 920px) {
    font-size: ${() => clampBuilder(350, 920, 1, 1.3)};
  }
`;

const FooterParagraph = styled.p`
  width: 55%;
  margin-top: ${() => clampBuilder(350, 1200, 1.5, 2.5)};
  justify-self: stretch;
  font-size: ${() => clampBuilder(920, 1200, 1.4, 1.6)};
  color: var(--color-white-3);

  margin-bottom: ${() => clampBuilder(350, 1200, 2, 4)};

  @media (max-width: 920px) {
    width: 100%;
    font-size: ${() => clampBuilder(350, 920, 1.1, 1.3)};
  }
`;

const FooterContent = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: flex-end;
`;

const IconList = styled.div`
  align-self: center;
  display: flex;
  column-gap: ${() => clampBuilder(920, 1200, 1.3, 2)};
`;

const IconItem = styled(NavLink)`
  & svg {
    fill: var(--color-white);
    transition: fill 0.3s;
    &:hover {
      fill: var(--color-primary);
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Nav type="footer" />

      <FooterParagraph>
        {" "}
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.{" "}
      </FooterParagraph>
      <FooterContent>
        <FooterText>
          <span> Copyright 2023. All Rights Reserved </span>
        </FooterText>

        <IconList>
          <IconItem>
            <SVG src={IconFacebook} />
          </IconItem>

          <IconItem>
            <SVG src={IconX} />
          </IconItem>

          <IconItem>
            <SVG src={IconInstagram} />
          </IconItem>
        </IconList>
      </FooterContent>
    </StyledFooter>
  );
}

export default Footer;
