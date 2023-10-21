import { BiSolidCommentDetail } from "react-icons/bi";
import { HiCog6Tooth, HiShoppingCart, HiTruck } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";

import { useViewport } from "../../context/ViewPort";

const PageContainer = styled.div`
  background-color: var(--color-white);

  padding: ${() => clampBuilder(320, 1200, 5, 10)} 0;
`;

const DetailsContainer = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: column;
  background-color: var(--color-white-1);
  box-shadow: var(--box-shadow-dark);
  background-image: var(--color-gradient-dark-muted);

  @media (max-width: 920px) {
    grid-template-columns: ${() => clampBuilder(320, 920, 4, 9)} 1fr;
  }
`;

const OutletContainer = styled.div`
  grid-column: 2 / -1;

  @media (max-width: 920px) {
    grid-column: 2 / -1;
  }
`;

const NavList = styled.ul`
  color: var(--color-white);

  display: flex;
  flex-flow: column;

  justify-content: center;
  align-items: center;
  row-gap: ${() => clampBuilder(320, 1200, 2, 4)};
  padding-left: 0;
  margin-top: var(--margin-very-small);

  &:has(a) a {
    color: var(--color-white);
    position: relative;

    transition: color 0.2s 0.2s;

    &.active,
    &:hover {
      z-index: 10000;
      color: var(--color-primary-muted);
    }
  }
`;

const Sidebar = styled.div`
  grid-column: 1 / 2;
  background: var(--color-primary-muted);

  background-image: var(--color-gradient-dark);
  position: relative;
`;

const NavItem = styled(NavLink)`
  position: relative;
  width: 85%;
  padding: ${() => clampBuilder(320, 1200, 1.2, 2)};
  ${() => clampBuilder(320, 1200, 1.6, 3)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${() => clampBuilder(320, 1200, 1, 1.5)};
  font-size: ${() => clampBuilder(920, 1200, 1.3, 2.5)};
  text-transform: uppercase;
  cursor: pointer;

  &::before {
    content: "";
    height: 100%;

    width: 4px;
    position: absolute;
    transform: scaleY(0);
    background-color: var(--color-white-vivid);

    left: -1rem;
    top: 0;
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s;
  }

  &.active::before,
  &:hover::before {
    translate: 1rem 0.3rem;
    background-color: var(--color-white-vivid);
    width: 100%;

    transform: scaleY(1);
    z-index: -1;
  }
`;

const CollapesdSidebar = styled.aside`
  background: var(--color-primary-muted);

  background-image: var(--color-gradient-dark);

  grid-column: 1 / 2;
`;

const CollapesdSidebarLink = styled(NavLink)`
  display: flex;

  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--color-white-vivid);
  font-size: ${() => clampBuilder(320, 920, 2, 3)};
  transition: color 0.2s;

  &:hover,
  &.active {
    color: var(--color-primary-dark);
    opacity: 0.7;
  }
`;

function Account({ children }) {
  const { viewportWidth } = useViewport();

  return (
    <PageContainer>
      <DetailsContainer>
        {viewportWidth <= 920 ? (
          <CollapesdSidebar>
            <NavList>
              <CollapesdSidebarLink to="/settings">
                <HiCog6Tooth />
              </CollapesdSidebarLink>
              <CollapesdSidebarLink to="/my-cart">
                <HiShoppingCart />
              </CollapesdSidebarLink>
              <CollapesdSidebarLink to="/my-reviews">
                <BiSolidCommentDetail />
              </CollapesdSidebarLink>
              <CollapesdSidebarLink to="/my-order">
                <HiTruck />
              </CollapesdSidebarLink>
            </NavList>
          </CollapesdSidebar>
        ) : (
          <Sidebar>
            {" "}
            <NavList>
              {" "}
              <NavItem to="/settings">
                {" "}
                <span> {<HiCog6Tooth />} </span>
                <span> My settings </span>{" "}
              </NavItem>{" "}
              <NavItem to="/my-cart">
                <span> {<HiShoppingCart />}</span>

                <span> My cart </span>
              </NavItem>{" "}
              <NavItem to="/my-reviews">
                <span>
                  {" "}
                  <BiSolidCommentDetail />{" "}
                </span>

                <span> My review </span>
              </NavItem>{" "}
              <NavItem to="/my-order">
                <span>
                  {" "}
                  <HiTruck />{" "}
                </span>

                <span> My order </span>
              </NavItem>{" "}
            </NavList>{" "}
          </Sidebar>
        )}

        <OutletContainer>{children}</OutletContainer>
      </DetailsContainer>
    </PageContainer>
  );
}

export default Account;
