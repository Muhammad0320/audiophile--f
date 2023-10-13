import { createContext, useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useSendBulkData } from "../features/cart/useSendBulkData";
import SpinnerMini from "./SpinnerMini";
import { useCheckoutSession } from "../features/payment/useCheckoutSession";

const TableAndButtonContainer = styled.div`
  display: flex;

  flex-flow: column;

  row-gap: 3rem;

  & > button {
    text-align: center;

    justify-self: center;

    align-self: flex-end;
  }
  margin: 3rem 5rem;
`;

const TableContainer = styled.div`
  border: 1px solid var(--color-dark-2);

  background-color: var(--color-white-1);

  font-size: 1.5rem;

  color: var(--color-dark);
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.column};
  align-items: center;
  /* text-align: center; */
  transition: none;

  column-gap: 2.5rem;
`;

const Header = styled(CommonRow)`
  padding: 1.2rem 2rem;
  text-transform: uppercase;
  font-size: 1.8rem;
  background-color: var(--color-white-2);
  font-weight: 600;
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

const Row = styled(CommonRow)`
  padding: 0.8rem 1.2rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-dark-2);
  }
`;

const Empty = styled.div`
  font-size: 1.7rem;
  color: currentColor;

  text-align: center;

  padding: 4rem 0;
`;

// Create context

const TableContext = createContext();

// Create parent element

function Table({ children, column }) {
  const { isLoading, checkout } = useCheckoutSession();

  const handleCheckout = () => {
    if (!isLoading) {
      checkout();
    }
  };

  return (
    <TableContext.Provider value={{ column }}>
      <TableAndButtonContainer>
        <TableContainer role="table">
          {" "}
          <> {children} </>{" "}
        </TableContainer>

        {
          <Button
            disabled={isLoading}
            withspinner={isLoading ? "true" : ""}
            onClick={() => checkout()}
          >
            {isLoading ? (
              <>
                {" "}
                <SpinnerMini /> <span> checking out... </span>{" "}
              </>
            ) : (
              <span> checkout </span>
            )}
          </Button>
        }
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
