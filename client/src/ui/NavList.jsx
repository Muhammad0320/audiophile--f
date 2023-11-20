import { NavLink } from "react-router-dom";
import { clampBuilder } from "../styles/clampFunction";
import styled from "styled-components";

const StyledNavList = styled.ul`
  display: flex;
  column-gap: ${() => clampBuilder(430, 1200, 1, 4)};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding-left: 0;

  @media (max-width: 920px) {
    column-gap: ${() => clampBuilder(350, 1200, 1.8, 3)};
  }

  @media (max-width: 420px) {
    flex-direction: column;
    row-gap: 1.2rem;
    align-items: center;
  }
`;

const NavItem = styled(NavLink)`
  color: var(--color-white-2);
  font-size: ${() => clampBuilder(920, 1200, 0.9, 1.7)};

  &:hover {
    color: var(--color-primary);
  }

  &.active {
    color: var(--color-primary);
  }

  @media (max-width: 920px) {
    font-size: ${() => clampBuilder(350, 920, 1, 1.4)};
  }
`;

function NavList() {
  return (
    <StyledNavList>
      <NavItem to="/home">Home</NavItem>

      <NavItem to="/headphones">Headphones</NavItem>

      <NavItem to="/speakers">speakers</NavItem>

      <NavItem to="/earphones">earphones</NavItem>
    </StyledNavList>
  );
}

export default NavList;
