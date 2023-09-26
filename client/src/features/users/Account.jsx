import { css, styled } from "styled-components";

const PageContainer = styled.div`
  background-color: var(--color-white);

  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  background-color: var(--color-white-1);
  box-shadow: var(--box-shadow);
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

const NavItem = styled.li`
  display: flex;
  font-size: 2rem;
  justify-content: center;
  align-content: center;
  text-transform: uppercase;
  position: relative;

  &::before {
    content: "";
    height: 100%;

    width: 4px;
    position: absolute;
    transform: scaleY(0);
    background-color: var(--color-white);
    left: -7rem;
    top: 0;
    transition: transform 0.2s;
  }

  &:hover::before {
    transform: scaleY(1);
  }

  ${(props) => props.active === "true" && css``}
`;

const InfoDetails = styled.div`
  padding: 2rem 3rem;
  grid-column: 2 / -1;
`;

function Account() {
  return (
    <PageContainer>
      <DetailsContainer>
        <Sidebar>
          {" "}
          <NavList>
            {" "}
            <NavItem> settings </NavItem> <NavItem> My Cart </NavItem>{" "}
            <NavItem> My Reviews </NavItem> <NavItem> My order </NavItem>{" "}
          </NavList>{" "}
        </Sidebar>
        <InfoDetails> </InfoDetails>
      </DetailsContainer>
    </PageContainer>
  );
}

export default Account;
