import { styled } from "styled-components";

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
`;

const Sidebar = styled.div`
  background-color: var(--color-primary);
  padding: 2rem 3rem;
`;
