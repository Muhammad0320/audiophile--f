import { Outlet } from "react-router-dom";
import { css, styled } from "styled-components";

const PageContainer = styled.div`
  background-color: var(--color-white);
  padding: 15rem 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OutLetContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

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

  background-color: var(--color-primary);
  padding: 2rem 3rem;
`;

const NavItem = styled.a`
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
            <NavItem href="/settings"> settings </NavItem>{" "}
            <NavItem> My Cart </NavItem> <NavItem> My Reviews </NavItem>{" "}
            <NavItem> My order </NavItem>{" "}
          </NavList>{" "}
        </Sidebar>
        <Outlet>
          <Outlet />
        </Outlet>
      </DetailsContainer>
    </PageContainer>
  );
}

export default Account;
