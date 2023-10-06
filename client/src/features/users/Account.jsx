import { NavLink, Outlet } from "react-router-dom";
import { css, styled } from "styled-components";

const PageContainer = styled.div`
  background-color: var(--color-white);
  /* height: 100vh; */
  /* width: 100vw; */

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10rem 0;
`;

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* width: 80%; */
  margin: 0 8rem;

  background-color: var(--color-white-1);
  box-shadow: var(--box-shadow-dark);
`;

const NavList = styled.ul`
  color: var(--color-white);

  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 4rem;
`;

const Sidebar = styled.div`
  grid-column: 1 / 2;

  background: var(--color-primary-light);

  background-image: var(--color-gradient-dark-1);

  padding: 2rem 3rem;
`;

const NavItem = styled(NavLink)`
  display: flex;
  font-size: 2rem;
  padding: 1rem;
  justify-content: center;
  align-content: center;
  text-transform: uppercase;
  position: relative;
  transition: translate 0.3s;
  cursor: pointer;

  &:hover {
    translate: 1rem 0.5rem;
  }

  &::before {
    content: "";
    height: 100%;

    width: 4px;
    position: absolute;
    transform: scaleY(0);
    background-color: var(--color-white);
    left: -8rem;
    top: 0;
    transition: transform 0.2s;
  }

  &.active,
  &.active:link,
  &.active:visited,
  &:hover::before {
    transform: scaleY(1);
  }

  ${(props) => props.active === "true" && css``}
`;

function Account() {
  return (
    <PageContainer>
      <DetailsContainer>
        <Sidebar>
          {" "}
          <NavList>
            {" "}
            <NavItem to="/settings"> settings </NavItem>{" "}
            <NavItem to="/my-cart"> My Cart </NavItem>{" "}
            <NavItem to="/my-reviews"> My Reviews </NavItem>{" "}
            <NavItem to="/my-order"> My order </NavItem>{" "}
          </NavList>{" "}
        </Sidebar>
        <Outlet />
      </DetailsContainer>
    </PageContainer>
  );
}

export default Account;
