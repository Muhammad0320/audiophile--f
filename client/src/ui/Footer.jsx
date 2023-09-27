import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

import SVG from "react-inlinesvg";
import { IconFacebook, IconInstagram, IconX } from "./Icons";

const StyledFooter = styled.div`
  grid-column: 1 / -1;

  background-color: var(--color-dark);
  padding: 2rem 12rem;
`;

const FooterText = styled.div`
  color: var(--color-white-2);
  opacity: 0.5;
  font-weight: 400;
  font-size: 1.6rem;

  & > p:first-of-type {
    margin-bottom: 6rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconList = styled.div`
  align-self: center;
  display: flex;
  column-gap: 2rem;
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

      <FooterContent>
        <FooterText>
          <p>
            {" "}
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team <br /> of music lovers and sound specialists who are
            devoted to helping you get <br /> the most out of personal audio.
            Come and visit our demo facility - we’re open 7 <br /> days a week.{" "}
          </p>

          <p> Copyright 2023. All Rights Reserved </p>
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
