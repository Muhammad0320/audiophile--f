import { BiSolidCommentDetail } from "react-icons/bi";
import { HiCog6Tooth, HiShoppingCart, HiTruck } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const PageContainer = styled.div`
  background-color: var(--color-white);

  z-index: -5;
  padding: 10rem 0;
`;

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-auto-flow: column;

  background-color: var(--color-white-1);

  box-shadow: var(--box-shadow-dark);
`;

const OutletContainer = styled.div`
  grid-column: 2 / -1;
`;

const NavList = styled.ul`
  color: var(--color-white);

  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 4rem;
  padding-left: 0;
  margin-top: var(--margin-small);

  &:has(a) a {
    color: var(--color-white);
    position: relative;

    transition: color 0.2s 0.1s;

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
  width: 100%;
  padding: var(--padding-tiny) var(--padding-small);
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  align-items: center;
  font-size: var(--font-small);
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

function Account({ children }) {
  return (
    <PageContainer>
      <DetailsContainer>
        <BiSolidCommentDetail />
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
        <OutletContainer>{children}</OutletContainer>
      </DetailsContainer>
    </PageContainer>
  );
}

export default Account;
