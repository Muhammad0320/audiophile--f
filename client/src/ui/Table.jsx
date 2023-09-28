import { createContext, useContext } from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  margin: 2rem 0;

  border: 1px solid var(--color-dark-2);

  background-color: var(--color-white-2);

  font-size: 1.5rem;

  color: var(--color-dark);
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.column};
  align-content: center;

  column-gap: 2rem;
`;

const Header = styled(CommonRow)`
  padding: 1.2rem 2rem;

  border-bottom: 1px solid var(--color-dark-2);
`;

const Footer = styled.footer`
  display: flex;
  padding: 1.2rem 2rem;
  align-items: center;

  &:not(:has(*)) {
    display: none;
  }
`;

const Body = styled.div`
  margin: 0.5rem 0;
`;

const Row = styled.div`
  padding: 0.8rem 1.2rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-dark-2);
  }
`;

// Create context

const TableContext = createContext();

// Create parent element

function Table({ children, column }) {
  return (
    <TableContext.Provider value={{ column }}>
      <TableContainer> {children} </TableContainer>
    </TableContext.Provider>
  );
}

// Create child elements

const TableHeader = ({ children }) => {
  const { column } = useContext(TableContext);

  return <Header column={column}> {children} </Header>;
};

// Join the parent to its childrens

export default Table;
