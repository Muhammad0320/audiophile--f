import { css, styled } from "styled-components";

const PageContainer = styled.div`
  background-color: var(--color-white);

  display: grid;
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
  background-color: var(--color-primary);
  padding: 2rem 3rem;
`;

const NavItem = styled.li`
  display: flex;
  font-size: 2rem;
  justify-content: center;
  align-content: center;

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
