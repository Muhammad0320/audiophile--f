import { css, styled } from "styled-components";

const PageContainer = styled.div`
  background-color: var(--color-white);

  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
`;

const DetailsContainer = styled.div`
  background-color: var(--color-white-1);
  padding: 2rem 4rem;
  box-shadow: var(--box-shadow);
`;

const NavList = styled.ul`
  color: var(--color-white);

  display: flex;
  flex-flow: column;
  row-gap: 1rem;
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

  &::before {
    content: "";
    height: 100%;

    width: 2px;
    position: absolute;
    transform: scaleY(0);
    background-color: var(--color-primary);
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
