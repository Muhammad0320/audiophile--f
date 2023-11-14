import styled from "styled-components";
import { createContext, useContext } from "react";
import { clampBuilder } from "../styles/clampFunction";

// https://dev.to/devland/clean-code-principles-for-javascript-and-typescript-developers-3kdn

const TableAndButtonContainer = styled.div`
  display: flex;

  flex-flow: column;

  row-gap: ${() => clampBuilder(320, 1200, 1.5, 3.5)};

  & > button {
    text-align: center;

    justify-self: center;

    align-self: flex-end;
  }
`;

const TableContainer = styled.div`
  background-color: transparent;

  font-size: ${() => clampBuilder(320, 1200, 1, 1.5)};

  color: var(--color-dark);

  position: relative;
`;

const CommonRow = styled.div`
  display: grid;

  grid-template-columns: ${(props) => props.column};

  align-items: center;
  transition: none;
  column-gap: ${() => clampBuilder(320, 1200, 1.7, 2)};
`;

const Header = styled(CommonRow)`
  padding: ${() => clampBuilder(320, 1200, 1, 1.5)};
  ${() => clampBuilder(320, 1200, 1.2, 2)};
  font-size: ${() => clampBuilder(320, 1200, 1.2, 2)};

  font-weight: 600;
  border-bottom: 1px solid var(--color-white-2);

  hyphens: auto;
`;

const Footer = styled.footer`
  display: flex;
  padding: ${() => clampBuilder(320, 1200, 1, 1.5)};
  ${() => clampBuilder(320, 1200, 1.3, 2)};
  align-items: center;

  &:not(:has(*)) {
    display: none;
  }
`;

const Body = styled.div`
  margin: 0.5rem 0;
`;

const Row = styled(CommonRow)`
  padding: ${() => clampBuilder(320, 1200, 0.5, 0.8)};
  ${() => clampBuilder(320, 1200, 1.2, 1.5)};

  color: var(--color-dark-3);

  font-size: ${() => clampBuilder(320, 1200, 1.1, 2)};

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-white-2);
  }
`;

const Empty = styled.div`
  font-size: ${() => clampBuilder(320, 1200, 1.3, 2.5)};
  color: currentColor;

  text-align: center;

  padding: ${() => clampBuilder(320, 1200, 1.9, 4)} 0;
`;

// Create context

const TableContext = createContext();

// Create parent element

function Table({ children, column }) {
  return (
    <TableContext.Provider value={{ column }}>
      <TableAndButtonContainer>
        <TableContainer role="table"> {children}</TableContainer>
      </TableAndButtonContainer>
    </TableContext.Provider>
  );
}

// Create child elements

const TableHeader = ({ children }) => {
  const { column } = useContext(TableContext);

  return (
    <Header as="header" role="row" column={column}>
      {" "}
      {children}{" "}
    </Header>
  );
};

const TableRow = ({ children }) => {
  const { column } = useContext(TableContext);

  return (
    <Row role="row" column={column}>
      {" "}
      {children}{" "}
    </Row>
  );
};

const TableBody = ({ data, render, resource }) => {
  if (!data.length)
    return (
      <Empty> {`There is no ${resource} to display  at the moment ☹ `} </Empty>
    );

  return <Body> {data.map(render)} </Body>;
};

const TableFooter = ({ children }) => {
  return <Footer> {children} </Footer>;
};

// Join the parent to its childrens

Table.Header = TableHeader;

Table.Row = TableRow;

Table.Footer = TableFooter;

Table.Body = TableBody;

export default Table;
